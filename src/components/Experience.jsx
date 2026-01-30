import { motion } from 'framer-motion';
import { FaUserGraduate, FaBriefcase, FaCalendarAlt, FaBuilding, FaGraduationCap } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Experience = () => {

    const education = [
        {
            institution: "Indira Gandhi National Open University",
            degree: "Masters of Computer Applications",
            duration: "07/2025 – 06/2025",
            details: "Correspondence"
        },
        {
            institution: "St. Thomas College, Thrissur",
            degree: "Bachelor of Science - Computer Science",
            duration: "2022 – 2025",
            details: "Focus on Algorithms, Data Structures, and Software Engineering."
        },
        {
            institution: "St. Antony's HSS, Ammadam",
            degree: "Higher Secondary Education (98.25%)",
            duration: "2020 – 2022",
            details: "Science Stream with Computer Science."
        },
        {
            institution: "Indian School Muladha, Oman",
            degree: "Secondary School Education (96%)",
            duration: "2018 – 2020",
            details: "Academic Excellence Award Winner."
        }
    ];

    const internships = [
        {
            role: "Santhome Innovators Program Intern",
            company: "St. Thomas College (Autonomous), Thrissur",
            duration: "12/2025 – Present",
            details: [
                "Led college website and social media improvements, boosting engagement.",
                "Coordinated PR and alumni initiatives, increasing attendance and operational efficiency."
            ]
        },
        {
            role: "Data Science Intern",
            company: "Coding Samurai",
            duration: "11/2025 – 12/2025",
            details: [
                "Analyzed and cleaned large datasets to reveal insights.",
                "Supported machine learning model development to improve predictive analytics."
            ]
        },
        {
            role: "Machine Learning Intern",
            company: "SmartInternz",
            duration: "11/2025 – 12/2025",
            details: [
                "Preprocessed and analyzed data to build effective machine learning models.",
                "Tested and optimized model performance for real-world applications."
            ]
        },
        {
            role: "Full Stack Developer Intern",
            company: "SmartInternz",
            duration: "11/2025 – 12/2025",
            details: [
                "Built and maintained responsive web applications using front-end and back-end technologies.",
                "Improved functionality, fixed bugs, and enhanced overall user experience."
            ]
        },
        {
            role: "Content Creator Intern",
            company: "InAmigos Foundation",
            duration: "11/2025 – 11/2025",
            details: [
                "Boosted campaign visibility through content creation and social media management.",
                "Produced promotional materials and strengthened community ties."
            ]
        },
        {
            role: "Generative AI Intern",
            company: "SmartInternz",
            duration: "10/2025 – 11/2025",
            details: [
                "Applied machine learning and Python tools to analyze data and build predictive models.",
                "Improved efficiency and uncovered trends through refined processing techniques."
            ]
        },
        {
            role: "UI/UX Developer Intern",
            company: "Coding Samurai",
            duration: "10/2025 – 11/2025",
            details: [
                "Designed intuitive web interfaces and prototypes to boost engagement and streamline approvals.",
                "Conducted usability testing and refined UI to improve satisfaction."
            ]
        },
        {
            role: "Data Analyst Intern",
            company: "SmartInternz",
            duration: "09/2025 – 10/2025",
            details: [
                "Analyzed and visualized data using Power BI to improve decisions and reporting efficiency.",
                "Streamlined data processes and supported strategies that boosted revenue."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Distinct Background Elements */}
            <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">My <span className="text-primary">Journey</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Tracing my path from academic foundations to professional achievements.
                    </p>
                </motion.div>

                {/* --- EDUCATION SECTION (Grid Layout) --- */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-12 justify-center md:justify-start"
                    >
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                            <FaUserGraduate className="text-2xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Education</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="h-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group h-full"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                            <FaGraduationCap className="text-xl" />
                                        </div>
                                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-900/20 text-blue-300 border border-blue-800/30">
                                            {edu.duration}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{edu.institution}</h4>
                                    <p className="text-gray-300 font-medium mb-3">{edu.degree}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{edu.details}</p>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>
                </div>


                {/* --- INTERNSHIPS SECTION (Timeline Layout but Full Width) --- */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-16 justify-center md:justify-start"
                    >
                        <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                            <FaBriefcase className="text-2xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Internships & Experience</h3>
                    </motion.div>

                    <div className="relative border-l-2 border-gray-800 ml-4 md:ml-10 space-y-16">
                        {internships.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-12 md:pl-16"
                            >
                                {/* Dot */}
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-dark border-4 border-primary shadow-[0_0_10px_rgba(249,115,22,0.5)] z-10 box-content"></div>

                                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2500}>
                                    <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-300 relative group overflow-hidden">
                                        {/* Hover Shine Effect */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>

                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                            <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                                {job.role}
                                            </h4>
                                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider border border-primary/20 self-start md:self-auto">
                                                <FaCalendarAlt /> {job.duration}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-300 font-medium text-base mb-6">
                                            <FaBuilding className="text-gray-500" /> {job.company}
                                        </div>

                                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                            {job.details.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                                    <span className="leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
