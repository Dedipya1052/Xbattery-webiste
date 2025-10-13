import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Xbattery</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl mb-8">Page Not Found</h2>
          <p className="text-gray-300 mb-8">The page you are looking for could not be found.</p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
