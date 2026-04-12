import React from 'react';
import Link from 'next/link';

export default function KamusPenyakitHamaPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Kamus Penyakit &amp; Hama</h2>
          <p className="text-on-surface-variant mt-1 font-medium">Kelola repositori botani dan taksonomi diagnostik penyakit serta hama.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm group-focus-within:text-primary transition-colors">search</span>
            <input className="pl-10 pr-4 py-2.5 w-64 bg-surface-container-highest border-none rounded-xl text-sm focus:ring-2 focus:ring-surface-tint focus:ring-offset-2 transition-all" placeholder="Cari entri..." type="text"/>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm">add</span>
            Tambah Entri Baru
          </button>
        </div>
      </div>

      {/* Tab Navigation (Contextualized) */}
      <div className="flex gap-8 mb-8 border-b-0">
        <Link href="/dashboard/data-master/kamus-tanaman" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors relative">
          Kamus Tanaman
        </Link>
        <Link href="/dashboard/data-master/kamus-penyakit-hama" className="pb-4 text-sm font-bold text-primary relative">
          Kamus Penyakit &amp; Hama
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>
        </Link>
        <Link href="/dashboard/data-master/sop-penanganan" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors relative">
          Panduan SOP
        </Link>
      </div>

      {/* Data Table Card */}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-xs font-manrope font-bold text-on-surface-variant uppercase tracking-wider">Gambar</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-on-surface-variant uppercase tracking-wider">Nama Penyakit/Hama</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-on-surface-variant uppercase tracking-wider">Tingkat Risiko</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-on-surface-variant uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-on-surface-variant uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-6 py-4">
                  <img alt="Embun Tepung" className="w-12 h-12 rounded-lg object-cover bg-surface-container-high border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAp9FfpyLiT0AGDQvvNQ1oXRAhoA7yyvmug08FPjRoscUx00X4LiPDRCKYCE4Atm97712FtnnUAh0rwrg-eQkBdd0-QUbS1hBsy6fsMZK7aNvmzr_vBYSJIuJv3L2nFvNJuKcIuL-4QtGsZvpFBtU3t-zRLaDLAhjEd83ODe34JzIB9sIlUK-x-3XNHe6J7BTu1PC9wi21TI1lb9dLjSeKLhax2fVBZ2-6Tgo8AN2d3oT5HUeiQUVo9G_BTYa9yR_-Ol0GVBNYhqIX"/>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">Embun Tepung</span>
                    <span className="text-[10px] italic text-on-surface-variant/70 font-medium">Podosphaera xanthii</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold uppercase tracking-tight flex items-center w-fit gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Sedang
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-on-surface-variant">Patogen Jamur</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg" data-icon="edit">edit</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-error hover:bg-red-50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg" data-icon="delete">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-6 py-4">
                  <img alt="Layu Fusarium" className="w-12 h-12 rounded-lg object-cover bg-surface-container-high border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnLB9L9dTef3RqMSOSx6jGNohrq6WI-mEe7eECrwgCv0EW7IebrxsrEfFyMoXdfsE01_GQrVFHzWjTtnXCapPPOJmUMlC26B-B6EVG9SCSdTqDG-VUcKvIngh7sscLMakjlb2_-EBrAZX0bdbafpsJyLW8l0UheUnJ65u_lGoAq5-DW8G1t4aplnT1swl11ELqOQ-5Iu1dJGHcDJqXU1kDI3bVMMjwSoZJ9ibnXMng-LNBvCXOi04-33Y56RWGEsg4t-ziWGFPcNDD"/>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">Layu Fusarium</span>
                    <span className="text-[10px] italic text-on-surface-variant/70 font-medium">Fusarium oxysporum</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-[10px] font-bold uppercase tracking-tight flex items-center w-fit gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Tinggi
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-on-surface-variant">Jamur Vaskular</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg" data-icon="edit">edit</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-error hover:bg-red-50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg" data-icon="delete">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-6 py-4">
                  <img alt="Infestasi Kutu Daun" className="w-12 h-12 rounded-lg object-cover bg-surface-container-high border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGq2cVVFH5CBVudVZ2DX379osN6VFcRBeIW2v7kvyrZW41eKlb_Dhj6K57c7DGI332hAG9xDnyWBZHgyuObr-8F6cIldIghDL2mjNK8nlUiCBshGHlMhDu5FDOe6JZ7VumMaKrYEeay-qVjfY_lNX547akEiw3_R9Bq3YpCAwSAZomdmEHAFPrd0jD9E0yk-lovOaOfEVXAAigVJMpICmiwZsSb1woFKeGcyvgXb3-_L6g8og4np6F2EY_Z4RQK9_uSeoP0WQsfJOa"/>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">Infestasi Kutu Daun</span>
                    <span className="text-[10px] italic text-on-surface-variant/70 font-medium">Aphidoidea spp.</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-tight flex items-center w-fit gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Rendah
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-on-surface-variant">Hama Serangga</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg" data-icon="edit">edit</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-error hover:bg-red-50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-lg" data-icon="delete">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-surface-container-low/30 flex items-center justify-between border-t border-surface-container/50">
          <p className="text-xs text-on-surface-variant font-medium">Menampilkan <span className="text-primary font-bold">1-3</span> dari <span className="text-primary font-bold">128</span> entri</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 text-xs font-bold hover:bg-surface-container transition-all">2</button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 text-xs font-bold hover:bg-surface-container transition-all">3</button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Utility Section (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pb-8">
        <div className="bg-primary-container p-6 rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-400" data-icon="insights">insights</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Statistik Aktif</span>
          </div>
          <div className="mt-8">
            <h4 className="text-emerald-50 text-3xl font-manrope font-bold">42 ID Baru</h4>
            <p className="text-emerald-300/60 text-xs mt-1 font-medium">Entri diagnostik yang ditambahkan bulan ini.</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl md:col-span-2 flex flex-col justify-between border-l-4 border-primary shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-primary font-manrope font-extrabold text-lg">Pemeriksaan Kesehatan Sistem</h4>
            <span className="material-symbols-outlined text-primary/40" data-icon="verified_user">verified_user</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col bg-surface-container-low/50 p-4 rounded-lg">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Status Taksonomi</span>
              <span className="text-sm font-bold text-emerald-600 mt-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]" data-icon="check_circle">check_circle</span>
                Terkoneksi Penuh
              </span>
            </div>
            <div className="flex flex-col bg-surface-container-low/50 p-4 rounded-lg">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Tinjauan Tertunda</span>
              <span className="text-sm font-bold text-amber-600 mt-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
                12 Entri
              </span>
            </div>
            <div className="flex flex-col bg-surface-container-low/50 p-4 rounded-lg">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Integritas API</span>
              <span className="text-sm font-bold text-emerald-600 mt-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]" data-icon="signal_cellular_alt">signal_cellular_alt</span>
                Uptime 99.9%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
