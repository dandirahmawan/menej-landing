export default function Footer() {
  return (
    <footer className="py-12 bg-secondary text-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">
        {/* <h1 className="text-xl font-bold text-white">Prodmast</h1> */}

        <nav className="flex gap-6 text-sm">
          <a href="/syarat_dan_ketentuan" className="hover:text-white">Syarat dan Ketentuan</a>
          <a href="/kebijakan_dan_privasi" className="hover:text-white">Kebijakan privasi</a>
        </nav>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Menej. All rights reserved.
        </p>
      </div>
    </footer>
  );
}