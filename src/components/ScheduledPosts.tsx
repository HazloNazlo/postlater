import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { Post } from '../types';

const posts: Post[] = [
  {
    id: '1',
    title: 'New product launch announcement',
    platform: 'facebook',
    scheduledFor: 'Tomorrow at 10:00 AM',
    content: ''
  },
  {
    id: '2',
    title: 'Weekly tips and tricks',
    platform: 'twitter',
    scheduledFor: 'Friday at 2:00 PM',
    content: ''
  }
];

const ScheduledPosts: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Scheduled Posts</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <div key={post.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={post.platform === 'facebook' ? faFacebookF : faTwitter}
                  className={post.platform === 'facebook' ? 'text-[#1877F2]' : 'text-[#1DA1F2]'}
                />
                <div>
                  <p className="text-sm text-gray-900">{post.title}</p>
                  <p className="text-xs text-gray-500">Scheduled for {post.scheduledFor}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="rounded-lg p-2 text-gray-400 hover:text-gray-500">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button className="rounded-lg p-2 text-gray-400 hover:text-gray-500">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledPosts;