import Link from "next/link";

export default function Integrations() {
  return (
    <>
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">

          {/* GRID WRAPPER */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* TEXT ALWAYS FIRST */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">
                Pantau Progres Proyek dengan <br />
                <span className="text-accent">Timeline Interaktif</span>
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
                Menej tidak hanya sekadar mencatat tugas — Anda dapat melihat bagaimana
                setiap tugas saling terhubung, siapa yang bertanggung jawab, dan berapa
                lama pekerjaan akan berlangsung. Semua dalam satu garis waktu yang mudah
                dipahami.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700 text-sm">
                <li>• Jadwalkan pekerjaan dengan drag & drop</li>
                <li>
                  • Lihat status pengerjaan
                  <span className="text-[#EAB308] font-semibold"> On Progress</span>, 
                  <span className="text-[#16A34A] font-semibold"> Completed</span>, atau tertunda
                </li>
                <li>• Identifikasi bottleneck & keterlambatan lebih cepat</li>
                <li>• Visualisasi timeline untuk seluruh anggota tim</li>
              </ul>

              <p className="mt-4 text-xs text-gray-400 italic">
                *Fitur ini membantu tim bekerja lebih terarah, mengurangi miskomunikasi,
                dan mempercepat penyelesaian proyek.*
              </p>
            </div>

            {/* IMAGE - MOVES DEPENDING ON SCREEN */}
            <div className="relative mt-10 md:mt-0 md:order-last order-last md:order-none flex justify-center">
              <img
                src="/images/menej-timeline.png"
                alt="Tampilan Timeline Menej"
                className="
                  w-full max-w-4xl rounded-xl shadow-1xl border-5 border-blue-100
                "
              />

              <span className="
                absolute -bottom-5 left-1/2 -translate-x-1/2
                bg-primary text-white text-md px-3 py-1 rounded-lg shadow-2xl
              ">
                Timeline Menej
              </span>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-10 text-center bg-white">
        <h2 className="text-3xl font-semibold text-primary">
          Mulai gunakan Menej sekarang juga
        </h2>
        <p className="mt-2 text-gray-600">
          Pilih tipe akun sesuai kebutuhan penggunaan Anda.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">

          {/* CTA Personal */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              Untuk individu & tim kecil
            </span>
            <h3 className="text-xl font-semibold text-primary mt-3">Akun Personal</h3>
            <p className="text-sm text-gray-600 mt-1">
              Kelola tugas dan kolaborasi dengan sesama pengguna personal.
            </p>
          </div>

          {/* CTA Company */}
          <div className="border border-[#14C79E] rounded-xl p-6 bg-[#14C79E]/10 hover:shadow-xl transition">
            <span className="text-xs font-medium bg-[#14C79E]/20 text-[#0D8F75] px-3 py-1 rounded-full">
              Untuk perusahaan & organisasi
            </span>
            <h3 className="text-xl font-semibold text-[#0D8F75] mt-3">Akun Perusahaan</h3>
            <p className="text-sm text-gray-700 mt-1">
              Buat workspace, kelola tim, absensi, tugas, dan izin perusahaan.
            </p>
          </div>
        </div>

        {/* Informasi Free Access */}
        <p className="text-xs text-gray-500 mt-5 max-w-lg mx-auto leading-relaxed">
          <strong>Menej saat ini dapat digunakan tanpa biaya</strong>. Namun, kebijakan ini
          bersifat sementara dan dapat berubah sewaktu-waktu. Jika nantinya diberlakukan
          biaya langganan, pengguna akan mendapatkan pemberitahuan terlebih dahulu.
        </p>
      </section>
      
      <section className="text-center py-24 px-10 bg-primary text-white">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Siap mengelola pekerjaan dan tim dengan lebih efisien?
        </h2>
        <p className="mt-2 opacity-90">
          Mulai dalam kurang dari 60 detik — tanpa kartu kredit.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link href={"/register"}>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100">
              Daftar Personal
            </button>
          </Link>
          <Link href={"/register-company"}>
            <button className="px-8 py-3 bg-[#14C79E] text-white font-semibold rounded-xl hover:bg-[#0FA783] shadow-xl">
              Daftar Perusahaan
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-primary py-24 px-6" id="contact" style={{borderTop: "1px solid #3a636b"}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-semibold">
            Butuh bantuan atau ingin mencoba Menej?
          </h2>
          <p className="opacity-90 mt-2">
            Kirimkan pertanyaan, kendala, atau permintaan demo — tim kami siap membantu Anda.
          </p>
        </div>

        <form className="max-w-3xl mx-auto mt-12 bg-white p-10 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm 
                        focus:ring-primary/40 focus:border-primary"
              placeholder="Nama Anda"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm 
                        focus:ring-primary/40 focus:border-primary"
              placeholder="nama@perusahaan.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nomor HP / WhatsApp</label>
            <input
              type="tel"
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm 
                        focus:ring-primary/40 focus:border-primary"
              placeholder="08xxxxxxxxxx"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Permintaan</label>
            <select className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm 
                              focus:ring-primary/40 focus:border-primary">
              <option>Request Demo</option>
              <option>Keluhan Penggunaan</option>
              <option>Pertanyaan Produk</option>
              <option>Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
            <textarea
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm min-h-[120px] 
                        focus:ring-primary/40 focus:border-primary"
              placeholder="Ceritakan kebutuhan atau kendala Anda..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-white font-medium 
                      hover:bg-[#1A415F] transition-colors"
          >
            Kirim Permintaan
          </button>
        </form>
      </section>
    </>
  );
}