import React from 'react';
import Fasilitas from '@/components/fasilitas'
import Eskul from '@/components/eskul'

export default function page() {
    return (
        <main>

        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl text-orange-400 font-bold text-center mb-8">Tentang SMK Cibitung 1</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                    <h2 className="text-2xl text-orange-400 font-semibold mb-4">Visi dan Misi</h2>
                    <p className='text-blue-400 mb-4'>
                        <strong>Visi:</strong> Menjadi sekolah vokasi yang unggul dan berdaya saing di tingkat nasional.
                    </p>
                    <p className='text-blue-400'>
                        <strong>Misi:</strong> Mendidik siswa menjadi tenaga kerja yang terampil, berakhlak mulia, dan siap menghadapi tantangan global.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                    <h2 className="text-2xl text-orange-400 font-semibold mb-4">Sejarah Sekolah</h2>
                    <p className='text-blue-400'>
                        SMK Cibitung 1 didirikan pada tahun 2019 dengan tujuan untuk menciptakan tenaga kerja yang terampil dan siap pakai. 
                        Sekolah ini telah berkembang pesat dalam kurun waktu 5 tahun, dengan berbagai program keahlian yang relevan dengan kebutuhan industri.
                    </p>
                </div>
            </div>
            <div className="mt-8 p-4 bg-orange-100 rounded-lg shadow-md">
                <h2 className="text-2xl text-orange-500 font-semibold mb-2">Kenapa Memilih SMK Cibitung 1?</h2>
                <ul className="list-disc list-inside text-blue-400">
                    <li>Program Keahlian yang Beragam</li>
                    <li>Fasilitas Modern dan Mendukung</li>
                    <li>Pendidikan Karakter yang Kuat</li>
                    <li>Kerjasama dengan Industri Terkemuka</li>
                </ul>
            </div>

        </div>
            <Fasilitas></Fasilitas>
            <Eskul></Eskul>
        </main>
    );
}
