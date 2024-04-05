import { useState } from 'react';

function InterestsList() {
    const [interests, setInterests] = useState(['Coding', 'Painting by numbers', 'Gaming', 'Hiking']);

    const reorderInterests = () => {
        setInterests((prevInterests) => [...prevInterests].reverse());
    };

    return (
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
    );
}

export default InterestsList;