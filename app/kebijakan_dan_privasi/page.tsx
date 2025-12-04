export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-700 px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-primary mb-6">
          Kebijakan Privasi Menej
        </h1>

        <p className="mb-4">
          Kebijakan Privasi ini menjelaskan bagaimana Menej ("kami") mengumpulkan,
          menggunakan, menyimpan, dan melindungi data pribadi Anda saat
          menggunakan aplikasi dan layanan kami, baik melalui web maupun aplikasi
          mobile.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          1. Informasi yang Kami Kumpulkan
        </h2>

        <p className="mb-4">Kami dapat mengumpulkan informasi berikut:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Data Akun:</strong> nama, email, nomor telepon, dan informasi
            perusahaan (jika mendaftar sebagai akun perusahaan).
          </li>
          <li>
            <strong>Data Aktivitas:</strong> tugas, proyek, percakapan, absensi,
            lokasi saat melakukan absen, dan data penggunaan fitur dalam aplikasi.
          </li>
          <li>
            <strong>Data Perangkat:</strong> jenis perangkat, sistem operasi,
            IP address, browser, dan log aktivitas.
          </li>
          <li>
            <strong>Data Lokasi:</strong> dikumpulkan hanya saat pengguna
            melakukan absensi lokasi dan memberikan izin akses lokasi.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          2. Cara Kami Menggunakan Informasi Anda
        </h2>
        <p className="mb-4">Kami menggunakan data tersebut untuk:</p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Menyediakan layanan pengelolaan tugas, proyek, absensi, dan kolaborasi.</li>
          <li>Meningkatkan kinerja dan pengalaman dalam menggunakan Menej.</li>
          <li>Memvalidasi identitas pengguna dan keamanan akun.</li>
          <li>Menyediakan dukungan teknis, notifikasi, dan pembaruan sistem.</li>
          <li>Memenuhi kebutuhan administratif perusahaan pengguna Menej.</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          3. Penyimpanan dan Keamanan Data
        </h2>

        <p className="mb-4">
          Kami menjaga keamanan data Anda menggunakan teknologi enkripsi, akses
          terbatas, dan prosedur keamanan standar industri. Data dapat disimpan
          pada server cloud yang berlokasi di dalam atau luar negeri, sesuai
          kebutuhan operasional.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          4. Pembagian Data Kepada Pihak Ketiga
        </h2>

        <p className="mb-4">
          Kami tidak menjual atau menyewakan data Anda kepada pihak ketiga. Data
          hanya dapat dibagikan kepada pihak layanan cloud, penyedia autentikasi,
          atau pihak lain yang mendukung berjalannya layanan Menej—dengan tetap
          mematuhi kebijakan perlindungan data.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          5. Hak Pengguna
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Mengakses, memperbarui, atau menghapus data pribadi.</li>
          <li>Menarik izin akses lokasi kapan saja.</li>
          <li>Menghapus akun dan seluruh data yang terkait.</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          6. Penggunaan Data Lokasi
        </h2>

        <p className="mb-4">
          Fitur absensi lokasi hanya akan mengakses lokasi saat Anda melakukan
          proses absen, dan tidak berjalan di latar belakang tanpa persetujuan Anda.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          7. Perubahan Kebijakan
        </h2>

        <p className="mb-4">
          Kebijakan ini dapat diperbarui sewaktu-waktu. Informasi perubahan
          akan kami sampaikan melalui email atau pemberitahuan dalam aplikasi.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-10 mb-3">
          8. Kontak Kami
        </h2>

        <p className="mb-10">
          Jika Anda memiliki pertanyaan terkait kebijakan ini, silakan hubungi kami
          melalui email support di{" "}
          <strong>offically@repositoryindonesia.com</strong>.
        </p>

      </div>
    </div>
  );
}