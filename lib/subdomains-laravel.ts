type SubdomainData = {
  emoji: string;
  createdAt: number;
};

export function isValidIcon(str: string) {
  if (str.length > 10) return false;

  try {
    const emojiPattern = /[\p{Emoji}]/u;
    return emojiPattern.test(str);
  } catch {
    return str.length >= 1 && str.length <= 10;
  }
}

export async function getSubdomainData(subdomain: string): Promise<SubdomainData | null> {
  const sanitized = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');

  try {
    const res = await fetch(`https://api.yourdomain.com/api/subdomains/${sanitized}`);

    if (!res.ok) {
      console.warn(`Subdomain not found: ${sanitized}`);
      return null;
    }

    const data = await res.json();
    return {
      emoji: data.emoji ?? '❓',
      createdAt: new Date(data.created_at).getTime()
    };
  } catch (err) {
    console.error(`Failed to fetch subdomain data: ${subdomain}`, err);
    return null;
  }
}

export async function getAllSubdomains(): Promise<
  { subdomain: string; emoji: string; createdAt: number }[]
> {
  try {
    const res = await fetch(`https://api.yourdomain.com/api/subdomains`);
    const data = await res.json();

    return data.map((item: any) => ({
      subdomain: item.subdomain,
      emoji: item.emoji || '❓',
      createdAt: new Date(item.created_at).getTime()
    }));
  } catch (err) {
    console.error('Failed to fetch all subdomains', err);
    return [];
  }
}
