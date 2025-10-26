'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterContainer() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: `${firstName} ${lastName}`, email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error trying to create the user');
      }
      router.push('/login');
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
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="firstNameInput">First name</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="First name"
                id="firstNameInput"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="six columns">
              <label htmlFor="lastNameInput">Last name</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Last name"
                id="lastNameInput"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
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
            <div className="six columns">
              <label htmlFor="reasonInput">You are?</label>
              <select className="u-full-width" id="reasonInput">
                <option value="Option 1">Reader</option>
                <option value="Option 2">Editor</option>
                <option value="Option 3">Other</option>
              </select>
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
