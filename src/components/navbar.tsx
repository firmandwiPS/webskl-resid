import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg p-5 sticky top-0 z-50 transition-all duration-700 ease-in-out">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo dan Brand */}
                <div className="flex items-center space-x-3">
                    <img src="smkcibitung1.png" alt="Logo SMK PK Cibitung 1" width={40} height={40} className="object-contain" />
                    <div className="text-orange-400 text-2xl font-bold transition duration-500 ease-in-out transform hover:scale-105">
                        SMK PK Cibitung 1
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-100 px-3 py-2 rounded-md">
                        Home
                    </a>
                    <a href="/about" className="text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-100 px-3 py-2 rounded-md">
                        About
                    </a>
                    <a href="/programs" className="text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-100 px-3 py-2 rounded-md">
                        Programs
                    </a>
                    <a href="/#contact" className="text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-100 px-3 py-2 rounded-md">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <a
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-orange-400 focus:outline-none transition transform duration-300 ease-in-out"
                    >
                        <svg className={`w-8 h-8 transform ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-5 space-y-4 bg-orange-50 p-5 rounded-md shadow-md transition duration-500 ease-in-out animate-fade-in-down">
                    <a href="/" className="block text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105">
                        Home
                    </a>
                    <a href="/about" className="block text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105">
                        About
                    </a>
                    <a href="/programs" className="block text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105">
                        Programs
                    </a>
                    <a href="/#contact" className="block text-gray-800 hover:text-orange-400 transition-all duration-500 ease-in-out transform hover:scale-105">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
