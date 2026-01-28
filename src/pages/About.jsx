import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

import aboutVisual from '../assets/about_visual.png';

const About = () => {
    return (
        <div className="bg-app-bg min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
                        About Us
                    </h1>
                    <p className="text-xl text-app-muted max-w-2xl mx-auto">
                        Innovating for a better tomorrow, together.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-app-border shadow-2xl group max-w-md mx-auto">
                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                            <img
                                src={aboutVisual}
                                alt="IEEE Student Branch IIIT Bhopal"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-app-text mb-4">Who We Are</h2>
                            <p className="text-app-muted leading-relaxed text-lg">
                                The IEEE Student Branch IIIT Bhopal is a dynamic technical community dedicated to promoting innovation, learning, and professional development among students. As a part of IEEE, the world’s largest technical professional organization, the club provides a platform for students to explore emerging technologies and enhance their technical and leadership skills.
                            </p>
                        </div>
                        <div>
                            <p className="text-app-muted leading-relaxed text-lg">
                                Through workshops, technical talks, events, and collaborative projects, the IEEE Club bridges the gap between theory and practical application. Guided by experienced faculty and driven by passionate student members, we strive to create an environment that encourages curiosity, creativity, and continuous learning.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Zap, title: "Innovation", desc: "Fostering a culture of creativity and breaking boundaries." },
                        { icon: Users, title: "Community", desc: "Building a strong network of like-minded tech enthusiasts." },
                        { icon: Target, title: "Excellence", desc: "Striving for the highest standards in all our endeavors." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-app-card border border-app-border p-8 rounded-xl text-center hover:bg-app-card-lighter hover:border-ieee-blue/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 mx-auto bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                                <item.icon className="w-7 h-7 text-ieee-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-app-text mb-2">{item.title}</h3>
                            <p className="text-app-muted">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
