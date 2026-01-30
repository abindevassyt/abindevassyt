import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger text reveals
                delayChildren: 0.3
            }
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        },
    };

    return (
        <section className="h-screen flex items-center justify-center bg-dark relative overflow-hidden text-center px-4">
            {/* Background Elements */}
            <ParticleBackground />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-dark/50 to-dark pointer-events-none"></div>

            {/* Main Content */}
            <motion.div
                className="z-10 relative max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-primary text-lg md:text-xl font-medium tracking-widest mb-4 uppercase"
                >
                    Hello, I am
                </motion.h2>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
                >
                    <span className="text-white">Abin</span> <span className="text-gray-400">Devassy</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Specializing in <span className="text-primary font-semibold">Flutter</span> and <span className="text-primary font-semibold">AI/ML</span> development.
                    Building scalable, high-performance applications with a focus on user experience.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <a href="#works" className="px-8 py-3 bg-primary text-white font-medium rounded-full cursor-hover hover:bg-orange-600 transition-colors shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.5)]">
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-medium rounded-full cursor-hover hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Contact Me
                    </a>
                </motion.div>

                <motion.div variants={itemVariants} className='flex justify-center gap-8 mt-16 text-3xl text-gray-400'>
                    <a href="https://github.com/abindevassyt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-hover hover:scale-110 transform duration-200"><FaGithub /></a>
                    <a href="https://linkedin.com/in/abindevassyt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-hover hover:scale-110 transform duration-200"><FaLinkedin /></a>
                    <a href="mailto:abindevassytharayil@gmail.com" className="hover:text-primary transition-colors cursor-hover hover:scale-110 transform duration-200"><FaEnvelope /></a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500"
            >
                <span className="text-sm tracking-widest uppercase">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
