import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faLink } from '@fortawesome/free-solid-svg-icons';
import { SocialPlatformButtons } from './SocialPlatformButtons';
import type { SocialPlatform } from '../types';

interface CreatePostFormProps {
  onSubmit?: () => void;
  onSaveDraft?: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onSubmit, onSaveDraft }) => {
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialPlatform[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          <button
            type="button"
            className="rounded-lg inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Media
          </button>
          <button
            type="button"
            className="rounded-lg inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            Link
          </button>
        </div>
      </div>

      <textarea
        className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom resize-none"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Schedule for</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            className="block w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            className="block w-full border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Post to</h3>
        <SocialPlatformButtons onChange={setSelectedPlatforms} />
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onSaveDraft}
          className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          Save as draft
        </button>
        <button
          type="submit"
          className="rounded-lg px-4 py-2 text-sm font-medium text-white bg-custom hover:bg-custom/90"
        >
          Schedule post
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;