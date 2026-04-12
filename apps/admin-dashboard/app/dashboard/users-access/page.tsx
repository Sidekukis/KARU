'use client';

import React from 'react';

export default function UsersAccessPage() {
  const users = [
    {
      id: 1,
      name: "Dr. Aris Thorne",
      email: "aris.t@karu.eco",
      role: "Admin Utama",
      roleType: "admin",
      status: "Aktif",
      date: "12 Okt 2023",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTRx8yeqPFVFlPBy6iNJodE-Q9ep4ixUFcr1N3gogFMifp78LHGoA_-NN_NyuqZhJoUTEZzV_UMVgfFWMsaAoXo6JeoRvduQQan6Jm3hu1voagCWjBDP1g2dsHHGbfiI4ZxKc1_In7IiP7CwiXJjbsF3T50wZMMEpYn-yWw0EidJUTB8qABYV25FiaXKbkVqKNfgV9MvK4tg_q4m3vDxdebi_fCRCcO7ULr14uHCrnlWur8IyZ_X5rCg6zNWjfQaahQ8nPk40bcbSv"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      email: "s.jenkins@karu.eco",
      role: "Analis AI",
      roleType: "user",
      status: "Aktif",
      date: "15 Sep 2023",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyexDSQKcFrPuF0cq2Ztn_anNc7-_5aKm1ICfiHCDOCHfGRZ1TlhUgATtwAeD9HIfbzM-x1If8cxfzZYcyej6_GnLmS3fFOfJKVsFiuca0vW8QwBS4SUDwT3W9R9_p1d0X9D4Cof43JLi6p8u4LG5rA6bOxHIJl9CQLomXsRJ4lA2IxjCbt_qZvXfrfGyjfQs84mTypKpuaXLjP0CcekMX2RoTm6JfGSTHdLdjqHLuZ8CaK6qrDF_tCYlte4KbxLLB7GrYsKr5bNgC"
    },
    {
      id: 3,
      name: "Marcus Chen",
      email: "m.chen@karu.eco",
      role: "Pengawas Lapangan",
      roleType: "user",
      status: "Aktif",
      date: "28 Agu 2023",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJwHmea9t-lHzA70BNEq3_QZEDtWByy_IaOJrRdAtv-1Ne8kSnabju9mfHV2v3lRy4-5TV_XhNwN-vkh_VnSosYS-ZdRA18XG0u_MqDBqMIMRvbTRZ_2KYxQxV85JsULIiTKj4XiiyajLayETa46wMGwCZ9WIf7v5LSvsCRIdrCniB8aIYXdCtfS468GtXPFkqMcvj2i45f-G0uTdDhrF7or1XUE0CyuBVe4wY24xLt8m06DSQxOffthqOmLWDgGA-grzkJiQL8FIe"
    },
    {
      id: 4,
      name: "Elena Turov",
      email: "elena.t@karu.eco",
      role: "Auditor",
      roleType: "auditor",
      status: "Nonaktif",
      date: "05 Jul 2023",
      avatar: ""
    },
    {
      id: 5,
      name: "Rizky Firmansyah",
      email: "rfirmansyah@karu.eco",
      role: "Operator Node",
      roleType: "user",
      status: "Aktif",
      date: "10 Nov 2023",
      avatar: ""
    }
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full pb-20">
      
      {/* Header Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-outline-variant/10 pb-6">
        <div>
          <h2 className="text-3xl font-manrope font-extrabold text-emerald-950 tracking-tight">Pengguna & Akses</h2>
          <p className="text-slate-500 mt-1">Kelola identitas, tingkat peran, dan hak privilese platform.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-semibold shadow-md shadow-emerald-950/10 hover:shadow-emerald-950/20 transition-all flex items-center gap-2 active:scale-95">
            <span className="material-symbols-outlined text-[18px]">person_add</span> Tambah Pengguna Baru
          </button>
        </div>
      </div>

      {/* Advanced Filter / Search Bar */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 flex flex-wrap items-center justify-between gap-5 shadow-sm border border-outline-variant/20">
        <div className="relative w-full md:w-[400px]">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
          <input 
            className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 pl-12 pr-4 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
            placeholder="Cari nama pengguna atau alamat email..." 
            type="text" 
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative">
            <select className="bg-white border border-outline-variant/30 rounded-lg py-2 pl-4 pr-10 text-sm font-semibold text-slate-600 focus:ring-2 focus:ring-primary/20 appearance-none outline-none transition-all">
              <option>Semua Peran</option>
              <option>Admin</option>
              <option>Pengguna</option>
              <option>Auditor</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[16px]">filter_alt</span>
          </div>
        </div>
      </div>

      {/* Users Table List */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/10">
                <th className="px-6 py-5 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[280px]">Pengguna</th>
                <th className="px-6 py-5 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest w-[180px]">Peran</th>
                <th className="px-6 py-5 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest w-[150px]">Status</th>
                <th className="px-6 py-5 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest w-[160px]">Dibuat Pada</th>
                <th className="px-6 py-5 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest text-right w-[180px]">Aksi Akses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 bg-white">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/70 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {user.avatar ? (
                        <img 
                          alt="Avatar" 
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-50 mb-0.5" 
                          src={user.avatar} 
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[13px] font-bold text-emerald-800 ring-2 ring-emerald-50 border border-emerald-200/50 mb-0.5 shadow-sm">
                          {user.name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-primary">{user.name}</span>
                        <span className="text-xs font-medium text-slate-500">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest border
                      ${user.roleType === 'admin' 
                          ? 'bg-purple-50 text-purple-700 border-purple-100' 
                          : user.roleType === 'auditor' 
                          ? 'bg-blue-50 text-blue-700 border-blue-100'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${user.status === 'Aktif' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                       <span className={`text-xs font-bold ${user.status === 'Aktif' ? 'text-emerald-900' : 'text-slate-500'}`}>{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[12px] font-medium font-mono text-slate-500">{user.date}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all border border-transparent hover:border-amber-100" title="Edit Pengguna">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all border border-transparent hover:border-gray-200" title="Nonaktifkan Akun">
                        <span className="material-symbols-outlined text-[18px]">{user.status === 'Aktif' ? 'block' : 'check_circle'}</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all border border-transparent hover:border-rose-100 shadow-sm" title="Hapus Permanen">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">Menampilkan <span className="font-bold text-slate-700">1-5</span> dari 46 pengguna</p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-950 text-white text-xs font-bold shadow-md shadow-emerald-950/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:text-emerald-700 transition-all shadow-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:text-emerald-700 transition-all shadow-sm">3</button>
            <span className="text-slate-400 text-xs px-1 font-bold">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:text-emerald-700 transition-all shadow-sm">10</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
