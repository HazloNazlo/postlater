import React from 'react';
import CreatePost from '../components/CreatePost';
import ScheduledPosts from '../components/ScheduledPosts';
import Analytics from '../components/Analytics';
import ConnectedAccounts from '../components/ConnectedAccounts';

const Dashboard: React.FC = () => {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <CreatePost />
          <ScheduledPosts />
        </div>
        <div className="space-y-8">
          <Analytics />
          <ConnectedAccounts />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;