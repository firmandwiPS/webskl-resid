import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const facilitiesData = [
    {
        
        title: "Ruang Kelas Nyaman",
        description: "Setiap kelas dilengkapi dengan AC, TV dan Proyektor untuk kenyamanan belajar.",
    },
    {
        
        title: "Ruang Lep Komputer",
        description: "Ruang Lep komputer di setiap jurusan.",
    },
    {
        
        title: "Bengkel Teknik Mekanik Industri",
        description: "Bengkel lengkap dan aman untuk pembelajaran teknik mekanik industri.",
    },
    {
       
        title: "Workshop Sistem Informasi Jaringan & Aplikasi",
        description: "Workshop untuk praktikum sistem informasi dan jaringan & aplikasi.",
    },
    {
        
        title: "Bank Syariah",
        description: "Fasilitas perbankan syariah untuk kebutuhan siswa & kebutuhan administrasi sekolah.",
    },
    {
        
        title: "Workshop Manajemen Logistik",
        description: "Workshop untuk belajar manajemen logistik dan rantai pasokan.",
    },
    {
        
        title: "Kamar Mandi Bersih & Wangi",
        description: "Kamar mandi yang bersih untuk siswa dan staf sekolah.",
    },
    {
        title: "Masjid",
        description: "Masjid untuk kegiatan ibadah dan spiritual.",
    },
    {
       
        title: "Lapangan yang Luas",
        description: "Lapangan yang luas untuk berbagai kegiatan olahraga.",
    },
    {
      
        title: "Kantin Nyaman dan Bersih",
        description: "Kantin yang menyediakan makanan sehat dan bersih.",
    },
    {
        
        title: "Parkiran Luas dan Gratis",
        description: "Tempat parkir yang luas dan tanpa biaya untuk siswa.",
    },
    {
        
        title: "Fasilitas Absensi Menggunakan Kartu",
        description: "Sistem absensi modern menggunakan kartu untuk siswa.",
    },
];

export default function Fasilitas() {
    return (
        <section id="fasilitas" className="py-10 ">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-orange-400 text-center mb-8" >Fasilitas Sekolah</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilitiesData.map((facility, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-center mb-4">
                                
                                <h3 className="text-2xl font-semibold ml-4 text-orange-400">{facility.title}</h3>
                            </div>
                            <p className="text-blue-400">{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
