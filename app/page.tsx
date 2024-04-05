'use client'
import Image from "next/image";
import { useState } from 'react';

export default function Home() {

  const [interests, setInterests] = useState(['Coding', 'Painting by numbers', 'Gaming', 'Hiking']);

  const reorderInterests = () => {
    setInterests((prevInterests) => [...prevInterests].reverse());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Welcome message */}
      <h1 className="text-4xl font-bold text-center my-8">Hi everyone! Welcome to my page!</h1>

      {/* Narrative and image */}
      <div className="text-center mb-8">
        <p className="mb-4">I'm Anna Gracheva, a senior student at UW Bothell. I'm majoring in Computer Scince and love to code.</p>
        <Image
          src="/My picture.jpg"
          alt="Me"
          width={360}
          height={360}
          priority
        />
      </div>

      {/* Interests */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">My interests:</h2>
        <ul className="list-disc mb-4">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <button
          onClick={reorderInterests}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Reorder Interests
        </button>
      </div>


    </main>
  );
}
