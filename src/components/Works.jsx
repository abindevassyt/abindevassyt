import { motion } from 'framer-motion';
import { FaPalette, FaImage, FaCertificate, FaMobileAlt } from 'react-icons/fa';

const Works = () => {
    const works = [
        // Replaced random rainbow gradients with brand-aligned Dark/Orange/Gray gradients
        { type: 'Poster', title: "Tech Fest 2024", icon: FaImage, color: "from-orange-600/20 to-red-600/20" },
        { type: 'Banner', title: "Workshop Promotion", icon: FaPalette, color: "from-gray-700/40 to-gray-600/40" },
        { type: 'Certificate', title: "Participation Cert", icon: FaCertificate, color: "from-orange-500/10 to-orange-400/10" },
        { type: 'Design', title: "App UI Mockup", icon: FaMobileAlt, color: "from-gray-800 to-black" },
    ];

    return (
        <section id="works" className="py-20 bg-dark text-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Creative <span className="text-primary">Works</span></h2>
                    <p className="text-gray-400 max-w-md mx-auto">A collection of my graphic design and UI/UX projects.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {works.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, borderColor: "#ff5722" }}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-gray-800 bg-secondary transition-colors"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/10">
                                    <item.icon />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 group-hover:text-primary">
                                    {item.type}
                                </span>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
