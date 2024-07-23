import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function Welcome() {
    const [counts, setCounts] = useState({}); // State to hold counts for each country
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/fetch-data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('API Response:', data); // Check the data structure
                setCounts(data.counts); // Set the counts for each country
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    // Define an array with flag data including the counts
    const flags = [
        { name: 'India', href: 'https://www.southasiapeoples.org/listing?data_type=rog3&data_value=IN', src: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg' },
        { name: 'Pakistan', href: 'https://www.southasiapeoples.org/listing?data_type=rog3&data_value=PK', src: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg' },
        { name: 'Bangladesh', href: 'https://www.southasiapeoples.org/listing?data_type=rog3&data_value=BG', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg' },
        { name: 'Sri Lanka', href: 'https://www.southasiapeoples.org/listing?data_type=rog3&data_value=CE', src: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg' },
        { name: 'Nepal', href: 'https://www.southasiapeoples.org/listing?data_type=rog3&data_value=NP', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/738px-Flag_of_Nepal.svg.png' },
        { name: 'Bhutan', href: 'https://www.southasiapeoples.org/listing?data_type=rog3&data_value=BT', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1200px-Flag_of_Bhutan.svg.png' }
    ];

    if (loading) {
        return (
            <div className="bg-white min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">Error: {error.message}</h1>
            </div>
        );
    }

    return (
        <>
            <Head title="South Asia Peoples" />
            <div className="bg-white min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">South Asia Peoples</h1>
                <p className="text-sm mb-4">Click any flag to start</p>
                <div className="flex space-x-4">
                    {flags.map((country, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <a href={country.href}>
                                <div className="flex items-center justify-center h-32 w-32 bg-white p-2">
                                    <img
                                        src={country.src}
                                        alt={country.name}
                                        className="max-h-full max-w-full"
                                    />
                                </div>
                            </a>
                            <span>{country.name}</span>
                            <p className="text-sm mt-2">Unreached groups: {counts[country.name] || 0}</p> {/* Display count */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
