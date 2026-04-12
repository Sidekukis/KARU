'use client';

import React from 'react';

export default function QRNodePage() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 shrink-0">
        <div>
          <h2 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Generator Aset Node QR</h2>
          <p className="text-slate-500 mt-2 max-w-2xl font-body">Hasilkan aset yang dapat dipindai secara massal untuk penempatan di lapangan.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/30 rounded-xl text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors shadow-sm bg-white">
            <span className="material-symbols-outlined text-[18px]">ios_share</span>
            Ekspor ZIP
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-semibold shadow-md shadow-emerald-950/10 hover:shadow-emerald-950/20 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
            Cetak ke PDF
          </button>
        </div>
      </div>

      {/* Main Workspace Split Layout */}
      <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
        
        {/* Left: Configuration Panel */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 shrink-0 h-fit lg:sticky lg:top-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col gap-6 shadow-sm border border-outline-variant/20">
            <div className="flex items-center gap-2 border-b border-outline-variant/10 pb-4">
              <span className="material-symbols-outlined text-emerald-700">tune</span>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider font-manrope">Konfigurasi Aset</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ruang Kerja Target</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium text-primary focus:ring-2 focus:ring-primary/20 appearance-none outline-none transition-all">
                    <option>Penghijauan Amazon Utara</option>
                    <option>Pengawasan Mangrove Sundarbans</option>
                    <option>Studi Kanopi Cekungan Kongo</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zona Penempatan</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium text-primary focus:ring-2 focus:ring-primary/20 appearance-none outline-none transition-all">
                    <option>Zona A - Persemaian Bibit</option>
                    <option>Zona B - Tegakan Dewasa</option>
                    <option>Zona C - Pemantauan Tanah</option>
                    <option>Zona D - Antarmuka Akuatik</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jumlah Node</label>
                <div className="relative">
                  <input className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl pl-4 pr-16 py-3 text-sm font-medium text-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" type="number" defaultValue="12" min="1" max="50" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold uppercase py-1 px-2 bg-slate-200 rounded-md">Maks 50</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Awalan Aset</label>
                <input className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-bold font-mono text-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none uppercase" type="text" defaultValue="FS-NA-Z" />
              </div>
            </div>
            
            <button className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-emerald-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-emerald-800 transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined">barcode_scanner</span>
              Hasilkan Kisi Barcode
            </button>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
              <h4 className="text-sm font-bold text-emerald-900">Tips Penempatan</h4>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed font-medium">
              Pastikan kode QR dicetak pada vinil tahan UV 3M untuk penempatan luar ruangan. Pemindai bekerja paling baik jika ukuran aktual kode minimal 4cm x 4cm.
            </p>
          </div>
        </div>

        {/* Right: Print Preview Area */}
        <div className="flex-1 px-1 w-full pb-10">
          <div className="w-full max-w-[800px] min-h-full bg-white mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-10 flex flex-col gap-6 rounded-md ring-1 ring-slate-100">
            {/* A4 Header */}
            <div className="flex justify-between items-end border-b-2 border-slate-100 pb-6 shrink-0">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Manifes Distribusi Aset</div>
                <h2 className="text-2xl font-bold font-manrope text-primary tracking-tight">Ruang Kerja: Amazon Utara</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-slate-500 font-mono font-medium uppercase bg-slate-50 px-2 py-1 rounded">Dibuat: 24-OKT-2023</span>
                  <span className="text-[10px] text-slate-500 font-mono font-medium uppercase bg-slate-50 px-2 py-1 rounded">Otoritas: KARU-ADMIN-042</span>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">ID Batch</div>
                <div className="text-sm font-mono font-bold text-primary bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100">B-99823-XA</div>
              </div>
            </div>

            {/* QR Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 flex-1 content-start">
              {/* Generate 8 QR code cards based on HTML */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                const sectorNum = Math.ceil(num / 2);
                
                // Using different placeholder QR images based on item to match mockup variety
                const qrImages = [
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBsMqpcH76Sznl3sot8zBTHI5d7yrHlJGVeNOCtGYGYyp52b6Gpnna8BJG8c-dLgx0RNdYMVfe_kdXGfiNJEjdOlNpegiIDmS907XNEHjFEgjnFJgFZ1gXV6TCcrKKJm-L_NICFuaUbpftuTHvvLoDSWD6F_udGbdLcjP3EOFou-8s1-dJNXcn3v1nj7nsy4O0KYCXZUR8DFAv6xVvFs9LcafOpQwVLkvMf7C7_OiF7Qk6sUAYW8SNX_2zqtSrD5n6xCQlko2M-7lnP",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnUdU0VnCnknBZq2zgpULlE96IacrkPR3lm5gZVz6116wsOe1RT6TO7LpvONTmchePrqVMbKWiyS6gePEm9IsfVZVUrLcsOvhVZV399sWLAih4TjtNwjlEbArenV-A19PCai6mHoXi5sj5bZHRPbnARzu7gqQYg0nIhZ9Ekk1ZDLojWEraJtaIjWJcGe9ZLei3FUM-0n5rPZlpiEfBQXyggey2ymF3R2AcJRy3GKjAjqMwrg-pX8k_2BiiFsXKJoIvFVzRQvEJR_mp",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDK0OFMkgFVbwovbN2bBC8JAkt1zK0_pkc0m49HuqgvrsuAq7mxgLR9mo64K9i1EHE-46YFTxJNg-gm4q3VRoCCAXyHJK4iMkf7bDEPm4A8k0vvG3GUBgWGij28r76Z29mVBZGnujzgD6O0hdtQ3pxmYf_nixqfAQQ9NNvs-32dTQp34QI6O6ftxC3U_ykoX0WMbSBeu9jTuz8z9hZ3EdMDNEp4E6i0fenImr1rfyjG4My6ju4nyIkzGNyJNlYiH7SajU6NIFZrsM_P",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDevMffxmghueM9rh9UPHCnR40jWmBBwO1Z0xazeoVkn4T5_AUbVnTKNy7NM3vrLbh3bLLP62gQcYf0oSOJgeBqhzclEDDD6ynf7q6LQFTZs0oVHRFWjRNQKx6xsrIN4AlCTcKBYPn-gUBJu4TW-JUVVynvBqiH2OASlv1cMYi855qXhRUprvyzffrgCxFfNyyMctrv1gikLqYCzio7BPuJrYblkuPmZz5Ep0nNj47J2QZRheBXV8cYADGjHfSOXOZ1xbK4LSLYYWTd",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkETzdpZPr6KggFZ4bgyIu2zzhhnVlCugyCNHj15PEDhU1MZrqpa9pgz6R0LX1dSf-SqiFMaHPRv3bO_Qw3pQKnTX1ZfJfQOsAIOydi8q-XZ79BZRDhIg46wwvRD5iApVg55qUAuSP6RjUZ3fD2kE5pd22sEa91jVAJllkHzmcYqCTPdWHh9U3p4pr-7yjcJFLNutvhbfp1O2K6HaDgO3qjzx_3wJZV3sE-xPE7-Fw-54AyC3WWGKdQhRD-iomnTlDkx22uhD6CjdV",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDyo4_oM07LLNoCFSrEZSYkb1tbT8OuD9AA8m3YleySI0-McTGCX9-3YzoQfhlG31KB5jKcqUPF8RqCkwst6Z8M2JzCtmAj6AvKgTXOQRee0QJT15OkitaLnSR9g726rRITSuzuICgC9mPoK1zwYb1G-USxefMOXTjkVMNX0yHjrKkiCESXy_DdXiOM36RzHmxq8-NdvO4tyJFF65HO5zyRKgBJt48GvR_QhJywSKELQ2GAiO4otrxZWbKAlB-iieCyKSDG6Q9M5sq0",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlPYXzJF57LWrFgBa1WGgVdDHsbssLVEf2ZP5ittrL9AcUnkoBZFZC3mxdPnqVAkKwttKvrI19IZCTAmLXW2W6l_NYRZJCpiOBBBzcaciJwvvIkOou62XnxQ83LW29_lPysLTe8MfMqG5JU2hO44v0tJ98VXSQu0FmuQJC97yqz-zb50yQ0X0l3obzmBRvSeKMgQtimljk7JB9e1JQ91KI_ZW5o7Xu8NgrXmxXCfgc5DmCRyLyKEKemVGGn1zjYWNAaPsz3ojBRnah",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBLVbyhVaOeCCqZPYzncTFZUFohJyJd-8VeCjFue7518yEne39Mgd97NEDMmQsju2GNwSrZ5Y3flIxnhHrcv991Pk2UFZD-jYMwgGXSc6BFXprcMArzOVPrssdrtc5cj3IKgpJOgYg3OlYQ2j9AazhsHcubEuYXOIXyUuU4NhhBqn1DQWmLfPmxLw8XZok8Ehrm3l-rwZ129kGdtln9HzArBCcy29q_wujfmyu7fy08UB7hjmVmvDoPuB6_zK8m8E5wPGrWpIvqQKPB"
                ];

                return (
                  <div key={num} className="flex flex-col items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-full aspect-square bg-white p-2 border border-slate-200 rounded-md shadow-inner relative group-hover:border-emerald-300 transition-colors">
                      <img 
                        alt={`QR Code ${num}`} 
                        className="w-full h-full object-cover contrast-125" 
                        src={qrImages[num - 1] || qrImages[0]} 
                      />
                    </div>
                    <div className="w-full text-center md:text-left">
                      <div className="text-[10px] sm:text-xs font-bold text-primary font-mono truncate">FS-NA-ZA-00{num}</div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate mt-0.5">Zona A / Sektor {sectorNum}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Page Footer */}
            <div className="mt-auto pt-6 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-[8px] text-slate-400 font-bold uppercase tracking-[0.2em] shrink-0">
              <span>Sistem Manajemen Aset KARU v4.2</span>
              <span>Halaman 1 dari 1</span>
              <span>Rahasia - Penggunaan Internal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
