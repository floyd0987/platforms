import subdomains from '@/data/subdomains.json';

type SubdomainData = {
  subdomain: string;
  emoji: string;
  createdAt: string; // ISO date string
};

export function isValidIcon(str: string) {
  if (str.length > 10) return false;
  try {
    return /[\p{Emoji}]/u.test(str);
  } catch {
    return str.length >= 1 && str.length <= 10;
  }
}

export async function getSubdomainData(subdomain: string): Promise<{
  emoji: string;
  createdAt: number;
} | null> {
  const sanitized = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');

  const match = (subdomains as SubdomainData[]).find(
    (item) => item.subdomain === sanitized
  );

  if (!match) return null;

  return {
    emoji: match.emoji,
    createdAt: new Date(match.createdAt).getTime()
  };
}

export async function getAllSubdomains(): Promise<
  { subdomain: string; emoji: string; createdAt: number }[]
> {
  return (subdomains as SubdomainData[]).map((item) => ({
    subdomain: item.subdomain,
    emoji: item.emoji,
    createdAt: new Date(item.createdAt).getTime()
  }));
}
