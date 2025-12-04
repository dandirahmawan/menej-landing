"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AuthServices from "../../services/auth_service";

export default function RegisterPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [name, setName] = useState("")
  const [messagesAlert, setMessagesAlert] = useState("")
  const [loading, setLoading] = useState(false);
  const [redirectLink, setRedirectLink] = useState("")

  useEffect(() => {
      if(window.location.href.split("?")[1] !== undefined) {
          setRedirectLink("?"+window.location.href.split("?")[1])
      }
  }, [redirectLink]);

   

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessagesAlert(""); // reset alert

    // Validasi basic
    if (!name || !email || !password || !repeatPassword) {
      setMessagesAlert("Semua data wajib diisi.");
      return;
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessagesAlert("Format email tidak valid.");
      return;
    }

    // Validasi password match
    if (password !== repeatPassword) {
      setMessagesAlert("Password tidak sama. Silakan ulangi.");
      return;
    }

    setLoading(true);

    try {
      // Contoh request, tinggal ganti URL & body sesuai backend Anda
      let body = {
          name: name,
          email: email,
          password: password
      }
      var services = new AuthServices()
      var resp = await services.register(body)
      if (resp.statusCode == 200) {
          if (resp.data.success) {
              handleLogin() /* execute login */
          } else {
              setMessagesAlert(resp.data.message)
              setLoading(false)
          }
      } else {
        setMessagesAlert(resp.data.message || "Terjadi kesalahan, coba lagi.");
      }

      // const data = await resp.data;

      // if (!resp.statusCode ) {
      //   setMessagesAlert(data.message || "Terjadi kesalahan, coba lagi.");
      //   setLoading(false);
      //   return;
      // }

      // // Jika sukses - redirect
      // window.location.href = `/login${redirectLink}`;
    } catch (error) {
      setMessagesAlert("Gagal terhubung ke server. Periksa koneksi.");
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/loginApp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return;
      }
      
      // 🚨 Jika backend belum mengatur httpOnly cookie,
      // kita set token sementara di cookie browser
      document.cookie = `token=${data[0].token}; path=/; max-age=86400;`;

      setTimeout(() => {
          if (redirectLink == "") {
              window.location.replace(process.env.NEXT_PUBLIC_BASE_APP+"/redirect/oauth?access_token="+data[0].callbackToken)
          } else {
              if (redirectLink.includes("invitation_conf")) {
                  window.location.replace(process.env.NEXT_PUBLIC_BASE_APP+"/redirect/oauth?access_token="+data[0].callbackToken+"&invitation_conf="+redirectLink.split("=")[1])
                  return false
              } 

              /* default redirect */
              window.location.replace(process.env.NEXT_PUBLIC_BASE_APP+"/redirect/oauth?access_token="+data[0].callbackToken+"")
          }
      }, 100)
      // Redirect ke dashboard app
      // router.replace("https://app.menej.com"); 
      // atau localhost 
      // router.replace("http://localhost:3001");

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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

        {messagesAlert && (
          <div className="bg-red-100 text-red-600 text-center text-sm p-2 rounded-xl mb-4">
            {messagesAlert}
          </div>
        )}

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Name */}
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="nama@mail.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          {/* Button Register */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full bg-primary text-white rounded-xl py-2.5 text-sm font-medium
              transition-colors flex items-center justify-center gap-2
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#1A415F]"}`}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Memproses...
              </div>
            ) : (
              "Daftar"
            )}
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