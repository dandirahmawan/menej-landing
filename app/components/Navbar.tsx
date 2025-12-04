import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-6 bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <img
          src="/images/logo_text_blue.png"
          alt="Tampilan Menej"
          className="
            w-[150px] max-w-full
          "
        />
        {/* <ul className="hidden md:flex gap-8 text-gray-700">
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer">About</li>
          <li className="hover:text-primary cursor-pointer">Services</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul> */}
        <Link href="/register">
          <button className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-teal-800">
            Daftar
          </button>
        </Link>
      </div>
    </nav>
  );
}