import React from 'react';

export default function DashboardPage() {
  return (
    <div className="p-8 pb-12 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Header Section */}
      <section className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight font-headline">Halaman Dashboard</h1>
          <p className="text-on-surface-variant font-medium mt-1">Metrik kinerja biologis waktu nyata di seluruh sektor yang dipantau.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl font-semibold text-sm hover:opacity-90 transition-all shadow-md">
          <span className="material-symbols-outlined text-sm">download</span>
          Ekspor Laporan
        </button>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">landscape</span>
            </div>
            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">Total Lahan</p>
          <h3 className="text-2xl font-extrabold text-primary mt-1 font-headline">12,480 Ha</h3>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-secondary-fixed rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">qr_code_scanner</span>
            </div>
            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">Aktif</span>
          </div>
          <p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">Node QR Aktif</p>
          <h3 className="text-2xl font-extrabold text-primary mt-1 font-headline">8,102</h3>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-tertiary-fixed rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">sensors</span>
            </div>
            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">Pemindaian Harian</p>
          <h3 className="text-2xl font-extrabold text-primary mt-1 font-headline">34.2K</h3>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-error-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-error">warning</span>
            </div>
            <span className="text-error text-xs font-bold bg-error-container px-2 py-1 rounded-full">Kritis</span>
          </div>
          <p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider">Peringatan Kritis</p>
          <h3 className="text-2xl font-extrabold text-primary mt-1 font-headline">07</h3>
        </div>
      </section>

      {/* Middle Section: Asymmetric Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Middle Left: Plant Health Trend (Large) */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-bold text-primary font-headline">Tren Kesehatan Tanaman</h2>
              <p className="text-sm text-on-surface-variant font-medium">Fotosintesis, Kelembapan, dan Indeks Penyerapan Nutrisi</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-surface-container text-xs font-semibold rounded-lg text-primary">7H</button>
              <button className="px-3 py-1 hover:bg-surface-container text-xs font-semibold rounded-lg text-on-surface-variant transition-colors">30H</button>
              <button className="px-3 py-1 hover:bg-surface-container text-xs font-semibold rounded-lg text-on-surface-variant transition-colors">90H</button>
            </div>
          </div>
          <div className="flex-1 w-full min-h-[300px] relative mt-4">
            {/* Legend */}
            <div className="absolute top-0 right-0 flex gap-4 z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-primary"></div>
                <span className="text-[11px] font-bold text-on-surface-variant">Fotosintesis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-primary-fixed"></div>
                <span className="text-[11px] font-bold text-on-surface-variant">Kelembapan</span>
              </div>
            </div>

            {/* X and Y Axis Chart Area */}
            <div className="flex h-[260px] w-full pt-10">
              {/* Y-Axis */}
              <div className="flex flex-col justify-between text-xs text-outline font-semibold pb-8 pr-4 w-12 text-right">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Chart Grid */}
              <div className="flex-1 relative border-l-2 border-b-2 border-surface-container-high h-[228px] mt-1.5">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                  <div className="w-full border-t border-dashed border-surface-variant"></div>
                  <div className="w-full border-t border-dashed border-surface-variant"></div>
                  <div className="w-full border-t border-dashed border-surface-variant"></div>
                  <div className="w-full border-t border-dashed border-surface-variant"></div>
                  <div className="w-full"></div>
                </div>

                {/* Bars Container */}
                <div className="absolute inset-0 flex items-end justify-around px-2 z-10 w-full h-full">
                  {/* Day 1 */}
                  <div className="flex flex-col h-full justify-end items-center group relative flex-1">
                    <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full z-10">
                      <div className="w-3 sm:w-5 h-[45%] bg-primary rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                      <div className="w-3 sm:w-5 h-[65%] bg-primary-fixed rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant absolute -bottom-7">Sen</span>
                  </div>

                  {/* Day 2 */}
                  <div className="flex flex-col h-full justify-end items-center group relative flex-1">
                    <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full z-10">
                      <div className="w-3 sm:w-5 h-[52%] bg-primary rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                      <div className="w-3 sm:w-5 h-[58%] bg-primary-fixed rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant absolute -bottom-7">Sel</span>
                  </div>

                  {/* Day 3 */}
                  <div className="flex flex-col h-full justify-end items-center group relative flex-1">
                    <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full z-10">
                      <div className="w-3 sm:w-5 h-[60%] bg-primary rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                      <div className="w-3 sm:w-5 h-[72%] bg-primary-fixed rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant absolute -bottom-7">Rab</span>
                  </div>

                  {/* Day 4 */}
                  <div className="flex flex-col h-full justify-end items-center group relative flex-1">
                    <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full z-10">
                      <div className="w-3 sm:w-5 h-[75%] bg-primary rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                      <div className="w-3 sm:w-5 h-[80%] bg-primary-fixed rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant absolute -bottom-7">Kam</span>
                  </div>

                  {/* Day 5 */}
                  <div className="flex flex-col h-full justify-end items-center group relative flex-1">
                    <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full z-10">
                      <div className="w-3 sm:w-5 h-[85%] bg-primary rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                      <div className="w-3 sm:w-5 h-[92%] bg-primary-fixed rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant absolute -bottom-7">Jum</span>
                  </div>

                  {/* Day 6 */}
                  <div className="flex flex-col h-full justify-end items-center group relative flex-1">
                    <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full z-10">
                      <div className="w-3 sm:w-5 h-[94%] bg-primary rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                      <div className="w-3 sm:w-5 h-[88%] bg-primary-fixed rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant absolute -bottom-7">Sab</span>
                  </div>

                  {/* Day 7 */}
                  <div className="flex flex-col h-full justify-end items-center group relative flex-1">
                    <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full z-10">
                      <div className="w-3 sm:w-5 h-[80%] bg-primary rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                      <div className="w-3 sm:w-5 h-[85%] bg-primary-fixed rounded-t-md hover:brightness-110 transition-all cursor-pointer relative group-hover:opacity-90"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface-variant absolute -bottom-7">Min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-surface-container mt-auto">
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Efisiensi Puncak</p>
              <p className="text-lg font-extrabold text-primary pt-1 font-headline">94.2%</p>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Rata-rata Kelembapan</p>
              <p className="text-lg font-extrabold text-primary pt-1 font-headline">68%</p>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Indeks Pertumbuhan</p>
              <p className="text-lg font-extrabold text-primary pt-1 font-headline">+2.4</p>
            </div>
          </div>
        </div>

        {/* Middle Right: Recent Activity */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <h2 className="text-xl font-bold text-primary mb-6 font-headline">Aktivitas Terbaru</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center z-10 relative">
                  <span className="material-symbols-outlined text-emerald-700 text-lg">check_circle</span>
                </div>
                <div className="absolute top-10 left-1/2 w-[2px] h-10 bg-surface-container transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface leading-tight">Node #4821 Kalibrasi Ulang</p>
                <p className="text-xs text-on-surface-variant mt-1">Pemeliharaan otonom berhasil.</p>
                <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase">12 menit yang lalu</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center z-10 relative">
                  <span className="material-symbols-outlined text-amber-700 text-lg">warning</span>
                </div>
                <div className="absolute top-10 left-1/2 w-[2px] h-10 bg-surface-container transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface leading-tight">Defisit Nutrisi Terdeteksi</p>
                <p className="text-xs text-on-surface-variant mt-1">Sektor 12B memerlukan penyesuaian nitrogen.</p>
                <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase">1 jam yang lalu</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center z-10 relative">
                  <span className="material-symbols-outlined text-blue-700 text-lg">water_drop</span>
                </div>
                <div className="absolute top-10 left-1/2 w-[2px] h-10 bg-surface-container transform -translate-x-1/2"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface leading-tight">Siklus Irigasi Selesai</p>
                <p className="text-xs text-on-surface-variant mt-1">Kisi Barat Laut terhidrasi optimal.</p>
                <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase">4 jam yang lalu</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-700 text-lg">person_add</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface leading-tight">Ilmuwan Baru Diundang</p>
                <p className="text-xs text-on-surface-variant mt-1">Akses diberikan kepada Dr. Elena K.</p>
                <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase">Hari ini, 09:12 AM</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-3 text-xs font-bold text-emerald-700 hover:bg-emerald-50 transition-colors rounded-xl border border-dashed border-emerald-200">
            Lihat Log Audit
          </button>
        </div>
      </section>

      {/* Bottom: Weekly AI Insight Hub */}
      <section className="bg-surface-container p-8 rounded-2xl border border-surface-container-high/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <h2 className="text-xl font-extrabold text-primary font-headline">Pusat Insight AI Mingguan</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-2xl font-medium">Pemrosesan saraf data sensor untuk memprediksi pergeseran ekologis dan optimalisasi sumber daya untuk 7 hari ke depan.</p>
          </div>
          <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-primary-container transition-all">
            <span className="material-symbols-outlined text-sm">cycle</span>
            Hasilkan Ringkasan AI
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Insight Report Card */}
          <div className="lg:col-span-2 bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100/50 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">description</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-2 py-0.5 rounded">Status: Saat Ini</span>
                <h3 className="text-lg font-extrabold text-emerald-950 mt-3 font-headline">Proyeksi Ekologis Eksekutif KARU</h3>
                <div className="mt-4 space-y-4 text-emerald-900 leading-relaxed text-sm">
                  <p>Berdasarkan tren kelembapan saat ini dan konsentrasi nitrogen tanah di <strong className="text-emerald-800">Sektor 14 hingga 18</strong>, sistem memprediksi <strong className="text-emerald-800">peningkatan 14%</strong> dalam output biomassa pada siklus berikutnya. Kami merekomendasikan saturasi air preventif di Kisi Utara untuk mengatasi prakiraan kenaikan suhu lingkungan sebesar 2°C.</p>
                  <p>Analisis AI terhadap pemindaian node QR menunjukkan sedikit penurunan dalam aktivitas penyerbuk. Hal ini kemungkinan bersifat musiman tetapi memerlukan penempatan node jaring aroma tambahan di dekat <strong className="text-emerald-800">Koridor Biodiversitas</strong>.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Strategic Recommendations */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="text-sm font-bold text-primary mb-4 flex items-center gap-2 uppercase tracking-wide font-headline">
              <span className="material-symbols-outlined text-base">verified_user</span>
              Tindakan Strategis
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">Tingkatkan Irigasi: Sektor 09</span>
                <span className="material-symbols-outlined text-slate-300 ml-auto text-sm group-hover:text-emerald-600 transition-colors">chevron_right</span>
              </li>
              <li className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">Segarkan Node QR: N-4822</span>
                <span className="material-symbols-outlined text-slate-300 ml-auto text-sm group-hover:text-emerald-600 transition-colors">chevron_right</span>
              </li>
              <li className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">Pembaruan Firmware: Core 01</span>
                <span className="material-symbols-outlined text-slate-300 ml-auto text-sm group-hover:text-emerald-600 transition-colors">chevron_right</span>
              </li>
              <li className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-100"></div>
                <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">Tinjau Log Akses</span>
                <span className="material-symbols-outlined text-slate-300 ml-auto text-sm group-hover:text-emerald-600 transition-colors">chevron_right</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
