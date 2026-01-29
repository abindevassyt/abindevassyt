import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get In <span className="text-primary">Touch</span></h2>

                    <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <div className="md:w-1/2 space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <p className="text-gray-400 mb-8">
                                Feel free to reach out for collaborations, internships, or just a friendly hello!
                            </p>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center space-x-4 group"
                            >
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="font-medium">+91 85905 57414</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center space-x-4 group"
                            >
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:abindevassy132004@gmail.com" className="font-medium hover:text-primary transition-colors">
                                        abindevassy132004@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center space-x-4 group"
                            >
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Address</p>
                                    <p className="font-medium">Tharayil (H), P.O. Ammadam, Thrissur-680563</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Placeholder */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="md:w-1/2 bg-secondary p-8 rounded-lg border border-gray-800 relative"
                        >
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                                    <input type="text" className="w-full bg-dark border border-gray-700 rounded p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                                    <input type="email" className="w-full bg-dark border border-gray-700 rounded p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                                    <textarea className="w-full bg-dark border border-gray-700 rounded p-3 text-white focus:border-primary focus:outline-none transition-colors h-32" placeholder="Hi Abin..."></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Message <FaPaperPlane className="text-xs" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
