"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AuthServices from "../../services/auth_service";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirectLink, setRedirectLink] = useState("")
  const [onGoogleLogin, setOnGoogleLogin] = useState(false)

  useEffect(() => {
      if(window.location.href.split("?")[1] !== undefined) {
          setRedirectLink("?"+window.location.href.split("?")[1])
      }

      const checkGoogle = setInterval(() => {
        if (window.google && window.google.accounts) {
          clearInterval(checkGoogle);
          initGoogleSignIn();
        }
      }, 300);

      return () => clearInterval(checkGoogle);
  }, [redirectLink]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/loginApp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Email atau password salah");
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
      setError("Terjadi kesalahan. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  const initGoogleSignIn = () => {
  window.google.accounts.id.initialize({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    callback: handleGoogleResponse,
  });

  window.google.accounts.id.renderButton(
    document.getElementById("gsi-button"),
    { theme: "outline", size: "large" }
  );
};

const handleGoogleResponse = async (response: { credential: string }) => {
  setOnGoogleLogin(true); // spinner ON instantly

  try {
    const service = new AuthServices();
    const resp: any = await service.googleCredentialProcess(response.credential);

    document.cookie = `token=${resp.data.token}; path=/; max-age=86400;`;

    if (typeof window !== "undefined") {
      const base = process.env.NEXT_PUBLIC_BASE_APP;
      const callback = `${base}/redirect/oauth?access_token=${resp.data.tokenCallback}`;

      if (redirectLink && redirectLink.includes("invitation_conf")) {
        const inv = redirectLink.split("=")[1];
        window.location.replace(`${callback}&invitation_conf=${inv}`);
        return;
      }

      window.location.replace(callback);
    }
  } catch (e) {
    console.error("Google Auth failed", e);
    setOnGoogleLogin(false); // restore button if failed
  }
};

  return (
    <div className="min-h-screen bg-[#F3F5F9] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {onGoogleLogin && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] text-center animate-scaleIn">
              <div className="flex justify-center mb-4">
                <span className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
              </div>
              <h2 className="text-lg font-semibold text-primary">Memproses Login...</h2>
              <p className="text-xs text-gray-500 mt-1">
                Anda sedang masuk menggunakan Google.
                Jangan tutup halaman ini.
              </p>
            </div>
          </div>
        )}

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Link href={"/"}>
            <img
              src="/images/logo_text_blue.png"
              alt="Tampilan Menej"
              className="w-[150px] max-w-full"
            />
          </Link>
          <h1 className="mt-3 text-2xl font-semibold text-primary">Masuk ke Menej</h1>
          <p className="mt-1 text-sm text-gray-500">
            Kelola tugas, absensi, dan kolaborasi tim dalam satu tempat.
          </p>
        </div>

        {/* Login dengan Google */}
        {
          <button
            id="gsi-button"
            type="button"
            onClick={() => setOnGoogleLogin(true)}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px]">
              G
            </span>
            <span>Masuk dengan Google</span>
          </button>
        }

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-xs text-gray-400">atau login dengan email</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* FORM LOGIN */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:ring-primary/40 focus:border-primary"
              placeholder="nama@perusahaan.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:ring-primary/40 focus:border-primary"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-primary text-white rounded-xl py-2.5 text-sm font-medium hover:bg-[#1A415F] transition-colors disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <Link href={"/register"}>
            <button className="text-primary font-medium hover:underline">
              Daftar sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}