import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <div id='contact' className="min-h-screen flex items-center justify-center py-12 px-4 lg:px-8 bg-gradient-to-br bg-orange-400">
            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Contact
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    Hubungi kami untuk informasi lebih lanjut mengenai SMK Cibitung 1. Kami siap membantu!
                </p>
                
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="text-4xl text-orange-400 mr-4">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Kontak Sekolah</h2>
                            <p className="text-gray-600">(021) 89524787</p>
                        </div>
                    </div>

                    <div className="flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="text-4xl text-orange-400 mr-4">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Alamat</h2>
                            <p className="text-gray-600">
                            Jl. Keramat Jl. Selang Bulak No.130, Wanajaya, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520
                            </p>
                        </div>
                    </div>

                   
                </div>

                <div className="flex justify-center mt-10">
                    <a
                        href="https://www.google.com/maps/place/SMK+PUSAT+KEUNGGULAN+SMK+CIBITUNG+1/@-6.2451071,107.092303,759m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e698faf18cfb82b:0xe69c98b1ae817cb6!8m2!3d-6.2451071!4d107.0948779!16s%2Fg%2F11h1mfbnqh?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:from-orange-500 hover:to-orange-700 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        Lihat di Peta
                    </a>
                </div>
            </div>
        </div>
    );
}
