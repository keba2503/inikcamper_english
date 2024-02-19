import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import * as firebase from "firebase/auth";

const BurgerMenusTwoo = ({setMenuOpen, menuOpen}) => {

    const [home, setHome] = useState(false)
    const [courses, setcourses] = useState(false)
    const [blog, setBlog] = useState(false)
    const [pages, setPages] = useState(false)
    const [project, setProject] = useState(false)
    const router = useRouter()
    const [path, setPath] = useState("")

    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    const openMobileMenu = menu => {

        if (menu == 'home') {
            setHome(!home)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
        } else if (menu == 'courses') {
            setHome(false)
            setcourses(!courses)
            setBlog(false)
            setPages(false)
            setProject(false)
        } else if (menu == 'blog') {
            setHome(false)
            setcourses(false)
            setBlog(!blog)
            setPages(false)
            setProject(false)
        } else if (menu == 'pages') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setProject(false)
            setPages(!pages)
        } else if (menu == 'project') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(!project)
        }
    };

    return (
        <div className="fix">
            <div className={menuOpen ? "side-info info-open" : "side-info"}>
                <button className="side-info-close" onClick={() => setMenuOpen(false)}>
                    <i><FontAwesomeIcon icon={['fas', 'times']}/></i>
                </button>
                <div className="side-info-content">
                    <div className="mm-menu">
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li className={courses ? "has-dropdown active" : "has-dropdown"}>
                                <a onClick={() => {
                                    openMobileMenu('courses');
                                }}>About Us</a>
                                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/about"><a>Who We Are</a></Link></li>
                                    <li><Link href="/team"><a>Our Team</a></Link></li>
                                    <li><Link href="/faq"><a>FAQs</a></Link></li>
                                </ul>
                            </li>
                            <li><Link href="/service"><a>Services</a></Link></li>
                            <li><Link href="/blog"><a>Blog</a></Link></li>
                            <li><a href="https://airbnb.com/h/inikcamper" target="_blank">Reservations</a></li>
                            <li><a onClick={() => firebase.getAuth().signOut()}>Sign Out</a></li>
                        </ul>
                    </div>
                    <div className="contact-infos mb-30">
                        <div className="contact-list mb-30">
                            <h4>Contact</h4>
                            <ul>
                                <li>
                                    <img src="assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon-img"/>Gran Canaria
                                </li>
                                <li>
                                    <img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href="mailto:inikcamper@gmail.com">inikcamper@gmail.com</a>
                                </li>
                                <li>
                                    <img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img"/><a href="tel:926668880000">Coming Soon</a>
                                </li>
                            </ul>
                            <div className="sidebar__menu--social">
                                <a href="https://www.instagram.com/inikcamper.es/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']}/></i></a>
                                <a href="https://wa.me/34684198547" target="_blank"><i><FontAwesomeIcon id="whatsapp" icon={['fab', 'whatsapp']}/></i></a>
                                <a href="https://twitter.com/inikcamper.es" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']}/></i></a>
                                <a href="https://www.facebook.com/InikCamper-113925204533049" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']}/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenusTwoo;