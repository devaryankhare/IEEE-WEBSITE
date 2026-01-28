import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-app-card border-t border-app-border text-app-muted py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-app-text">IEEE <span className="text-ieee-blue">IIIT Bhopal</span></h3>
                        <p className="text-sm">
                            Promoting innovation, learning, and professional development among students.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-app-text">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-ieee-blue transition-colors">About Us</Link></li>
                            <li><Link to="/events" className="hover:text-ieee-blue transition-colors">Events</Link></li>
                            <li><Link to="/team" className="hover:text-ieee-blue transition-colors">Our Team</Link></li>
                            <li><Link to="/contact" className="hover:text-ieee-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-app-text">Get in Touch</h4>
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-ieee-blue mt-0.5" />
                            <span>IIIT Bhopal, Madhya Pradesh, India</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-ieee-blue" />
                            <a href="mailto:ieee@iiitbhopal.ac.in" className="hover:text-ieee-blue transition-colors">ieee@iiitbhopal.ac.in</a>
                        </div>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.instagram.com/ieeeiiitbsb/" target="_blank" rel="noopener noreferrer" className="p-2 bg-app-card-lighter rounded-full hover:bg-ieee-blue hover:text-white transition-all text-app-text">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/ieee-iiit-bhopal-student-branch/" target="_blank" rel="noopener noreferrer" className="p-2 bg-app-card-lighter rounded-full hover:bg-ieee-blue hover:text-white transition-all text-app-text">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-app-border text-center text-sm opacity-70">
                    <p>&copy; {new Date().getFullYear()} IEEE Student Branch IIIT Bhopal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
