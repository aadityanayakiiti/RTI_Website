'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(username, password);
        } catch (err) {
            setError('Invalid username or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-iit-gray-light">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl border border-gray-200">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-iit-maroon">Admin Panel Login</h1>
                    <p className="mt-2 text-iit-gray-medium">Please sign in to continue</p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 mt-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-iit-maroon"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-iit-maroon"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center items-center py-3 px-4 text-white font-bold rounded-md bg-iit-maroon hover:bg-iit-maroon-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-iit-maroon disabled:bg-gray-400 transition-colors"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                            {!loading && <LogIn className="ml-2" size={18} />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}