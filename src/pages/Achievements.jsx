import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
    return (
        <div className="bg-app-bg min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
                        Our Achievements
                    </h1>
                    <p className="text-xl text-app-muted max-w-2xl mx-auto">
                        Recognizing excellence and dedication in our journey.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-app-card rounded-2xl p-8 border border-app-border transition-colors duration-300">
                                <div className="h-12 w-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                                    <Trophy className="text-yellow-500 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-app-text mb-4">Outstanding Emerging Student Branch Award</h2>
                                <h3 className="text-lg text-yellow-500 font-semibold mb-2">IEEE India Council Awards 2024</h3>
                                <p className="text-app-muted leading-relaxed">
                                    The IEEE IIIT Bhopal Student Branch was awarded the Outstanding Emerging Student Branch Award at the IEEE India Council Awards 2024. This recognition reflects the branch’s dedication, community engagement, and commitment to excellence in technical and professional development.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full md:w-1/2 grid grid-cols-1 gap-6"
                    >
                        <div className="bg-app-card/50 p-6 rounded-xl border border-app-border flex items-start space-x-4 transition-colors duration-300">
                            <Star className="text-ieee-blue w-8 h-8 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold text-app-text">Community Engagement</h4>
                                <p className="text-app-muted text-sm mt-1">Recognized for active participation and impactful events within the tech community.</p>
                            </div>
                        </div>
                        <div className="bg-app-card/50 p-6 rounded-xl border border-app-border flex items-start space-x-4 transition-colors duration-300">
                            <Award className="text-ieee-blue w-8 h-8 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold text-app-text">Technical Excellence</h4>
                                <p className="text-app-muted text-sm mt-1">Commended for maintaining high standards in workshops, hackathons, and technical projects.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
