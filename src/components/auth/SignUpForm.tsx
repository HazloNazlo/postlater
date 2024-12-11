import React, { useState } from 'react';
import { X } from 'lucide-react';
import SocialAuth from './SocialAuth';

interface SignUpFormProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onClose, onSwitchToSignIn }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic
  };

  return (
    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full m-4 p-8 min-h-[580px] flex flex-col justify-center">
      <div className="flex flex-col mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h3>
        <p className="text-gray-600 text-xs mt-1 mb-4">
          Schedule your social media posts and monitor engagement with Postlater's powerful analytics.
        </p>
        <button
          className="text-gray-400 hover:text-gray-500 absolute top-6 right-6"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-custom focus:border-custom transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-custom text-white rounded-lg px-6 py-3 font-semibold hover:bg-custom/90 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Sign up with Email
        </button>

        <SocialAuth />

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <button onClick={onSwitchToSignIn} className="text-custom hover:underline">
            Sign in
          </button>
        </p>

        <p className="text-xs text-gray-500 text-center mt-6">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-custom hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-custom hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;