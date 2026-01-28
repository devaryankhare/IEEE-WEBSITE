import { motion } from 'framer-motion';

import hackOSprintBanner from '../assets/gallery/hack_o_sprint_banner.jpg';
import droneActivities from '../assets/gallery/drone_activities.jpg';
import labInauguration from '../assets/gallery/lab_inauguration.jpg';
import seminarSpeech from '../assets/gallery/seminar_speech.jpg';
import sihWinners from '../assets/gallery/sih_winners.jpg';
import matlabWorkshop from '../assets/gallery/matlab_workshop.jpg';

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            image: hackOSprintBanner,
            title: "Hack-O-Sprint 1.0",
            description: "Internal Hackathon for SIH 2023"
        },
        {
            id: 5,
            image: sihWinners,
            title: "SIH 2025 Winners",
            description: "Celebrating Team Uday for their outstanding victory."
        },
        {
            id: 2,
            image: droneActivities,
            title: "Drone Workshop",
            description: "Exploring aerial robotics outside the new teaching block."
        },
        {
            id: 6,
            image: matlabWorkshop,
            title: "MATLAB Workshop",
            description: "Hands-on session on Artificial Intelligence for Engineering Applications."
        },
        {
            id: 3,
            image: labInauguration,
            title: "Lab Inauguration",
            description: "Opening of the Advanced Photonics and Cyber-Physical Systems Research Laboratory."
        },
        {
            id: 4,
            image: seminarSpeech,
            title: "Technical Seminar",
            description: "Knowledge sharing sessions by student leaders."
        }
    ];

    return (
        <div className="bg-app-bg min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                        Gallery
                    </h1>
                    <p className="text-xl text-app-muted max-w-2xl mx-auto">
                        Capturing moments of innovation, learning, and collaboration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-xl aspect-video bg-app-card-lighter group shadow-lg border border-app-border"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                                <p className="text-slate-300 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
