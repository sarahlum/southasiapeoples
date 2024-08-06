import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import chinaFlag from '../../media/china-flag.webp';
import indiaFlag from '../../media/india-flag.webp';
import japanFlag from '../../media/japan-flag.webp';
import singaporeFlag from '../../media/singapore-flag.webp';
import thailandFlag from '../../media/thailand-flag.webp';
import malaysiaFlag from '../../media/malaysia-flag.webp';

//used to be line 95
//<p>{flag.name} - Groups: {data.counts[flag.code]} - Population: {data.populations[flag.code]}</p>

export default function Welcome() {
    const [data, setData] = useState({ counts: {}, populations: {} }); // State to hold counts and populations for each country
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

    const flags = [
        { name: 'India', src: indiaFlag, code: 'India' },
        { name: 'Pakistan', src: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg', code: 'Pakistan' },
        { name: 'Bangladesh', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg', code: 'Bangladesh' },
        { name: 'Sri Lanka', src: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg', code: 'Sri Lanka' },
        { name: 'Nepal', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/738px-Flag_of_Nepal.svg.png', code: 'Nepal' },
        { name: 'Bhutan', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1200px-Flag_of_Bhutan.svg.png', code: 'Bhutan' }
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
            <Head title="South Asia Peoples"/>
            <link rel="stylesheet" href="styles.css"></link>
           
            <header>
                <div className="header-container">
                    <h1>South Asia Peoples</h1>
                    <nav>
                        <a href="#">HOME</a>
                        <a href="#">LISTINGS</a>
                        <a href="#">HELP</a>
                        <a href="#">FEEDBACK</a>
                        <input type="text" placeholder="Search Text" id="searchInput"/>
                        <div className="autocomplete-suggestions" id="autocompleteSuggestions"></div>
                    </nav>
                </div>
            </header>
        
            <section className="intro">
                <h2>Explore people group data from every State and District in South Asia</h2>
                <div className="search-options">
                    <div className="search-box">
                        <input type="text" placeholder="Search for a people group, language, or place" id="mainSearchInput"/>
                        <div className="autocomplete-suggestions" id="mainAutocompleteSuggestions"></div>
                    </div>
                    <div className="or-text">- or -</div>
                    <div className="country-select">
                        <h3>Choose a country below</h3>
                        <div className="country-flags">
                            {flags.map(flag => (
                                <div className="flag" key={flag.code} id={flag.code.toLowerCase()}>
                                    <img src={flag.src} alt={flag.name} />
                                    <p>{flag.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
           
            <section className="carousel">
                <h3>Unreached People Groups</h3>
                <div className="carousel-container" id="carouselContainer">
                    <div className="carousel-item">People Group 1</div>
                    <div className="carousel-item">People Group 2</div>
                    <div className="carousel-item">People Group 3</div>
                </div>
                <button className="carousel-button" id="prevButton">&#10094;</button>
                <button className="carousel-button" id="nextButton">&#10095;</button>
            </section>

            <section className="more-info">
                <h3>More Information</h3>
                <div className="info-item">
                    <h4>India</h4>
                    <p>Detailed information about people groups in India...</p>
                </div>
                <div className="info-item">
                    <h4>Bhutan</h4>
                    <p>Detailed information about people groups in Bhutan...</p>
                </div>
                <div className="info-item">
                    <h4>Nepal</h4>
                    <p>Detailed information about people groups in Nepal...</p>
                </div>
            </section>

            <section className="map">
                <h3>Interactive Map</h3>
                <div id="map"></div>
            </section>

            <section className="statistics">
                <h3>Statistics</h3>
                <div className="stats-container">
                    <div className="stat-item">
                        <h4>1000+</h4>
                        <p>People Groups</p>
                    </div>
                    <div className="stat-item">
                        <h4>500+</h4>
                        <p>Languages</p>
                    </div>
                    <div className="stat-item">
                        <h4>300+</h4>
                        <p>Unreached Groups</p>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h3>Testimonials</h3>
                <div className="testimonial-item">
                    <p>"This site is amazing!" - User 1</p>
                </div>
                <div className="testimonial-item">
                    <p>"Incredible resource for missionaries." - User 2</p>
                </div>
            </section>

            <section className="contact">
                <h3>Contact Us</h3>
                <form id="contactForm">
                    <input type="text" placeholder="Your Name" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>

            <button id="backToTop" title="Back to Top">&#8679;</button>
            
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
