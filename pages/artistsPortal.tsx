// pages/artists.tsx

import Head from 'next/head';

export default function ArtistsPortal() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Eventure - Artists Portal</title>
        <meta name="description" content="Eventure Artists Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-500 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Artists Portal</h1>
      </header>

      <main className="p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Profile Management</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded shadow-md transform hover:scale-110">
            Edit Profile
          </button>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">My Events</h2>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded shadow-md transform hover:scale-110">
            View Upcoming Events
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded shadow-md transform hover:scale-110 ml-4">
            View Past Events
          </button>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Earnings & Payments</h2>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded shadow-md transform hover:scale-110">
            View Earnings
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded shadow-md transform hover:scale-110 ml-4">
            Setup Payment Method
          </button>
        </section>
      </main>
    </div>
  );
}
