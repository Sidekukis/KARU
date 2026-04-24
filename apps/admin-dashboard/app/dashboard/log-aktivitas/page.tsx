import React from 'react';

// Types for Activity Log
type ActivityType = 'create' | 'update' | 'delete' | 'system' | 'auth';

type ActivityLog = {
  id: string;
  type: ActivityType;
  action: string;
  description: string;
  user: string;
  role: string;
  timestamp: string;
  ipAddress: string;
};

const MOCK_LOGS: ActivityLog[] = [
  {
    id: 'LOG-001',
    type: 'system',
    action: 'Kalibrasi Node Selesai',
    description: 'Node #4821 berhasil melakukan kalibrasi otonom.',
    user: 'Sistem',
    role: 'System',
    timestamp: '2026-04-24 21:50:12',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'LOG-002',
    type: 'update',
    action: 'Pembaruan Node QR',
    description: 'Sektor 12B memiliki penyesuaian nitrogen.',
    user: 'Dr. Aris Thorne',
    role: 'Admin Utama',
    timestamp: '2026-04-24 20:45:00',
    ipAddress: '192.168.1.42',
  },
  {
    id: 'LOG-003',
    type: 'system',
    action: 'Siklus Irigasi',
    description: 'Kisi Barat Laut terhidrasi optimal.',
    user: 'Sistem',
    role: 'System',
    timestamp: '2026-04-24 17:30:25',
    ipAddress: '192.168.1.101',
  },
  {
    id: 'LOG-004',
    type: 'auth',
    action: 'Login Berhasil',
    description: 'Akses diberikan kepada Dr. Elena K.',
    user: 'Dr. Elena K.',
    role: 'Operator',
    timestamp: '2026-04-24 09:12:05',
    ipAddress: '114.120.45.12',
  },
  {
    id: 'LOG-005',
    type: 'create',
    action: 'Tambah Pengguna Baru',
    description: 'Membuat akun pengguna baru untuk operator wilayah timur.',
    user: 'Dr. Aris Thorne',
    role: 'Admin Utama',
    timestamp: '2026-04-23 14:30:10',
    ipAddress: '192.168.1.42',
  },
  {
    id: 'LOG-006',
    type: 'delete',
    action: 'Hapus Akses Pengguna',
    description: 'Menghapus hak akses untuk pengguna ID #1823.',
    user: 'Dr. Aris Thorne',
    role: 'Admin Utama',
    timestamp: '2026-04-23 10:15:44',
    ipAddress: '192.168.1.42',
  },
];

const TYPE_CONFIG: Record<ActivityType, { icon: string; bg: string; color: string; label: string }> = {
  create: { icon: 'add_circle', bg: 'bg-emerald-100', color: 'text-emerald-700', label: 'Tambah' },
  update: { icon: 'edit', bg: 'bg-blue-100', color: 'text-blue-700', label: 'Ubah' },
  delete: { icon: 'delete', bg: 'bg-red-100', color: 'text-red-700', label: 'Hapus' },
  system: { icon: 'memory', bg: 'bg-slate-100', color: 'text-slate-700', label: 'Sistem' },
  auth: { icon: 'login', bg: 'bg-violet-100', color: 'text-violet-700', label: 'Autentikasi' },
};

export default function LogAktivitasPage() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-outline-variant/10 pb-6">
        <div>
          <h1 className="text-3xl font-manrope font-extrabold text-emerald-950 tracking-tight">Log Aktivitas</h1>
          <p className="text-slate-500 mt-1 max-w-xl">
            Pantau seluruh riwayat aktivitas dan log audit perubahan dalam sistem KARU.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Ekspor Log
        </button>
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-2xl p-4 flex flex-wrap items-center gap-3 shadow-sm border border-slate-100">
        <div className="relative flex-1 min-w-[220px]">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
          <input
            placeholder="Cari aktivitas, pengguna, atau IP..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative">
            <select className="bg-slate-100 border-0 rounded-xl py-2 pl-3 pr-7 text-[12px] font-bold text-slate-600 focus:ring-2 focus:ring-primary/20 outline-none appearance-none">
              <option value="semua">Semua Tipe</option>
              <option value="sistem">Sistem</option>
              <option value="pengguna">Pengguna</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[14px]">expand_more</span>
          </div>

          <div className="relative">
            <select className="bg-slate-100 border-0 rounded-xl py-2 pl-3 pr-7 text-[12px] font-bold text-slate-600 focus:ring-2 focus:ring-primary/20 outline-none appearance-none">
              <option value="semua">7 Hari Terakhir</option>
              <option value="30d">30 Hari Terakhir</option>
              <option value="all">Semua Waktu</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[14px]">expand_more</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest w-[160px]">Waktu</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest w-[200px]">Pengguna</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[200px]">Aktivitas</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest w-[150px]">Kategori</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest w-[160px]">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {MOCK_LOGS.map((log) => {
                const config = TYPE_CONFIG[log.type];
                return (
                  <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-slate-700">{log.timestamp}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-700">{log.user}</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">{log.role}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-bold text-slate-800 leading-tight">{log.action}</p>
                        <p className="text-xs text-slate-500 mt-0.5 max-w-lg">{log.description}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1.5 object-contain rounded-lg text-[10px] font-bold tracking-wide border ${config.bg.replace('100', '50')} ${config.color} border-${config.color.replace('text-', '')}/20`}>
                        {config.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-slate-500 font-mono tracking-tight bg-slate-100 px-2.5 py-1 rounded-md">{log.ipAddress}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <p className="text-xs font-semibold text-slate-500 hidden sm:block">Menampilkan {MOCK_LOGS.length} dari {MOCK_LOGS.length} entri</p>
          <div className="flex items-center gap-1.5 sm:ml-auto w-full sm:w-auto justify-between">
            <button disabled className="px-3 py-1.5 text-xs font-bold text-slate-400 bg-slate-100 rounded-lg cursor-not-allowed">Sebelumnya</button>
            <div className="flex gap-1">
              <button className="w-7 h-7 flex items-center justify-center text-xs font-bold bg-primary text-white rounded-lg shadow-sm">1</button>
            </div>
            <button disabled className="px-3 py-1.5 text-xs font-bold text-slate-400 bg-slate-100 rounded-lg cursor-not-allowed">Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
}
