
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundBlobs = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {/* Top Left Blob */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"
            />

            {/* Bottom Right Blob */}
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-30 mix-blend-screen"
            />

            {/* Center/Random Blob */}
            <motion.div
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -40, 40, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] opacity-20 mix-blend-screen"
            />
        </div>
    );
};

export default BackgroundBlobs;
