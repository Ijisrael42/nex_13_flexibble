"use client";

import { getProviders, signIn } from 'next-auth';
import { useState, useEffect } from 'react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signInUrl: string;
  callbackUrl: string;
  signUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log(res)
      setProviders(res);
    }

    fetchProviders();
  })
  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider, i) => (
          <button key={i}>{ provider.id }</button>
        ))}
      </div>
    )
  }
  return (
    <div>AuthProviders</div>
  )
}

export default AuthProviders