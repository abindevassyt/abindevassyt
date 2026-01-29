import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaCertificate, FaAward, FaChurch, FaUsers } from 'react-icons/fa';

const Credentials = () => {

    const volunteering = [
        {
            role: "Media Cell Member",
            org: "St. Antony's Church",
            date: "01/2024 – Present",
            location: "Thrissur, India"
        },
        {
            role: "Technical Overseer",
            org: "Srishti 2.5",
            date: "01/2025 – 03/2025",
            location: "Thrissur, India"
        },
        {
            role: "Technical Co-ordinator",
            org: "Srishti 2.4",
            date: "11/2023 – 04/2024",
            location: "Thrissur, India"
        },
        {
            role: "Cadet",
            org: "NCC",
            date: "22/09/2022 – 31/03/2025",
            location: "Thrissur, India"
        },
        {
            role: "Pre-School Catechism Teacher",
            org: "St. Antony's Church, Sohar",
            date: "06/04/2017 – 26/12/2019",
            location: "Rustaq, Oman"
        }
    ];

    const certifications = [
        "AI For Everyone by DeepLearning.AI, Coursera",
        "Agile With Atlassian Jira, Coursera",
        "Career Essentials in Generative AI by Microsoft And LinkedIn",
        "Problem Solving, Python Programming And Video Games by University Of Alberta, Coursera",
        "Introduction To Data Science By SkillUP, Simplilearn"
    ];

    return (
        <section id="credentials" className="py-20 bg-dark text-white">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteering & <span className="text-primary">Certifications</span></h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* VOLUNTEERING */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-8 rounded-2xl border border-gray-800"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <FaHandHoldingHeart className="text-2xl text-primary" />
                            <h3 className="text-2xl font-bold">Volunteering</h3>
                        </div>

                        <div className="space-y-6">
                            {volunteering.map((vol, index) => (
                                <div key={index} className="flex gap-4 items-start group">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{vol.role}</h4>
                                        <p className="text-sm text-gray-400">{vol.org}</p>
                                        <div className="flex gap-2 text-xs text-gray-500 mt-1">
                                            <span>{vol.date}</span> • <span>{vol.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CERTIFICATIONS */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/30 p-8 rounded-2xl border border-gray-800"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <FaCertificate className="text-2xl text-primary" />
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>

                        <div className="grid gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="p-4 bg-dark rounded-lg border border-gray-700 hover:border-primary/50 transition-colors flex items-start gap-3"
                                >
                                    <FaAward className="text-yellow-500 mt-1 flex-shrink-0" />
                                    <p className="text-sm font-medium text-gray-300">{cert}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Credentials;
