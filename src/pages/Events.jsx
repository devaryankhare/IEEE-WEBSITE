import { motion } from 'framer-motion';
import { Calendar, Terminal, Zap, BookOpen, Lock, Cpu } from 'lucide-react';

const events = [
    {
        id: 1,
        title: 'Hack-O-Sprint 2.0',
        date: 'Sept 2024',
        description: 'Internal hackathon for SIH preparation and rapid prototyping.',
        icon: Terminal,
        color: 'from-green-400 to-emerald-600',
    },
    {
        id: 2,
        title: 'Tech Quiz Showdown',
        date: 'Oct 2024',
        description: 'Competitive technical quiz event testing knowledge across various domains.',
        icon: Zap,
        color: 'from-orange-400 to-red-600',
    },
    {
        id: 3,
        title: 'Kickstarter 2.0',
        date: 'Dec 2024 – Jan 2025',
        description: '4-week technical program on DSA, Web Dev, AI/ML, Data Science, and Cloud.',
        icon: BookOpen,
        color: 'from-blue-400 to-indigo-600',
    },
    {
        id: 4,
        title: 'Cracking the Silicon Roadmap',
        date: 'April 2025',
        description: 'Industry session on VLSI and semiconductor domain insights.',
        icon: Cpu,
        color: 'from-purple-400 to-pink-600',
    },
    {
        id: 5,
        title: 'EscapeRoom.exe',
        date: 'April 2025',
        description: 'Multi-round logical and teamwork challenge.',
        icon: Lock,
        color: 'from-teal-400 to-cyan-600',
    },
    {
        id: 6,
        title: 'Hack-O-Sprint 3.0',
        date: 'Sept 2025',
        description: 'Major hackathon promoting innovation and full-stack development.',
        icon: Terminal,
        color: 'from-emerald-400 to-teal-600',
    },
];

const Events = () => {
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
                        Events & Activities
                    </h1>
                    <p className="text-xl text-app-muted max-w-2xl mx-auto">
                        From hackathons to workshops, we keep our calendar busy with learning and fun.
                    </p>
                </motion.div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-app-border before:to-transparent">
                    {events.map((event, index) => (
                        <div key={event.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-app-card bg-app-card-lighter shadow shadow-app-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                                <event.icon className="w-5 h-5 text-app-muted" />
                            </div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-app-card p-6 rounded-xl border border-app-border hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between space-x-2 mb-2">
                                    <div className="font-bold text-app-text text-lg">{event.title}</div>
                                    <time className="font-mono text-xs text-app-muted">{event.date}</time>
                                </div>
                                <div className={`h-1 w-20 bg-gradient-to-r ${event.color} rounded-full mb-3`}></div>
                                <p className="text-app-muted text-sm">
                                    {event.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
