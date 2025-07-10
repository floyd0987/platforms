import React from 'react';

interface TenantDashboardProps {
  subdomain: string;
}

const TenantDashboard: React.FC<TenantDashboardProps> = ({ subdomain, subdomainData }) => {

    console.log("subdomain", subdomain);
    
    console.log("subdomainData",subdomainData);
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="max-w-xl w-full p-8 bg-gray-50 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">
          {subdomain} Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to your tenant dashboard. Here you can manage your settings, view analytics, and access tenant-specific features.
        </p>
        {/* Example sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold mb-2">Settings</h2>
            <p className="text-sm text-gray-500">Manage your tenant preferences and configuration.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold mb-2">Analytics</h2>
            <p className="text-sm text-gray-500">View usage statistics and reports for your tenant.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;