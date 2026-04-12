'use client';

import React from 'react';

export default function ReportsAIPage() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full pb-20">

      {/* Header Title and Tab Navigation */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-3xl font-manrope font-extrabold text-emerald-950 tracking-tight">Laporan & Wawasan AI</h2>
            <p className="text-slate-500 mt-1">Menganalisis metrik presisi dan indikator kesehatan ekologis.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 text-emerald-900 rounded-xl text-sm font-semibold hover:bg-surface-container-high transition-all flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-sm">download</span> Ekspor PDF
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-semibold shadow-md shadow-emerald-950/10 hover:shadow-emerald-950/20 transition-all flex items-center gap-2 hover:brightness-110 active:scale-95">
              <span className="material-symbols-outlined text-sm">auto_awesome</span> Jalankan Pemindaian AI
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Filter Bar */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 flex flex-wrap items-center gap-5 shadow-sm border border-outline-variant/20">
        <div className="flex-1 min-w-[220px]">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Rentang Tanggal</label>
          <div className="flex items-center gap-2 bg-slate-50 border border-outline-variant/20 px-4 py-2.5 rounded-xl text-sm text-slate-600 focus-within:ring-2 focus-within:ring-primary/20 transition-all cursor-pointer">
            <span className="material-symbols-outlined text-[18px] text-slate-400">calendar_today</span>
            <span className="font-medium font-mono">12 Okt 2023 - 19 Okt 2023</span>
          </div>
        </div>

        <div className="flex-1 min-w-[180px]">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Status Validasi</label>
          <div className="relative">
            <select className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl py-2.5 pl-4 pr-10 text-sm text-slate-700 font-semibold focus:ring-2 focus:ring-primary/20 appearance-none outline-none transition-all">
              <option>Semua Status</option>
              <option>Valid</option>
              <option>Di Luar Batas</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Jenis Hama</label>
          <div className="relative">
            <select className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl py-2.5 pl-4 pr-10 text-sm text-slate-700 font-semibold focus:ring-2 focus:ring-primary/20 appearance-none outline-none transition-all">
              <option>Semua Hama</option>
              <option>Deteksi Kutu Daun</option>
              <option>Pengorok Daun</option>
              <option>Penggerek Abu Zamrud</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
          </div>
        </div>

        <div className="flex items-end h-full md:mt-[22px] justify-end">
          <button className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200 transition-all">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
          </button>
        </div>
      </div>

      {/* High-Density Data Table */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/10">
                <th className="px-6 py-4 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest w-[120px]">Cap Waktu</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[150px]">Analis</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[120px]">Sampel Gambar</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest">Koordinat</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[250px]">Diagnosis AI</th>
                <th className="px-6 py-4 text-xs font-manrope font-bold text-slate-400 uppercase tracking-widest w-[50px]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 bg-white">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/70 transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-emerald-950 font-mono">19-10-2023</p>
                  <p className="text-[11px] font-bold text-slate-400 font-mono mt-0.5">14:23:45 UTC</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img alt="Pengguna" className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyexDSQKcFrPuF0cq2Ztn_anNc7-_5aKm1ICfiHCDOCHfGRZ1TlhUgATtwAeD9HIfbzM-x1If8cxfzZYcyej6_GnLmS3fFOfJKVsFiuca0vW8QwBS4SUDwT3W9R9_p1d0X9D4Cof43JLi6p8u4LG5rA6bOxHIJl9CQLomXsRJ4lA2IxjCbt_qZvXfrfGyjfQs84mTypKpuaXLjP0CcekMX2RoTm6JfGSTHdLdjqHLuZ8CaK6qrDF_tCYlte4KbxLLB7GrYsKr5bNgC" />
                    <span className="text-sm font-bold text-primary">Sarah Jenkins</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-16 h-10 rounded-lg overflow-hidden bg-slate-100 relative group cursor-pointer ring-1 ring-slate-200 hover:ring-emerald-300 transition-all">
                    <img alt="Sampel daun" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpdCGRTt_czVoK4QB5oJaUltyWXvisjHA4_y0XmPNFRjI3IPZ81ibjes7OkWdJn04oFviWQm3yPOZg948lqnLRuDbLYKmG8gbs0AZoEi4qDhaBdDY19_jOcz4m_iLs4vWegSyp6XcPmEa0_7tZwRwgNZtTIfrOTsLbMCxaLSw_mjBViuevCNY_CaNdVyvxCDUkVHAT479D4inrC7dN5Pt_5-YxJzJUvD1_yvVSRtUJV12g1WVyibVdPR4QVKp1hyrkpmISGl8vn596" />
                    <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[1px]">
                      <span className="material-symbols-outlined text-white text-[18px]">visibility</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-[11px] font-bold font-mono bg-slate-100 px-2.5 py-1.5 rounded-md text-slate-600 border border-slate-200">45.523° N, 122.676° W</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Valid
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-sm font-bold text-emerald-950">Negatif Patogen</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 rounded-lg transition-all mx-auto opacity-0 group-hover:opacity-100 shadow-sm border border-transparent hover:border-emerald-100">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/70 transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-emerald-950 font-mono">19-10-2023</p>
                  <p className="text-[11px] font-bold text-slate-400 font-mono mt-0.5">11:05:12 UTC</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img alt="Pengguna" className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwHmea9t-lHzA70BNEq3_QZEDtWByy_IaOJrRdAtv-1Ne8kSnabju9mfHV2v3lRy4-5TV_XhNwN-vkh_VnSosYS-ZdRA18XG0u_MqDBqMIMRvbTRZ_2KYxQxV85JsULIiTKj4XiiyajLayETa46wMGwCZ9WIf7v5LSvsCRIdrCniB8aIYXdCtfS468GtXPFkqMcvj2i45f-G0uTdDhrF7or1XUE0CyuBVe4wY24xLt8m06DSQxOffthqOmLWDgGA-grzkJiQL8FIe" />
                    <span className="text-sm font-bold text-primary">Marcus Chen</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-16 h-10 rounded-lg overflow-hidden bg-slate-100 relative group cursor-pointer ring-1 ring-slate-200 hover:ring-amber-300 transition-all">
                    <img alt="Sampel daun" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbcqYJpRlpbpmNvtjWtkInq1oFHwVTlHDo76-3SjOumxLu-QWGdEUHOvNyrO9Ixxyxsqls0bzTJMyI62LFC832YZGiuDmHDgx5wIeWnJwteeImd8KZzY_MmpRO8e0j3PQGNENO02cO7yPB7rmpsyqLF7GYS3oFKGop0xbrEIHlbPe3puvznVEENz4pdl8IZCHGYsAr596ylVRgdeWh9GKAQSnBQZKQitH_qWGylScGuG19pyObORSq9JALBvFa83RyulXDnCc-VY3y" />
                    <div className="absolute inset-0 bg-amber-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[1px]">
                      <span className="material-symbols-outlined text-white text-[18px]">visibility</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-[11px] font-bold font-mono bg-slate-100 px-2.5 py-1.5 rounded-md text-slate-600 border border-slate-200">45.521° N, 122.672° W</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-100 gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Di Luar Batas
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-amber-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    <span className="text-sm font-bold text-amber-950 flex flex-col sm:block">Koloni Kutu Daun <span className="text-amber-700/80">(Prob. 92%)</span></span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 rounded-lg transition-all mx-auto opacity-0 group-hover:opacity-100 shadow-sm border border-transparent hover:border-emerald-100">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/70 transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-emerald-950 font-mono">18-10-2023</p>
                  <p className="text-[11px] font-bold text-slate-400 font-mono mt-0.5">16:58:30 UTC</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700 ring-2 ring-emerald-50 border border-emerald-200 shadow-sm">ET</div>
                    <span className="text-sm font-bold text-primary">Elena Turov</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-16 h-10 rounded-lg overflow-hidden bg-slate-100 relative group cursor-pointer ring-1 ring-slate-200 hover:ring-emerald-300 transition-all">
                    <img alt="Sampel daun" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyWbx9BO08ncVVRbqVpJzuLj1wJhdwUSfAW628zWFM8Vw2T1SpQK6yCqDXVFA8v0LbG6TpFL4H_73G_H4aemb59ixnal4OekGH4UfxkBoXAvAp-3yixMAgVuDOoPVJIK2keOB03ge3DBzMuVJ7KqtaiGUDOGy_dsOvfZviKDSFrygLXsI8m5NmTW7eAaMzSLNNTln8ZCLLJvnx6foiDnjFT29tNl9K-H3ZVtFwnQgrdeL4uXAVPMEbiMeRyVUi1lhUwuDhd6iBddW8" />
                    <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[1px]">
                      <span className="material-symbols-outlined text-white text-[18px]">visibility</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-[11px] font-bold font-mono bg-slate-100 px-2.5 py-1.5 rounded-md text-slate-600 border border-slate-200">45.525° N, 122.680° W</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Valid
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-sm font-bold text-emerald-950">Kesehatan Optimal</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50 rounded-lg transition-all mx-auto opacity-0 group-hover:opacity-100 shadow-sm border border-transparent hover:border-emerald-100">
                    <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">Menampilkan <span className="font-bold text-slate-700">1-10</span> dari 1.240 rekaman</p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-950 text-white text-xs font-bold shadow-md shadow-emerald-950/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:text-emerald-700 transition-all shadow-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:text-emerald-700 transition-all shadow-sm">3</button>
            <span className="text-slate-400 text-xs px-1 font-bold">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:text-emerald-700 transition-all shadow-sm">124</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI Snapshot Widgets (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Widget 1 */}
        <div className="bg-emerald-950 p-7 rounded-3xl relative overflow-hidden group shadow-lg shadow-emerald-950/10 hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -top-4 -right-4 p-4 opacity-[0.05] group-hover:opacity-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
            <span className="material-symbols-outlined text-9xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h4 className="text-emerald-400 text-[11px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Keandalan Model
              </h4>
              <p className="text-white text-5xl font-manrope font-extrabold tracking-tight">98,4%</p>
              <p className="text-emerald-100/50 text-xs font-medium mt-3">Agregat dari analisis 42.000 node</p>
            </div>
            <div className="mt-8 pt-4 border-t border-emerald-800/50 flex justify-between items-center text-xs font-bold text-emerald-400">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+2,1% dari audit terakhir</span>
              </div>
            </div>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="bg-[#1a2d24] border border-[#233d31] p-7 rounded-3xl group shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h4 className="text-emerald-300/70 text-[11px] font-bold uppercase tracking-widest mb-5">Peringatan Kritis</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-[#13231b] p-3 rounded-xl border border-rose-900/40 hover:border-rose-500/50 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1 shrink-0 ring-4 ring-rose-500/20"></div>
              <div>
                <p className="text-rose-50 text-xs font-bold leading-tight">Anomali terdeteksi di Geofence B-12</p>
                <p className="text-rose-200/50 text-[10px] mt-1 font-medium">Dugaan konsentrasi hama tinggi.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#13231b] p-3 rounded-xl border border-amber-900/30 hover:border-amber-500/50 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0 ring-4 ring-amber-500/20"></div>
              <div>
                <p className="text-amber-50 text-xs font-bold leading-tight">Identifikasi penyimpangan data</p>
                <p className="text-amber-200/50 text-[10px] mt-1 font-medium">Kalibrasi ulang diperlukan untuk Sensor #84.</p>
              </div>
            </div>
          </div>
          <button className="mt-5 w-full py-2.5 bg-white/5 border border-white/10 text-emerald-100 rounded-xl text-xs font-bold hover:bg-white/10 hover:text-white transition-all">Lihat Semua Peringatan</button>
        </div>

        {/* Widget 3 */}
        <div className="bg-white p-7 rounded-3xl border border-outline-variant/20 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
          <h4 className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-5">Distribusi Diagnosis</h4>
          <div className="space-y-5">
            <div className="space-y-2 group/bar">
              <div className="flex justify-between text-xs text-slate-700 font-bold">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Vegetasi Sehat</span>
                <span>72%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full group-hover/bar:brightness-110 transition-all" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="space-y-2 group/bar">
              <div className="flex justify-between text-xs text-slate-700 font-bold">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Infestasi Ringan</span>
                <span>18%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full group-hover/bar:brightness-110 transition-all" style={{ width: '18%' }}></div>
              </div>
            </div>
            <div className="space-y-2 group/bar">
              <div className="flex justify-between text-xs text-slate-700 font-bold">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Wabah Parah</span>
                <span>10%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full group-hover/bar:brightness-110 transition-all shadow-[0_0_10px_rgba(244,63,94,0.4)]" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
