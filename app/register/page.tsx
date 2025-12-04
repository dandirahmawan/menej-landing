import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F3F5F9] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto">
          <Link href={"/"}>
            <img
              src="/images/logo_text_blue.png"
              alt="Tampilan Menej"
              className="
                  w-[150px] max-w-full
              "
            />
          </Link>
          </div>
          <h1 className="mt-3 text-2xl font-semibold text-primary">Buat Akun Menej</h1>
          <p className="mt-1 text-sm text-gray-500">
            Kelola tugas, absensi, dan proyek dalam satu platform.
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Name */}
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="nama@perusahaan.com"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Repeat Password */}
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ulangi Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Button Register */}
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-xl py-2.5 text-sm font-medium
                       hover:bg-[#1A415F] transition-colors"
          >
            Daftar
          </button>
        </form>

        {/* Register as Company */}
        <div className="mt-4">
          <Link href={"/register-company"}>
            <button
                type="button"
                className="
                    w-full 
                    bg-[#14C79E] text-white
                    rounded-xl py-2.5 text-sm font-medium
                    hover:bg-[#0FA783]
                    transition-colors shadow-md
                "
            >
                Daftar sebagai Perusahaan
            </button>
          </Link>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <button className="text-primary font-medium hover:underline">
            Masuk sekarang
          </button>
        </div>
      </div>
    </div>
  );
}