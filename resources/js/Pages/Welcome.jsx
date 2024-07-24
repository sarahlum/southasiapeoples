import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import chinaFlag from '../../media/china-flag.webp';
import indiaFlag from '../../media/india-flag.webp';
import japanFlag from '../../media/japan-flag.webp';
import singaporeFlag from '../../media/singapore-flag.webp';
import thailandFlag from '../../media/thailand-flag.webp';
import malaysiaFlag from '../../media/malaysia-flag.webp';

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
            <Head title="South Asia Peoples"/>
            <link rel="stylesheet" href="styles.css"></link>
           
            <header>
                <div class="header-container">
                    <h1>South Asia Peoples</h1>
                    <nav>
                        <a href="#">HOME</a>
                        <a href="#">LISTINGS</a>
                        <a href="#">HELP</a>
                        <a href="#">FEEDBACK</a>
                        <input type="text" placeholder="Search Text" id="searchInput"/>
                        <div class="autocomplete-suggestions" id="autocompleteSuggestions"></div>
                    </nav>
                </div>
            </header>
        
            <section class="intro">
                <h2>Explore people group data from every State and District in South Asia</h2>
                <div class="search-options">
                    <div class="search-box">
                        <input type="text" placeholder="Search for a people group, language, or place" id="mainSearchInput"/>
                        <div class="autocomplete-suggestions" id="mainAutocompleteSuggestions"></div>
                    </div>
                    <div class="or-text">- or -</div>
                    <div class="country-select">
                        <h3>Choose a country below</h3>
                        <div class="country-flags">
                            <div class="flag" id="india">
                                <img src={indiaFlag} alt="India"/>
                                <p>India</p>
                            </div>
                            <div class="flag" id="china">
                                <img src={chinaFlag} alt="China"/>
                                <p>China</p>
                            </div>
                            <div class="flag" id="japan">
                                <img src={japanFlag} alt="Japan"/>
                                <p>Japan</p>
                            </div>
                            <div class="flag" id="malaysia">
                                <img src={malaysiaFlag} alt="Malaysia"/>
                                <p>Malaysia</p>
                            </div>
                            <div class="flag" id="thailand">
                                <img src={thailandFlag} alt="Thailand"/>
                                <p>Thailand</p>
                            </div>
                            <div class="flag" id="singapore">
                                <img src={singaporeFlag} alt="Singapore"/>
                                <p>Singapore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <section class="carousel">
                <h3>Unreached People Groups</h3>
                <div class="carousel-container" id="carouselContainer">
                    <div class="carousel-item">People Group 1</div>
                    <div class="carousel-item">People Group 2</div>
                    <div class="carousel-item">People Group 3</div>
                </div>
                <button class="carousel-button" id="prevButton">&#10094;</button>
                <button class="carousel-button" id="nextButton">&#10095;</button>
            </section>

            <section class="more-info">
                <h3>More Information</h3>
                <div class="info-item">
                    <h4>India</h4>
                    <p>Detailed information about people groups in India...</p>
                </div>
                <div class="info-item">
                    <h4>Bhutan</h4>
                    <p>Detailed information about people groups in Bhutan...</p>
                </div>
                <div class="info-item">
                    <h4>Nepal</h4>
                    <p>Detailed information about people groups in Nepal...</p>
                </div>
            </section>

            <section class="map">
                <h3>Interactive Map</h3>
                <div id="map"></div>
            </section>

            <section class="statistics">
                <h3>Statistics</h3>
                <div class="stats-container">
                    <div class="stat-item">
                        <h4>1000+</h4>
                        <p>People Groups</p>
                    </div>
                    <div class="stat-item">
                        <h4>500+</h4>
                        <p>Languages</p>
                    </div>
                    <div class="stat-item">
                        <h4>300+</h4>
                        <p>Unreached Groups</p>
                    </div>
                </div>
            </section>

            <section class="testimonials">
                <h3>Testimonials</h3>
                <div class="testimonial-item">
                    <p>"This site is amazing!" - User 1</p>
                </div>
                <div class="testimonial-item">
                    <p>"Incredible resource for missionaries." - User 2</p>
                </div>
            </section>

            <section class="contact">
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
                <div class="footer-container">
                    <div class="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact</a>
                    </div>
                    <div class="social-media">
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
