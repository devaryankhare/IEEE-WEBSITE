import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-app-bg min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-ieee-blue mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-app-muted max-w-2xl mx-auto">
                        Have questions or want to collaborate? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-app-card border border-app-border rounded-2xl p-8 hover:border-ieee-blue/50 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-500/10 p-3 rounded-lg">
                                    <MapPin className="text-ieee-blue w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-app-text mb-2">Visit Us</h3>
                                    <p className="text-app-muted transition-colors duration-300">
                                        IEEE Student Branch<br />
                                        Indian Institute of Information Technology (IIIT) Bhopal<br />
                                        Madhya Pradesh, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-app-card border border-app-border rounded-2xl p-8 hover:border-ieee-blue/50 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-500/10 p-3 rounded-lg">
                                    <Mail className="text-ieee-blue w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-app-text mb-2">Email Us</h3>
                                    <p className="text-app-muted mb-2 transition-colors duration-300">For general inquiries and collaborations:</p>
                                    <a href="mailto:ieee@iiitbhopal.ac.in" className="text-ieee-blue font-medium hover:underline">ieee@iiitbhopal.ac.in</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-app-card/50 backdrop-blur-sm border border-app-border rounded-2xl p-8 transition-colors duration-300"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-app-muted mb-2 transition-colors duration-300">Name</label>
                                    <input type="text" className="w-full bg-app-card-lighter border border-app-border rounded-lg px-4 py-3 text-app-text focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all" placeholder="name..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-app-muted mb-2 transition-colors duration-300">Email</label>
                                    <input type="email" className="w-full bg-app-card-lighter border border-app-border rounded-lg px-4 py-3 text-app-text focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all" placeholder="Abc@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-app-muted mb-2 transition-colors duration-300">Subject</label>
                                <input type="text" className="w-full bg-app-card-lighter border border-app-border rounded-lg px-4 py-3 text-app-text focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all" placeholder="How can we help?" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-app-muted mb-2 transition-colors duration-300">Message</label>
                                <textarea rows="4" className="w-full bg-app-card-lighter border border-app-border rounded-lg px-4 py-3 text-app-text focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all" placeholder="Tell us more..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-ieee-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]">
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
