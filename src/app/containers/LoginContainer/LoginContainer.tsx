'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginContainer() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      setLoading(false);

      if (res?.error) {
        setError('Email o contraseña incorrectos');
        return;
      }

      router.push('/');
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message);
        setError(e.message);
      } else {
        console.error('Unknown error', e);
        setError('Unknown error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="emailInput">Email</label>
              <input
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="emailInput"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label htmlFor="passwordInput">Password</label>
              <input
                className="u-full-width"
                type="password"
                placeholder="Password"
                id="passwordInput"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div style={{ color: 'red', marginBottom: 10 }}>{error && <strong>{error}</strong>}</div>
          <input className={loading ? '' : 'button-primary'} type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}
