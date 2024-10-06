import React from 'react';

export default function Programs() {
  return (
    <div className="p-8 bg-gradient-to-br  min-h-screen">
      <h1 className="text-6xl font-extrabold text-center mb-16 text-orange-400">
        Program Keahlian Kami
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Teknik Mekanik Industri */}
        <div className="bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500">
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-orange-400">
              Teknik Mekanik Industri
            </h2>
            <p className="text-lg text-blue-400 mb-6">
              Teknik Mekanik Industri berfokus pada desain, operasi, dan pemeliharaan mesin di lingkungan industri. Siswa belajar keterampilan praktis untuk mengoperasikan peralatan mekanik dan mengotomatisasi proses di manufaktur.
            </p>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-2">
              <img
                src="tmi1.jpeg"
                alt="Mesin industri dan pekerja"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="tmi2.jpeg"
                alt="Pemeliharaan peralatan mekanik"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="tmi2.jpg"
                alt="Siswa bekerja dengan mesin industri"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
            </div>
            <div className="mt-6 text-blue-400">
              <h3 className="text-xl font-semibold mb-2">Materi Utama:</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Termodinamika dan Perpindahan Panas</li>
                <li>Desain dan Analisis Mekanik</li>
                <li>Otomasi dan Robotika</li>
                <li>Standar Keselamatan Industri</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sistem Informasi dan Aplikasi Jaringan */}
        <div className="bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500">
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-orange-400">
              Sistem Informasi dan Aplikasi Jaringan
            </h2>
            <p className="text-lg text-blue-400 mb-6">
              Program ini berfokus pada jaringan komputer, pengembangan perangkat lunak, dan integrasi sistem. Siswa mempelajari keterampilan yang diperlukan untuk mengelola infrastruktur jaringan dan membuat aplikasi perangkat lunak.
            </p>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-2">
              <img
                src="sija2.jpg"
                alt="Peralatan jaringan dan layar pemrograman"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="sija1.jpg"
                alt="Siswa mengatur jaringan komputer"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="sija2.jpeg"
                alt="Antarmuka pemrograman pada komputer"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
            </div>
            <div className="mt-6 text-blue-400">
              <h3 className="text-xl font-semibold mb-2">Materi Utama:</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Jaringan Komputer dan Keamanan</li>
                <li>Administrasi Sistem</li>
                <li>Pengembangan Web dan Aplikasi</li>
                <li>Komputasi Awan dan Virtualisasi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Manajemen Logistik */}
        <div className="bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500">
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-orange-400">
              Manajemen Logistik
            </h2>
            <p className="text-lg text-blue-400 mb-6">
              Manajemen Logistik mengajarkan siswa bagaimana merencanakan, mengimplementasikan, dan mengawasi penyimpanan serta pengiriman barang. Ini mencakup kontrol inventaris, manajemen gudang, dan logistik rantai pasokan.
            </p>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-2">
              <img
                src="ml1.jpeg"
                alt="Operasi gudang dan rantai pasokan"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="ml2.jpeg"
                alt="Pekerja mengelola inventaris logistik"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="ml3.jpeg"
                alt="Sistem manajemen gudang"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
            </div>
            <div className="mt-6 text-blue-400">
              <h3 className="text-xl font-semibold mb-2">Materi Utama:</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Manajemen Rantai Pasokan</li>
                <li>Operasi Gudang</li>
                <li>Transportasi dan Distribusi</li>
                <li>Sistem Kontrol Inventaris</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Perbankan */}
        <div className="bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500">
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-orange-400">
              Perbankan Syariah
            </h2>
            <p className="text-lg text-blue-400 mb-6">
              Program Perbankan mempersiapkan siswa untuk berkarir di sektor keuangan. Program ini mencakup manajemen keuangan, hubungan pelanggan, dan operasi perbankan, memberikan dasar yang kuat untuk bekerja di bank dan lembaga keuangan lainnya.
            </p>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-2">
              <img
                src="pbs1.jpeg"
                alt="Petugas bank membantu nasabah"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="pbs2.jpeg"
                alt="Transaksi perbankan"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
              <img
                src="pbs3.jpeg"
                alt="Layanan keuangan dan manajemen perbankan"
                className="h-40 w-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              />
            </div>
            <div className="mt-6 text-blue-400">
              <h3 className="text-xl font-semibold mb-2">Materi Utama:</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Regulasi dan Kepatuhan Perbankan</li>
                <li>Layanan dan Hubungan Pelanggan</li>
                <li>Produk dan Layanan Keuangan</li>
                <li>Manajemen Risiko dan Analisis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
