import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';
import {Helmet, HelmetProvider} from 'react-helmet-async';


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.transparent-header');
        const scrollTop = window.scrollY;
        scrollTop >= 1 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
    };

    return (
        <React.Fragment>
            <HelmetProvider>
                <Head>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                    <title>InikCamper - Camper and Van Rental in Gran Canaria</title>
                </Head>
                <Helmet>
                    <link rel="icon" type="image/png" href="/assets/img/icon/camper-van.png"/>
                    <meta name="description" content="Explore Gran Canaria with InikCamper. Camper and van rental with camperization services. Your adventure begins here!"/>
                    <meta name="keywords" content="campervans, camper van, vans, camperization, rental, Gran Canaria, Las Palmas, travel, adventures"/>
                    <meta name="author" content="InikCamper"/>
                    <meta name="robots" content="index, follow"/>
                    <meta name="language" content="en"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="canonical" href="https://inikcamper.es"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:site" content="@inikcamper"/>
                    <meta name="twitter:image" content="https://inikcamper.es/assets/img/slider/inikcamper_bailico.jpg"/>
                    <meta name="twitter:title" content="InikCamper - Camper and Van Rental in Gran Canaria"/>
                    <meta name="twitter:description" content="Explore Gran Canaria with InikCamper. Camper and van rental with camperization services. Your adventure begins here!"/>
                    <meta property="og:title" content="InikCamper - Camper and Van Rental in Gran Canaria"/>
                    <meta property="og:description" content="Camper and van rental in Gran Canaria. Discover the freedom of traveling with InikCamper."/>
                    <meta property="og:image" content="https://inikcamper.es/assets/img/slider/inikcamper_bailico.jpg"/>
                    <meta property="og:url" content="https://inikcamper.es/"/>
                    <meta property="og:type" content="website"/>
                    <meta name="google-site-verification" content="CQoAwfZxn41Cja-u5ndPDI6OW_YRBKWZTp5besoARdg"/>
                </Helmet>
            </HelmetProvider>
            <header>
                <div className="transparent-header">
                    <div className="container-fluid">
                        <div className="header-space">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-8">
                                    <div className="header-logo">
                                        <Link href="/"><a><img src="assets/img/logo/logo.png" className="img-fluid" alt="logo"/></a></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-4">
                                    <div className="main-menu d-xl-block d-none">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="menu-item-has-children">
                                                    <Link href="/"><a>Home</a></Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/"><a>About Us</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/about"><a>Who We Are</a></Link></li>
                                                        <li><Link href="/team"><a>Our Team</a></Link></li>
                                                        <li><Link href="/faq"><a>FAQs</a></Link></li>
                                                        <li><Link href="/blog"><a>Blog</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="/service"><a>Services</a></Link></li>
                                                <li><Link href="/GuieUser"><a>User Guide</a></Link></li>
                                                <li>
                                                    <a href="https://airbnb.com/h/inikcamper" target="_blank" className="theme-btn theme-btn-small">Bookings</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="side-menu-icon d-xl-none text-end">
                                        <button className="side-toggle" onClick={() => {
                                            setMenuOpen(!menuOpen)
                                        }}>
                                            <i><FontAwesomeIcon icon={['fas', 'bars']}/></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-none d-xl-block">
                                    <div className="header-right text-end">
                                        <div className="header-social">
                                            <a href="https://wa.me/34684198547" target="_blank">
                                                <i><FontAwesomeIcon id="whatsapp" icon={['fab', 'whatsapp']}/></i>
                                            </a>
                                            <a href="https://www.instagram.com/inikcamper.es" target="_blank">
                                                <i><FontAwesomeIcon icon={['fab', 'instagram']}/></i>
                                            </a>
                                            <a href="https://www.twitter.com/inikcamper" target="_blank">
                                                <i><FontAwesomeIcon icon={['fab', 'twitter']}/></i>
                                            </a>
                                            <a href="https://www.facebook.com/InikCamper-113925204533049" target="_blank">
                                                <i><FontAwesomeIcon icon={['fab', 'facebook']}/></i>
                                            </a>
                                        </div>
                                        <div className="header-btn">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
                <div onClick={() => setSearchOpen(false)} className={searchOpen ? "body-overlay show" : "body-overlay"}></div>
            </header>
        </React.Fragment>

    );
}

export default Header;