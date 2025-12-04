import Link from "next/link";

export default function RegisterCompanyPage() {
  return (
    <div className="min-h-screen bg-[#F3F5F9] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10 mt-20 mb-20">
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
          <h1 className="mt-3 text-2xl font-semibold text-primary">Daftar Perusahaan</h1>
          <p className="mt-1 text-sm text-gray-500 max-w-xs mx-auto">
            Buat workspace perusahaan dan undang tim Anda untuk mulai bekerjasama.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* PIC Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap (PIC)
            </label>
            <input
              type="text"
              placeholder="Nama penanggung jawab"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Perusahaan
            </label>
            <input
              type="text"
              placeholder="PT Contoh Indonesia"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Company Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Perusahaan
            </label>
            <input
              type="email"
              placeholder="admin@perusahaan.com"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              No. HP / Telepon
            </label>
            <input
              type="text"
              placeholder="+62xxxxxxxxxx"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat Perusahaan
            </label>
            <textarea
              rows={2}
              placeholder="Jl. Sudirman No. xx, Jakarta"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kode Pos
            </label>
            <input
              type="text"
              placeholder="xxxxx"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Password */}
          <div>
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
          <div>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#14C79E] text-white rounded-xl py-3 text-sm font-medium
                       hover:bg-[#0FA783] transition-colors shadow-md"
          >
            Daftarkan Perusahaan
          </button>
        </form>

        {/* Back to Login */}
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