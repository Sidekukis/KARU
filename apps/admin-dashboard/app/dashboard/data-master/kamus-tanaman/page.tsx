import React from 'react';
import Link from 'next/link';

export default function KamusTanamanPage() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Kamus Tanaman</h1>
          <p className="text-slate-500 mt-2 max-w-2xl font-body">Katalog digital spesimen flora untuk pemantauan presisi ekosistem. Kelola data morfologi, habitat, dan status konservasi tanaman secara terpusat.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-sm">search</span>
            <input className="pl-10 pr-4 py-3 bg-surface-container-highest border-none rounded-xl text-sm focus:ring-2 focus:ring-surface-tint w-64 transition-all" placeholder="Cari tanaman..." type="text" />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all text-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            Tambah Tanaman
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-8 mb-2 border-b border-surface-container">
        <Link href="/dashboard/data-master/kamus-tanaman" className="pb-4 text-sm font-bold text-primary relative">
          Kamus Tanaman
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>
        </Link>
        <Link href="/dashboard/data-master/kamus-penyakit-hama" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors relative">
          Kamus Penyakit &amp; Hama
        </Link>
        <Link href="/dashboard/data-master/sop-penanganan" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors relative">
          Panduan SOP
        </Link>
      </div>

      {/* Modern Table Section */}
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-outline-variant/10">
                <th className="px-6 py-5 text-xs font-semibold text-primary uppercase tracking-wider">Foto</th>
                <th className="px-6 py-5 text-xs font-semibold text-primary uppercase tracking-wider">Nama Tanaman</th>
                <th className="px-6 py-5 text-xs font-semibold text-primary uppercase tracking-wider">Habitat Utama</th>
                <th className="px-6 py-5 text-xs font-semibold text-primary uppercase tracking-wider">Status Konservasi</th>
                <th className="px-6 py-5 text-xs font-semibold text-primary uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5 border-b border-surface-container-low">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner border border-surface-container">
                    <img className="w-full h-full object-cover" alt="Nepenthes mirabilis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFI5Dj9mbjUZnmwUC63nqfXBnbuemI_YY3PDsjNJh3ZXYebIj-0FeFNQV7UcpWHUr5etwu-E07Rn_mk72CksjevtWqc9l2Mm6Q7mHRIyP1EXVspbDy85jXTGhoW04BJRs8JO4v5UmfYRFLWj7hpUn4MsrwjxH1_KtqW88vyXDf_lwvRZkETI4xx-KJhjn1U18Rhb3G3ciVcLrEPsBuIcw99OmplHYEEr0cvtMGxE5qnzA4K-G9P2g7DUEPzhH_0-f-ewM8kqiVsiKJ" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary italic font-headline mb-0.5">Nepenthes mirabilis</span>
                    <span className="text-xs text-slate-500 font-medium">Kantong Semar</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary bg-secondary/10 p-1.5 rounded-lg">forest</span>
                    <span className="text-sm text-on-surface-variant font-semibold">Hutan Hujan Tropis</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container-variant text-[10px] font-bold rounded-full uppercase tracking-tight flex items-center w-fit gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Dilindungi (LC)
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="p-2 hover:bg-error-container/50 rounded-lg text-slate-400 hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner border border-surface-container">
                    <img className="w-full h-full object-cover" alt="Rafflesia arnoldii" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4WJwfomFmZpczDb5Q5Vhcm38qhhFstqI0TO5HyargJCL0eMRjfoEjItTko6tHX-NTFH18N1Lq-lQxYMXFQEThIlpblsk-MajFajlO9u5-u569KkBhUEQw1IGhdmeqKGj0bXzLsj7Dz4fSvtYNp0zPA51YkoLugim-R7EHL0mbmCTVj3gfeiLhBvV9Cirvxbh3lY8T0WDhxP7wiZf_DzT1qCJjn665ewpAdXjKl3tD0ZJKqLhFoVO-0A11QSPKbmpPA3PNYH_qRYH1" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary italic font-headline mb-0.5">Rafflesia arnoldii</span>
                    <span className="text-xs text-slate-500 font-medium">Padma Raksasa</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-amber-600 bg-amber-50 p-1.5 rounded-lg">mountain_flag</span>
                    <span className="text-sm text-on-surface-variant font-semibold">Hutan Pegunungan</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-error-container text-error text-[10px] font-bold rounded-full uppercase tracking-tight flex items-center w-fit gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                    Terancam Punah (EN)
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="p-2 hover:bg-error-container/50 rounded-lg text-slate-400 hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner border border-surface-container">
                    <img className="w-full h-full object-cover" alt="Santalum album" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEf14Xn3L7xVoebd84uSn4lpNCAOuRArMyMXvZE7KNJONzesy0Sno_tgWzyhnSyq9WSGxDoxH9rMN5ucQy8s73lgoxC2cBEuZrOwT-vOCJ0_nOFJXBLyL5Q1r7PnFiVgBWC60m-YXGvIjP1IH7NT9D72HfZo5T5zG3YnOy99ALRlYB-YMlRw2do2MqHv6zfmnFcxXLapcgElZhhF1tNq9KcGfsIj45CGeyLcUMUvcJUZemUc2gyk5_zgebOmQByhHprIrcECkKuk5i" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary italic font-headline mb-0.5">Santalum album</span>
                    <span className="text-xs text-slate-500 font-medium">Cendana</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-yellow-600 bg-yellow-50 p-1.5 rounded-lg">filter_hdr</span>
                    <span className="text-sm text-on-surface-variant font-semibold">Sabana &amp; Hutan Kering</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-tight flex items-center w-fit gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Rentan (VU)
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="p-2 hover:bg-error-container/50 rounded-lg text-slate-400 hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner border border-surface-container">
                    <img className="w-full h-full object-cover" alt="Phalaenopsis amabilis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiZL7hb7KLkbvUPvI6t9BmTB8QH6FDCTQkPuYhXVdHiyJO26MXGTVrcD3cceAUdBpqngJooECBkoh-rZCVSN_oGUQhL-cbtYhPOZCNcO-YSUFf7IJlxjDB3DWvpMlv858QPfKaMwP_aq2eSsO1lK2x1TGdd-loTOVCoZAFSwH7Ml3c0ELt6BiZ4dDUc0r3ZSIx6gOf-C2fDH9EIHzdlhDCSPo3ADQzkbQKPryMb7VJ50kmUsw7xRTZiysRQRB-mb4LIqLGvQ6W1Kcm" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary italic font-headline mb-0.5">Phalaenopsis amabilis</span>
                    <span className="text-xs text-slate-500 font-medium">Anggrek Bulan</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary bg-secondary/10 p-1.5 rounded-lg">nature_people</span>
                    <span className="text-sm text-on-surface-variant font-semibold">Hutan Dataran Rendah</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container-variant text-[10px] font-bold rounded-full uppercase tracking-tight flex items-center w-fit gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Dilindungi (LC)
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="p-2 hover:bg-error-container/50 rounded-lg text-slate-400 hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table Pagination */}
        <div className="px-6 py-4 bg-surface-container-lowest flex items-center justify-between border-t border-surface-container/50">
          <p className="text-xs text-slate-500 font-medium">Menampilkan <span className="font-bold text-primary">4</span> dari <span className="font-bold text-primary">128</span> spesies tanaman</p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-surface-container-high text-slate-400 transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-slate-600 text-xs font-bold transition-colors">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-slate-600 text-xs font-bold transition-colors">3</button>
            <button className="p-2 rounded-lg hover:bg-surface-container-high text-slate-400 transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Analytics Preview (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8">
        <div className="bg-primary p-6 rounded-3xl text-white relative overflow-hidden group shadow-lg shadow-primary/20">
          <div className="absolute top-0 right-0 p-4 opacity-50"><span className="material-symbols-outlined">analytics</span></div>
          <div className="relative z-10 pt-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-300">Statistik Koleksi</span>
            <h3 className="text-4xl font-extrabold mt-2 font-headline tracking-tighter">1,240</h3>
            <p className="text-sm text-emerald-100/80 mt-1 font-medium">Spesimen Terdata di Database</p>
          </div>
          <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-white/5 group-hover:scale-110 transition-transform duration-500">inventory_2</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-3xl relative overflow-hidden group border border-outline-variant/10 shadow-sm">
          <div className="absolute top-0 right-0 p-4 text-error/30"><span className="material-symbols-outlined">timeline</span></div>
          <div className="relative z-10 pt-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Ancaman Ekosistem</span>
            <h3 className="text-4xl font-extrabold mt-2 font-headline text-error tracking-tighter">12%</h3>
            <p className="text-sm text-on-surface-variant mt-1 font-medium">Spesies Dalam Status Kritis</p>
          </div>
          <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-error/5 group-hover:scale-110 transition-transform duration-500">warning</span>
        </div>
        <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-3xl text-white relative overflow-hidden group shadow-lg shadow-secondary/20">
          <div className="absolute top-0 right-0 p-4 opacity-50"><span className="material-symbols-outlined">cloud_done</span></div>
          <div className="relative z-10 pt-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200">Update Terakhir</span>
            <h3 className="text-3xl font-extrabold mt-3 font-headline tracking-tight">Baru Saja</h3>
            <p className="text-sm text-emerald-100/80 mt-2 font-medium">Sinkronisasi Cloud Berhasil</p>
          </div>
          <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-white/5 group-hover:rotate-12 transition-transform duration-500">sync</span>
        </div>
      </div>
    </div>
  );
}
