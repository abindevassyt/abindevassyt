const Footer = () => {
    return (
        <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-gray-900">
            <p>© {new Date().getFullYear()} Abin Devassy Tharayil. All rights reserved.</p>
            <p className="mt-2">Built with React, Tailwind & Framer Motion</p>
        </footer>
    );
};

export default Footer;
