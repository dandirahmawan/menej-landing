import {
  KanbanSquare,
  Table,
  GanttChart,
  MapPinCheck,
  MessageSquare,
  CalendarCheck,
  LucideProps
} from "lucide-react";

const items: Feature[] = [
  {
    title: "Tampilan Kanban",
    desc: "Visualisasi tugas dalam bentuk kartu yang mudah dipindahkan, sehingga memudahkan pengelolaan progres pekerjaan.",
    Icon: KanbanSquare,
  },
  {
    title: "Tampilan Daftar / Tabel",
    desc: "Menampilkan tugas dalam format tabel yang rapi untuk memudahkan pencarian, sorting, dan analisis data secara cepat.",
    Icon: Table,
  },
  {
    title: "Tampilan Timeline",
    desc: "Menampilkan daftar tugas dalam bentuk garis waktu yang interaktif, membantu Anda memahami durasi dan keterkaitan antar tugas.",
    Icon: GanttChart,
  },
  {
    title: "Absensi Berdasarkan Lokasi",
    desc: "Pencatatan kehadiran otomatis menggunakan GPS, memastikan karyawan melakukan absensi sesuai lokasi yang ditentukan.",
    Icon: MapPinCheck,
  },
  {
    title: "Percakapan / Chats",
    desc: "Kolaborasi instan antar anggota tim melalui pesan langsung pada proyek atau tugas yang sedang dikerjakan.",
    Icon: MessageSquare,
  },
  {
    title: "Pengajuan Cuti",
    desc: "Fitur untuk mengajukan izin cuti, sakit, atau izin lainnya secara digital, lengkap dengan alur persetujuan atasan sehingga proses lebih cepat dan transparan.",
    Icon: CalendarCheck,
  }
];

type IconType = React.ComponentType<LucideProps>;

type Feature = {
  title: string;
  desc: string;
  Icon: IconType;
};

export default function Services() {
  return (
    <section className="bg-primary text-white py-24 min-h-screen">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-14">
          Fitur Unggulan Menej
        </h2>

        <div className="grid md:grid-cols-3 gap-10 justify-center place-items-center">
          {items.map(({title, desc, Icon}, i) => (
            <div
              key={i}
              className="p-6 bg-secondary rounded-xl hover:bg-[#1A415F] transition
                         text-center flex flex-col items-center w-full h-full max-w-xs"
            >
              <Icon className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}