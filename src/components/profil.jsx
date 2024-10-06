export default function Profil() {
  return (
      <div className="text-center py-16 px-8">
          <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-orange-400 mb-4">Selamat Datang di SMK Cibitung 1</h1>
              <p className="text-lg text-blue-400 mb-8">
                  SMK Cibitung 1 adalah sekolah kejuruan terkemuka yang berfokus pada pengembangan keterampilan, pengetahuan, dan kreativitas siswa untuk menghadapi dunia kerja yang kompetitif.
              </p>
              <a
                  href="/about"
                  className="inline-flex items-center px-6 py-2 text-lg font-semibold text-white bg-blue-400 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-orange-500"
              >
                  Lihat Lebih Lanjut
              </a>
          </div>
      </div>
  );
}
