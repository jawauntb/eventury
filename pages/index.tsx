// pages/index.tsx

import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col justify-center items-center">
      <Head>
        <title>Eventure</title>
        <meta name="description" content="Eventure - Seamless Event Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center w-9/12 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <span className="text-blue-500">Eventure</span>!
        </h1>
        <p className="text-xl text-center mb-6">
          Seamless event management with rewards for stakeholders.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 transform hover:scale-110 text-white font-medium py-2 px-4 rounded shadow-md">
            Artists Portal
          </button>
          <button className="bg-green-500 hover:bg-green-600 transform hover:scale-110 text-white font-medium py-2 px-4 rounded shadow-md">
            Venue Portal
          </button>
          <button className="bg-red-500 hover:bg-red-600 transform hover:scale-110 text-white font-medium py-2 px-4 rounded shadow-md">
            Fundraiser Portal
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 transform hover:scale-110 text-white font-medium py-2 px-4 rounded shadow-md">
            Stakeholders Portal
          </button>
        </div>
      </main>

      <footer className="mt-8">
        <p className="text-gray-600">
          Made with ❤️ by Eventure Team
        </p>
      </footer>
    </div>
  );
}
