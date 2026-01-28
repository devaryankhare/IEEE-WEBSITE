import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-ieee-blue/50 transition-all focus:outline-none"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6">
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDarkMode ? 1 : 0,
                        opacity: isDarkMode ? 1 : 0,
                        rotate: isDarkMode ? 0 : 90,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon className="w-5 h-5 text-indigo-300" fill="currentColor" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        scale: !isDarkMode ? 1 : 0,
                        opacity: !isDarkMode ? 1 : 0,
                        rotate: !isDarkMode ? 0 : -90,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun className="w-5 h-5 text-amber-500" fill="currentColor" />
                </motion.div>
            </div>
        </button>
    );
};

export default ThemeToggle;
