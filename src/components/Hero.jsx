import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Hero = () => {

    const letterVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const name = "Abin Devassy Tharayil".split("");

    return (
        <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden pt-20" id="home">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 relative group"
                >
                    <div className="absolute inset-0 bg-primary/50 blur-xl rounded-full group-hover:bg-primary/80 transition-all duration-300"></div>
                    <img
                        src={profileImg}
                        alt="Abin Devassy Tharayil"
                        className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-secondary relative z-10 shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.05 }}
                >
                    <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 1 }} className="text-primary font-medium tracking-widest mb-4">HELLO, I'M</motion.h2>

                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight flex flex-wrap justify-center gap-1">
                        {name.map((char, index) => (
                            <motion.span key={index} variants={letterVariant} transition={{ duration: 0.5, ease: "backOut" }}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
                    >
                        Computer Science Student & Developer based in Thrissur, Kerala.
                        Passionate about building seamless digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="flex justify-center space-x-6 mb-12"
                    >
                        {[
                            { icon: FaGithub, href: "https://github.com/IRONMAN12021" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/abin-devassy-a0a347300" },
                            { icon: FaEnvelope, href: "mailto:abindevassy132004@gmail.com" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 10, color: "#ff5722" }}
                                whileTap={{ scale: 0.9 }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-3xl transition-colors"
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255, 87, 34)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg transition-all"
                    >
                        View My Work
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
