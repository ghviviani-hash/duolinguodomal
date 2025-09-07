// components/Auth.tsx

"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase-client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Separator } from './ui/separator';

// Um ícone simples para o Google (SVG)
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,36.21,44,30.551,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
  </svg>
);

// Ícone simples para a Apple (SVG)
const AppleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.62 14.43c-.41 1.28-1.08 2.4-2.02 3.32c-.93.9-2.03 1.48-3.33 1.57c-.2.01-1.48-.42-2.88-1.25c-1.4-.82-2.73-1.8-3.8-2.8c-1.34-1.25-2.2-2.8-2.5-4.52H5.1c.36 2.31 1.48 4.29 3.03 5.75c1.45 1.34 3.12 2.22 4.98 2.53c.24.04 1.76.54 3.33-.28c.3-.16.6-.33.88-.52c-.63.9-1.25 1.81-1.88 2.73c-.59.88-1.22 1.74-1.92 2.55c.18 0 .36.01.53.01c1.2 0 2.3-.44 3.19-1.3c.85-.82 1.42-1.84 1.73-3.04H19.62M15.01 4.23c1.33 0 2.53.53 3.42 1.43c.9.9 1.42 2.1 1.42 3.43c0 .24-.02.48-.05.71h-1.92c.07-.46.09-.94.09-1.43c0-.8-.29-1.49-.85-2.06c-.57-.56-1.26-.85-2.06-.85c-.79 0-1.47.28-2.04.83c-.57.55-.86 1.23-.86 2.03c0 1.63.63 2.95 1.88 3.98c1.25 1.02 2.78 1.54 4.58 1.54c.2 0 .4-.01.6-.02V17.5h.01c-.24.01-.48.02-.73.02c-1.46 0-2.8-.56-3.83-1.68c-1.04-1.12-1.55-2.48-1.55-4.08c0-1.59.56-2.96 1.67-4.1c1.1-1.14 2.45-1.72 4.02-1.72Z"/>
    </svg>
);


export function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

  const handleOAuthLogin = async (provider: 'google' | 'apple') => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      setMessage({ type: 'error', text: error.message });
    }
    setLoading(false);
  };
  
  const handleEmailLogin = async (event: React.FormEvent, type: 'login' | 'signup') => {
    event.preventDefault();
    setMessage(null);
    setLoading(true);

    const authMethod = type === 'login' 
        ? supabase.auth.signInWithPassword 
        : supabase.auth.signUp;

    const { error } = await authMethod({ email, password });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else if (type === 'signup') {
      setMessage({ type: 'success', text: 'Registo efetuado! Verifique o seu email para confirmar a conta.' });
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Bem-vindo ao DuoMED</CardTitle>
          <CardDescription>Entre na sua conta ou crie uma nova para começar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Botões de Login Social */}
            <div className="flex flex-col gap-3">
              <Button variant="outline" onClick={() => handleOAuthLogin('google')} disabled={loading} className="w-full">
                <GoogleIcon />
                <span className="ml-2">Continuar com Google</span>
              </Button>
              <Button variant="outline" onClick={() => handleOAuthLogin('apple')} disabled={loading} className="w-full">
                <AppleIcon />
                <span className="ml-2">Continuar com Apple</span>
              </Button>
            </div>

            <div className="flex items-center">
              <Separator className="flex-1" />
              <span className="px-4 text-xs text-slate-500">OU</span>
              <Separator className="flex-1" />
            </div>

            {/* Formulário de Email/Senha */}
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <Input 
                type="password" 
                placeholder="Palavra-passe" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              
              {message && (
                <div className={`p-3 rounded-md text-sm ${
                  message.type === 'error' 
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' 
                  : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                }`}>
                  {message.text}
                </div>
              )}

              <div className="flex flex-col gap-3 pt-2">
                <Button onClick={(e) => handleEmailLogin(e, 'login')} disabled={loading} className="w-full">
                  {loading ? 'A entrar...' : 'Entrar'}
                </Button>
                <Button onClick={(e) => handleEmailLogin(e, 'signup')} disabled={loading} variant="secondary" className="w-full">
                  {loading ? 'A registar...' : 'Registar'}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}