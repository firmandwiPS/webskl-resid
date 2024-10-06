import React from 'react';
import futsal from '../../public/futsal.jpg'; 
import voli from '../../public/voli.jpeg'; 
import paskib from '../../public/paskib.jpg'; 
import silat from '../../public/silatjpg.jpg'; 
import handball from '../../public/handball.jpg'; 
import pmr from '../../public/pmr.jpg'; 
import Image from 'next/image';

// Gambar bisa diambil dari URL atau folder lokal
const activities = [
    {
        name: 'Futsal',
        image: futsal, 
        description: 'Futsal adalah permainan sepak bola yang dimainkan di dalam ruangan dengan lima pemain di setiap tim. Olahraga ini meningkatkan keterampilan bermain bola dan kerjasama tim.'
    },
    {
        name: 'Voli',
        image: voli,
        description: 'Voli adalah olahraga yang dimainkan oleh dua tim dengan tujuan untuk memukul bola melewati net. Voli dapat meningkatkan koordinasi, kekuatan, dan stamina.'
    },
    {
        name: 'Paskib',
        image:  paskib, 
        description: 'Paskib (Pasukan Pengibar Bendera) adalah kegiatan yang berfokus pada disiplin, kedisiplinan, dan kerjasama, serta bertugas mengibarkan bendera pada upacara.'
    },
    {
        name: 'Silat',
        image: silat,
        description: 'Silat adalah seni bela diri yang berasal dari Asia Tenggara. Kegiatan ini tidak hanya melatih fisik, tetapi juga meningkatkan mental dan spiritual.'
    },
    {
        name: 'Handball',
        image: handball, 
        description: 'Handball adalah olahraga tim yang dimainkan dengan dua tim yang saling melempar bola untuk mencetak gol. Kegiatan ini meningkatkan kekuatan dan kecepatan.'
    },
    {
        name: 'PMR',
        image: pmr, 
        description: 'PMR (Palang Merah Remaja) adalah kegiatan yang berfokus pada pengabdian masyarakat dan penanganan kesehatan. Anggota PMR dilatih untuk memberikan pertolongan pertama.'
    },
];

export default function Eskul() {
    return (
        <div className="bg-gray-100 p-6">
            <h1 className="text-5xl font-bold text-center mb-6 text-orange-400">Ekstrakurikuler</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image src={activity.image} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-orange-400">{activity.name}</h2>
                            <p className="text-blue-400 mt-2">{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
