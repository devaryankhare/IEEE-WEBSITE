import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronRight, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="overflow-hidden bg-app-bg transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-app-bg overflow-hidden transition-colors duration-300">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-ieee-blue/20 blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-ieee-blue font-semibold tracking-widest text-sm md:text-base uppercase mb-4">Welcome to</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-app-text mb-6 tracking-tight">
                            IEEE Student Branch <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">IIIT Bhopal</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-app-muted mb-10 leading-relaxed">
                            A dynamic technical community dedicated to promoting innovation, learning, and professional development.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/about" className="px-8 py-3 bg-ieee-blue hover:bg-blue-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,98,155,0.5)] flex items-center">
                                Explore More <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="px-8 py-3 bg-app-card hover:bg-app-card-lighter text-app-text font-semibold rounded-full border border-app-border hover:border-app-border-hover transition-all flex items-center">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-app-muted"
                >
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ChevronRight className="rotate-90 w-5 h-5" />
                    </div>
                </motion.div>
            </section>

            {/* Features / Statistics Snippet */}
            <section className="py-20 bg-app-card border-y border-app-border transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <h3 className="text-4xl font-bold text-app-text mb-2">500+</h3>
                            <p className="text-ieee-blue font-medium">Active Members</p>
                        </div>
                        <div className="p-6 md:border-x border-app-border">
                            <h3 className="text-4xl font-bold text-app-text mb-2">50+</h3>
                            <p className="text-ieee-blue font-medium">Events Conducted</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-4xl font-bold text-app-text mb-2">10+</h3>
                            <p className="text-ieee-blue font-medium">Awards Won</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento-style Highlights */}
            <section className="py-24 bg-app-bg transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-app-text mb-4">Discover Our World</h2>
                        <div className="h-1 w-20 bg-ieee-blue mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Box 1: Events */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-app-card to-app-card-lighter border border-app-border md:col-span-2 transition-colors duration-300"
                        >
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                                    <Calendar className="text-blue-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-app-text mb-2 group-hover:text-blue-400 transition-colors">Upcoming Events</h3>
                                    <p className="text-app-muted mb-4">Join us in our next big hackathon or workshop. Hack-O-Sprint 3.0 is coming soon!</p>
                                    <Link to="/events" className="text-sm font-semibold text-app-text flex items-center">
                                        View Calendar <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
                        </motion.div>

                        {/* Box 2: Achievements */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl bg-app-card border border-app-border transition-colors duration-300"
                        >
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="bg-yellow-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                                    <Trophy className="text-yellow-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-app-text mb-2">Award Winning</h3>
                                    <p className="text-app-muted text-sm mb-4">Outstanding Emerging Student Branch 2024</p>
                                    <Link to="/achievements" className="text-sm font-semibold text-app-text flex items-center">
                                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Box 3: Team */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl bg-app-card border border-app-border transition-colors duration-300"
                        >
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                                    <Users className="text-purple-400 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-app-text mb-2">Meet the Team</h3>
                                    <p className="text-app-muted text-sm mb-4">Driven by passion, led by experience.</p>
                                    <Link to="/team" className="text-sm font-semibold text-app-text flex items-center">
                                        See Members <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Box 4: Gallery CTA */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-app-card border border-app-border md:col-span-2 transition-colors duration-300"
                        >
                            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
                                <h3 className="text-3xl font-bold text-white mb-4">Want to see us in action?</h3>
                                <p className="text-slate-300 mb-6 max-w-md">Check out our gallery to relive the best moments from our workshops, seminars, and events.</p>
                                <Link to="/gallery" className="px-6 py-2 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors">
                                    Visit Gallery
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
