import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';

const Projects = () => {

    // Projects from Resume
    const projects = [
        {
            title: "Srishti 2.4 Website Updation",
            description: "Updated the website for the annual CS Department Fest, 'Srishti 2.4' improving user engagement metrics by 30%.",
            tags: ["Web Dev", "Events", "UI/UX"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Certificater",
            description: "Created an application streamlining bulk certificate creation reducing processing time by 50%.",
            tags: ["Automation", "Python", "Tool"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "PCForger",
            description: "Created a PC Part Recommender app that uses AI to recommend PC Parts based on user inputs.",
            tags: ["AI", "Recommendation", "App"],
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-secondary text-white relative overflow-hidden">
            {/* Decor */}
            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-dark rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
                        >
                            {/* Top Image Placeholder Area */}
                            <div className="h-40 bg-gray-900 w-full flex items-center justify-center relative overflow-hidden border-b border-gray-800">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                <FaTools className="text-4xl text-gray-700 group-hover:text-primary/50 transition-colors" />
                            </div>

                            <div className="p-8 relative flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-1 text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary text-xs rounded-full text-gray-300 border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                        <FaGithub className="text-lg" /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary transition-colors">
                                        <FaExternalLinkAlt className="text-lg" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
