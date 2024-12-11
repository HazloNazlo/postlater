import React, { useState } from 'react';
import { X } from 'lucide-react';
import SocialAuth from './SocialAuth';

interface SignInFormProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onClose, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic
  };

  return (
    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full m-4 p-8 min-h-[520px] flex flex-col justify-center">
      <div className="flex flex-col mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Sign in to your account</h3>
        <p className="text-gray-600 text-xs mt-1 mb-4">
          Sign in to manage your posts and analytics
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

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-custom focus:border-custom transition-all duration-200"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-custom text-white rounded-lg px-6 py-3 font-semibold hover:bg-custom/90 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Sign in
        </button>

        <SocialAuth />

        <p className="text-sm text-gray-600 text-center">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignUp} className="text-custom hover:underline">
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;