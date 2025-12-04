import { PlayIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white text-center min-h-screen py-16 flex flex-col justify-center items-center px-4 pt-34">
      
      {/* IMAGE MOCKUP */}
      <div className="relative mb-0">
        <img
          src="/images/Dell-XPS-15.png"
          alt="Tampilan Menej"
          className="w-[300px] max-w-full"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mt-10">
        Kelola Proyek, Tugas, dan Absensi <br /> dalam Satu Platform
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Menej membantu tim Anda mengatur pekerjaan, memantau kehadiran, 
        dan berkolaborasi tanpa perlu pindah-pindah aplikasi.
      </p>

      {/* CTA MAIN */}
      <Link href={"/login"}>
        <button className="mt-6 font-bold px-14 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2 mx-auto">
          <PlayIcon className="w-5 h-5" />
          Mulai Menej
        </button>
      </Link>
      {/* <Link href={"/login"}>
        <button className="mt-6 px-8 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors">
          Coba Menej Sekarang
        </button>
      </Link> */}

      {/* DOWNLOAD BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a href="https://play.google.com/store/apps/details?id=com.app.menej" target="_blank">
          <img
            src="/images/google-play.png"
            alt="Download Menej di Google Play"
            className="h-14 hover:opacity-90 transition"
          />
        </a>
        <a href="https://apps.apple.com/id/app/menej/id6746373265" target="_blank">
          <img
            src="/images/app-store-download.png"
            alt="Download Menej di App Store"
            className="h-12 hover:opacity-90 transition mt-1"
          />
        </a>
      </div>
    </section>
  );
}