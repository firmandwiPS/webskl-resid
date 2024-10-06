import React from 'react';
import { FaIndustry, FaNetworkWired, FaTruckLoading, FaUniversity } from 'react-icons/fa';

export default function Programs() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-orange-400">Program Jurusan</h1>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 animate-fade-in">
                {programData.map((program) => (
                    <div
                        key={program.id}
                        className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        <div className="flex items-center mb-4">
                            <span className="text-4xl mr-4 text-blue-400 animate-bounce">
                                {program.icon}
                            </span>
                            <h2 className="text-xl font-semibold text-blue-400">{program.name}</h2>
                        </div>
                        <p className="text-orange-400">{program.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
            <a
                  href="/programs"
                  className="inline-flex items-center px-6 py-2 text-lg font-semibold text-white bg-blue-400 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-orange-500"
              >
                  Lihat Lebih Lanjut
              </a>
            </div>
        </div>
    );
}

const programData = [
    {
        id: 1,
        name: 'TMI (Teknik Mekanik Industri)',
        description: 'Program studi yang mempelajari teknik dan mekanika untuk kebutuhan industri modern.',
        icon: <FaIndustry />,
    },
    {
        id: 2,
        name: 'SIJA (Sistem Informasi Jaringan dan Aplikasi)',
        description: 'Fokus pada pengembangan aplikasi dan jaringan informasi yang efisien dan inovatif.',
        icon: <FaNetworkWired />,
    },
    {
        id: 3,
        name: 'MENLOG (Manajemen Logistik)',
        description: 'Mengelola logistik untuk memastikan barang dan jasa dapat bergerak dengan efisien.',
        icon: <FaTruckLoading />,
    },
    {
        id: 4,
        name: 'PBS (Perbankan Syariah)',
        description: 'Program studi yang berfokus pada keuangan dan perbankan berbasis syariah.',
        icon: <FaUniversity />,
    },
];
