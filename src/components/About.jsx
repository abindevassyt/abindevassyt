import { motion } from 'framer-motion';
import { SiC, SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaJava, FaUsers, FaLightbulb, FaBrain, FaHandshake, FaComments, FaClock, FaChessKnight, FaLanguage, FaBookOpen, FaHeadphones, FaFutbol, FaNewspaper, FaMicrochip, FaWindows, FaPaintBrush } from 'react-icons/fa';

const About = () => {

    // Tech Skills from Resume
    const techSkills = [
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "MS Office 365", icon: FaWindows, color: "#EA4300" },
        { name: "Adobe Suite", icon: FaPaintBrush, color: "#FF0000" }
    ];

    // Soft Skills from Resume
    const softSkills = [
        { name: "Project Management", icon: FaChessKnight },
        { name: "Public Relations", icon: FaUsers },
        { name: "Teamwork", icon: FaHandshake },
        { name: "Time Management", icon: FaClock },
        { name: "Leadership", icon: FaLightbulb },
        { name: "Communication", icon: FaComments },
        { name: "Critical Thinking", icon: FaBrain }
    ];

    const languages = [
        { name: "Malayalam", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "Hindi", level: "Fluent" }
    ];

    const hobbies = [
        { name: "Reading", icon: FaBookOpen },
        { name: "Podcasts", icon: FaHeadphones },
        { name: "Sports", icon: FaFutbol },
        { name: "Tech News", icon: FaMicrochip },
        { name: "Quizzes", icon: FaNewspaper }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="about" className="py-20 bg-secondary text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-bounce duration-[3000ms]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    >
                        About <span className="text-primary">Me</span>
                    </motion.h2>

                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Profile Intro */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.2 }}
                            className="text-center"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-lg text-gray-300 leading-relaxed mb-6"
                            >
                                A diligent college student with a proactive approach and a versatile skill set, eager to enhance myself and the company.
                                Recognized for thriving under pressure and cultivating positivity.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-lg text-gray-300 leading-relaxed"
                            >
                                I have efficiently overseen numerous academic projects and volunteering events, showcasing robust organizational abilities and analytical prowess.
                                As a collaborative team member, I excel in both independent and cooperative settings.
                            </motion.p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Tech Skills */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-dark/50 p-6 rounded-2xl border border-gray-800"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center justify-center gap-2">
                                    Technical Skills
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {techSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={item}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="flex flex-col items-center gap-2 group cursor-pointer"
                                        >
                                            <div
                                                className="text-3xl p-3 bg-secondary rounded-xl border border-gray-700 group-hover:border-white/50 transition-colors"
                                                style={{ color: skill.color }}
                                            >
                                                <skill.icon />
                                            </div>
                                            <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Soft Skills */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-dark/50 p-6 rounded-2xl border border-gray-800"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center justify-center gap-2">
                                    Soft Skills
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {softSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            variants={item}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-3 p-3 bg-secondary rounded-lg border border-gray-700 hover:border-primary/50 transition-colors"
                                        >
                                            <skill.icon className="text-primary text-lg" />
                                            <span className="text-sm text-gray-300">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Languages & Hobbies Row */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-dark/50 p-6 rounded-2xl border border-gray-800"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center justify-center gap-2">
                                    <FaLanguage /> Languages
                                </h3>
                                <div className="flex justify-center gap-4 flex-wrap">
                                    {languages.map((lang, index) => (
                                        <div key={index} className="px-4 py-2 bg-secondary rounded-full border border-gray-700 text-center">
                                            <span className="block text-white font-medium">{lang.name}</span>
                                            <span className="text-xs text-primary">{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-dark/50 p-6 rounded-2xl border border-gray-800"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center justify-center gap-2">
                                    Hobbies
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {hobbies.map((hobby, index) => (
                                        <div key={index} className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg border border-gray-700">
                                            <hobby.icon className="text-primary" />
                                            <span className="text-sm text-gray-300">{hobby.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
