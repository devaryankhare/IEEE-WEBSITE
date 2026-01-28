import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const teamMembers = [
    { name: 'Vivek Jha', role: 'Chairperson' },
    { name: 'Abdhija Nigam', role: 'Vice Chairperson' },
    { name: 'Dev Aryan Khare', role: 'Webmaster' },
    { name: 'Atharv Agrawal', role: 'Secretary' },
    { name: 'Utkarsh Soni', role: 'Secretary' },
    
    { name: 'Prakhar Manek', role: 'Treasurer' },
    { name: 'Venkat Relangi', role: 'Lead Graphic Designer' },
    
    { name: 'Vikram Yadav', role: 'Publicity Coordinator' },
    { name: 'Vaibhav Upadhyay', role: 'Assistant Graphic Designer' },
    { name: 'Abhigyan Jha', role: 'Social Media Manager' },
    { name: 'Samarth Panwar', role: 'Social Media Manager' },
];

const Team = () => {
    return (
        <div className="bg-app-bg min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-ieee-blue mb-4">
                        Executive Committee 2025–26
                    </h1>
                    <p className="text-xl text-app-muted max-w-2xl mx-auto">
                        The passionate individuals driving our student branch forward.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-app-card/50 backdrop-blur-sm border border-app-border rounded-2xl p-6 hover:border-ieee-blue/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-ieee-blue mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                    {/* Placeholder Avatar - Initials */}
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-xl font-bold text-app-text mb-2">{member.name}</h3>
                                <p className="text-ieee-blue font-medium mb-4">{member.role}</p>

                                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <a href="#" className="text-app-muted hover:text-app-text transition-colors"><Linkedin size={20} /></a>
                                    <a href="#" className="text-app-muted hover:text-app-text transition-colors"><Twitter size={20} /></a>
                                    <a href="#" className="text-app-muted hover:text-app-text transition-colors"><Mail size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
