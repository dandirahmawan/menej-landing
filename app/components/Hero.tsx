import { PlayIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F3F9FF] min-h-[85vh] flex items-center min-h-screen px-6 md:px-20 py-35">

      {/* BACKGROUND WAVE */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#E8F3FF"
          d="M0,288L60,272C120,256,240,224,360,224C480,224,600,256,720,256C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 max-w-6xl mx-auto text-center md:text-left">

        {/* IMAGE FIRST ON MOBILE */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            // src="/images/Dell-XPS-15.png"
             src="/images/menej-ils.png"
            alt="Tampilan Menej"
            className="w-[300px] md:w-[480px] drop-shadow-xl"
          />
        </div>

        {/* TEXT AREA */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
          <h1
            className="
              text-4xl md:text-5xl font-semibold leading-tight mt-10
              bg-gradient-to-r from-[#215277] via-[#1488CC] to-[#14C79E]
              bg-clip-text text-transparent
            "
          >
            Kelola Proyek, Tugas, dan Absensi <br /> dalam Satu Platform
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-md">
            Menej membantu tim Anda mengatur pekerjaan, memantau kehadiran,
            dan berkolaborasi tanpa perlu pindah-pindah aplikasi.
          </p>

          {/* CTA */}
          <Link href={"/login"}>
            <button className="mt-6 px-8 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2">
              <PlayIcon className="w-5 h-5" />
              Mulai Menej
            </button>
          </Link>

          {/* DOWNLOAD BUTTONS */}
          <div className="flex gap-0 mt-6 justify-center md:justify-start flex-wrap">
            <a href="#">
              <img src="/images/google-play.png" className="h-13 hover:opacity-90 transition" style={{marginLeft: "-7px"}}/>
            </a>
            <a href="#">
              <img src="/images/app-store-download.png" className="h-11 hover:opacity-90 transition mt-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}