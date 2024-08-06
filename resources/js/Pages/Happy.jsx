import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import indiaFlag from '../../media/india-flag.webp';

export default function Happy() {
    const [data, setData] = useState({ counts: {}, populations: {} });
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
                setData(data); // Set the counts and populations for each country
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

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
            <Head title="Happy" />
            <link rel="stylesheet" href="styles.css" />

            <header>
                <div className="header-container">
                    <h1>South Asia Peoples</h1>
                    <nav>
                        <a href="#">HOME</a>
                        <a href="#">LISTINGS</a>
                        <a href="#">HELP</a>
                        <a href="#">FEEDBACK</a>
                        <input type="text" placeholder="Search Text" id="searchInput" />
                        <div className="autocomplete-suggestions" id="autocompleteSuggestions"></div>
                    </nav>
                </div>
            </header>

            <main className="content-container">
                <div>
                    <h1 className="big-title">India</h1>
                    <img src={indiaFlag} alt="India Flag" className="india-flag" />
                </div>
                <div className="info-box">
                    <h2>Population: 1,442,981,515</h2>
                </div>
                <div className="info-box">
                    <h2>Population Unreached: {data.populations.India}</h2>
                </div>
                <div className="info-box">
                    <h2>People Groups: 2,272</h2>
                </div>
                <div className="info-box">
                    <h2>Unreached People Groups: {data.counts.India}</h2>
                </div>
            </main>

            <footer>
                <div className="footer-container">
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="social-media">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </footer>
            <script src="scripts.js"></script>
        </>
    );
}
