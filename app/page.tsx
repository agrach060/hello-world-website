"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';

const InterestsList = dynamic(() => import('../components/InterestsList'), { ssr: false });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* Welcome message */}
            <h1 className="text-4xl font-bold text-center my-8">Hi everyone! Welcome to my page!</h1>

            {/* Narrative and image */}
            <div className="text-center mb-8">
                <p className="mb-4">I'm Anna Gracheva, a senior student at UW Bothell. I'm majoring in Computer Science and love to code.</p>
                <Image
                    src="/My picture.jpg"
                    alt="Me"
                    width={360}
                    height={360}
                    priority
                />
            </div>

            {/* Dynamically included Interests list */}
            <InterestsList />
        </main>
    );
}