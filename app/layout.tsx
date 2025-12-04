import "./globals.css";

export const metadata = {
  title: "Menej — Manajemen Tugas, Absensi, dan Kolaborasi Tim",
  description:
    "Kelola proyek, tugas, absensi, izin, dan kolaborasi tim dalam satu platform. Cocok untuk personal, UMKM, hingga perusahaan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}