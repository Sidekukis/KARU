'use client';

import React, { useState, useMemo } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────
type StatusType = 'valid' | 'invalid';

type ScanReport = {
  id: string;
  waktu: string;          // datetime string
  analis: string;         // mobile user name
  sampelGambar: string;   // image URL
  koordinat: string;      // lat, lng text
  status: StatusType;
  diagnosisAI: string;    // short / concise
  diagnosisDetail: string;// full AI explanation
  alasanInvalid?: string; // only when invalid
};

// ── Mock Data ──────────────────────────────────────────────────────────────────
const MOCK_REPORTS: ScanReport[] = [
  {
    id: 'SCAN-001',
    waktu: '2026-04-26 14:23:45',
    analis: 'Ahmad Yani',
    sampelGambar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpdCGRTt_czVoK4QB5oJaUltyWXvisjHA4_y0XmPNFRjI3IPZ81ibjes7OkWdJn04oFviWQm3yPOZg948lqnLRuDbLYKmG8gbs0AZoEi4qDhaBdDY19_jOcz4m_iLs4vWegSyp6XcPmEa0_7tZwRwgNZtTIfrOTsLbMCxaLSw_mjBViuevCNY_CaNdVyvxCDUkVHAT479D4inrC7dN5Pt_5-YxJzJUvD1_yvVSRtUJV12g1WVyibVdPR4QVKp1hyrkpmISGl8vn596',
    koordinat: '-6.9175° S, 107.6191° E',
    status: 'valid',
    diagnosisAI: 'Negatif Patogen',
    diagnosisDetail:
      'Model AI tidak mendeteksi adanya tanda-tanda infestasi hama maupun penyakit pada sampel daun yang dikirimkan. Kondisi warna, tekstur, dan pola vena daun berada dalam rentang normal. Skor kepercayaan model: 97,3%.',
  },
  {
    id: 'SCAN-002',
    waktu: '2026-04-26 11:05:12',
    analis: 'Siti Rahayu',
    sampelGambar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbcqYJpRlpbpmNvtjWtkInq1oFHwVTlHDo76-3SjOumxLu-QWGdEUHOvNyrO9Ixxyxsqls0bzTJMyI62LFC832YZGiuDmHDgx5wIeWnJwteeImd8KZzY_MmpRO8e0j3PQGNENO02cO7yPB7rmpsyqLF7GYS3oFKGop0xbrEIHlbPe3puvznVEENz4pdl8IZCHGYsAr596ylVRgdeWh9GKAQSnBQZKQitH_qWGylScGuG19pyObORSq9JALBvFa83RyulXDnCc-VY3y',
    koordinat: '-6.9210° S, 107.6235° E',
    status: 'invalid',
    diagnosisAI: 'Koloni Kutu Daun (92%)',
    diagnosisDetail:
      'Model AI mendeteksi koloni kutu daun (Aphididae) pada permukaan bawah daun dengan probabilitas 92%. Ditemukan pola bintik hitam dan deformasi daun yang khas. Disarankan penanganan segera dengan insektisida berbahan aktif imidakloprid atau pymetrozine.',
    alasanInvalid:
      'Gambar dikirim di luar zona geofencing yang telah ditentukan. Koordinat tidak sesuai dengan area pemantauan yang terdaftar.',
  },
  {
    id: 'SCAN-003',
    waktu: '2026-04-25 16:58:30',
    analis: 'Joko Widodo',
    sampelGambar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyWbx9BO08ncVVRbqVpJzuLj1wJhdwUSfAW628zWFM8Vw2T1SpQK6yCqDXVFA8v0LbG6TpFL4H_73G_H4aemb59ixnal4OekGH4UfxkBoXAvAp-3yixMAgVuDOoPVJIK2keOB03ge3DBzMuVJ7KqtaiGUDOGy_dsOvfZviKDSFrygLXsI8m5NmTW7eAaMzSLNNTln8ZCLLJvnx6foiDnjFT29tNl9K-H3ZVtFwnQgrdeL4uXAVPMEbiMeRyVUi1lhUwuDhd6iBddW8',
    koordinat: '-6.9158° S, 107.6180° E',
    status: 'valid',
    diagnosisAI: 'Kesehatan Optimal',
    diagnosisDetail:
      'Kondisi tanaman sangat baik. Tidak ada indikasi serangan hama, jamur, atau virus. Klorofil tampak normal, tidak ada nekrosis atau klorosis. Skor kepercayaan model: 98,8%.',
  },
  {
    id: 'SCAN-004',
    waktu: '2026-04-25 09:30:00',
    analis: 'Ahmad Yani',
    sampelGambar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpdCGRTt_czVoK4QB5oJaUltyWXvisjHA4_y0XmPNFRjI3IPZ81ibjes7OkWdJn04oFviWQm3yPOZg948lqnLRuDbLYKmG8gbs0AZoEi4qDhaBdDY19_jOcz4m_iLs4vWegSyp6XcPmEa0_7tZwRwgNZtTIfrOTsLbMCxaLSw_mjBViuevCNY_CaNdVyvxCDUkVHAT479D4inrC7dN5Pt_5-YxJzJUvD1_yvVSRtUJV12g1WVyibVdPR4QVKp1hyrkpmISGl8vn596',
    koordinat: '-6.9175° S, 107.6191° E',
    status: 'invalid',
    diagnosisAI: 'Jamur Embun Tepung (78%)',
    diagnosisDetail:
      'Terdeteksi infeksi jamur Powdery Mildew (Erysiphaceae) pada area daun bagian atas. Serbuk putih halus terlihat menyebar pada 40–60% permukaan daun. Probabilitas deteksi: 78%. Rekomendasi: aplikasi fungisida berbahan aktif sulfur atau hexaconazole.',
    alasanInvalid:
      'Kualitas gambar terlalu rendah (blur) sehingga diagnosis AI tidak dapat dilakukan secara akurat. Pengguna diminta mengulang pengambilan gambar dengan pencahayaan yang memadai.',
  },
  {
    id: 'SCAN-005',
    waktu: '2026-04-24 19:47:22',
    analis: 'Dewi Lestari',
    sampelGambar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbcqYJpRlpbpmNvtjWtkInq1oFHwVTlHDo76-3SjOumxLu-QWGdEUHOvNyrO9Ixxyxsqls0bzTJMyI62LFC832YZGiuDmHDgx5wIeWnJwteeImd8KZzY_MmpRO8e0j3PQGNENO02cO7yPB7rmpsyqLF7GYS3oFKGop0xbrEIHlbPe3puvznVEENz4pdl8IZCHGYsAr596ylVRgdeWh9GKAQSnBQZKQitH_qWGylScGuG19pyObORSq9JALBvFa83RyulXDnCc-VY3y',
    koordinat: '-6.9200° S, 107.6210° E',
    status: 'valid',
    diagnosisAI: 'Bercak Daun Ringan (61%)',
    diagnosisDetail:
      'Teridentifikasi tanda awal bercak daun (Cercospora sp.) pada beberapa helai daun. Tingkat infeksi masih ringan dan belum mempengaruhi produktivitas secara signifikan. Probabilitas: 61%. Pantau perkembangan selama 3-5 hari ke depan.',
  },
  {
    id: 'SCAN-006',
    waktu: '2026-04-24 08:12:10',
    analis: 'Rizky Firmansyah',
    sampelGambar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyWbx9BO08ncVVRbqVpJzuLj1wJhdwUSfAW628zWFM8Vw2T1SpQK6yCqDXVFA8v0LbG6TpFL4H_73G_H4aemb59ixnal4OekGH4UfxkBoXAvAp-3yixMAgVuDOoPVJIK2keOB03ge3DBzMuVJ7KqtaiGUDOGy_dsOvfZviKDSFrygLXsI8m5NmTW7eAaMzSLNNTln8ZCLLJvnx6foiDnjFT29tNl9K-H3ZVtFwnQgrdeL4uXAVPMEbiMeRyVUi1lhUwuDhd6iBddW8',
    koordinat: '-6.9140° S, 107.6175° E',
    status: 'valid',
    diagnosisAI: 'Negatif Patogen',
    diagnosisDetail:
      'Tidak ditemukan indikasi penyakit atau hama. Kondisi tanaman sehat dan optimal. Skor kepercayaan: 95,1%.',
  },
];

// ── Image Preview Modal ────────────────────────────────────────────────────────
function ImagePreviewModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div
          className="relative max-w-2xl w-full"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'scaleIn 0.2s ease-out' }}
        >
          <img src={src} alt={alt} className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors border border-slate-200"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
      </div>
      <style>{`@keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
    </>
  );
}

// ── Detail Drawer ─────────────────────────────────────────────────────────────
function DetailDrawer({ report, onClose }: { report: ScanReport; onClose: () => void }) {
  const isValid = report.status === 'valid';
  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40" onClick={onClose} />
      <div
        className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-50 shadow-2xl flex flex-col overflow-hidden"
        style={{ animation: 'slideInRight 0.25s ease-out' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-600">
              <span className="material-symbols-outlined text-white text-[18px]">biotech</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Detail Laporan AI</p>
              <h2 className="text-sm font-manrope font-extrabold text-primary leading-tight">{report.id}</h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Gambar */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-video bg-slate-100">
            <img src={report.sampelGambar} alt="Sampel" className="w-full h-full object-cover" />
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: 'schedule', label: 'Waktu Kirim', value: report.waktu },
              { icon: 'person', label: 'Analis', value: report.analis },
              { icon: 'location_on', label: 'Koordinat', value: report.koordinat },
              {
                icon: isValid ? 'check_circle' : 'cancel',
                label: 'Status',
                value: isValid ? 'Valid' : 'Invalid',
              },
            ].map((m) => (
              <div key={m.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-[12px]">{m.icon}</span>
                  {m.label}
                </p>
                <p
                  className={`text-sm font-bold leading-tight ${
                    m.label === 'Status'
                      ? isValid
                        ? 'text-emerald-700'
                        : 'text-rose-600'
                      : 'text-slate-700'
                  }`}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Diagnosis AI */}
          <div className={`rounded-xl p-4 border ${isValid ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'}`}>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">smart_toy</span>
              Hasil Diagnosis AI
            </p>
            <p className={`text-sm font-bold mb-2 ${isValid ? 'text-emerald-800' : 'text-amber-800'}`}>
              {report.diagnosisAI}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">{report.diagnosisDetail}</p>
          </div>

          {/* Alasan Invalid */}
          {!isValid && report.alasanInvalid && (
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex items-start gap-3">
              <span
                className="material-symbols-outlined text-rose-500 text-[20px] flex-shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                warning
              </span>
              <div>
                <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-1">Alasan Status Invalid</p>
                <p className="text-xs text-rose-700 font-semibold leading-relaxed">{report.alasanInvalid}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-5 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
            Tutup
          </button>
        </div>
      </div>
      <style>{`@keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>
    </>
  );
}

// ── Delete Confirm Dialog ─────────────────────────────────────────────────────
function DeleteDialog({ report, onConfirm, onCancel }: { report: ScanReport; onConfirm: () => void; onCancel: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[3px] z-50" onClick={onCancel} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm" style={{ animation: 'scaleIn 0.18s ease-out' }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-red-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>delete_forever</span>
            </div>
            <div>
              <h3 className="font-manrope font-extrabold text-primary text-base">Hapus Laporan?</h3>
              <p className="text-xs text-slate-500 mt-0.5">Tindakan ini tidak bisa dibatalkan.</p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 mb-5 space-y-0.5">
            <p className="text-sm font-bold text-slate-700">{report.id}</p>
            <p className="text-xs text-slate-400">Dikirim oleh <span className="font-semibold text-slate-600">{report.analis}</span> pada {report.waktu}</p>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={onCancel} className="flex-1 py-2.5 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">Batal</button>
            <button type="button" onClick={onConfirm} className="flex-1 py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-colors shadow-md">Ya, Hapus</button>
          </div>
        </div>
      </div>
      <style>{`@keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
    </>
  );
}

// ── Helper: initials avatar ────────────────────────────────────────────────────
function AnalystBadge({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase();
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700 border border-emerald-200 shadow-sm flex-shrink-0">
        {initials}
      </div>
      <span className="text-sm font-bold text-primary">{name}</span>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function ReportsAIPage() {
  const [reports, setReports] = useState<ScanReport[]>(MOCK_REPORTS);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'semua' | StatusType>('semua');
  const [filterPeriod, setFilterPeriod] = useState('7d');
  const [deleteTarget, setDeleteTarget] = useState<ScanReport | null>(null);
  const [detailTarget, setDetailTarget] = useState<ScanReport | null>(null);
  const [previewImg, setPreviewImg] = useState<{ src: string; alt: string } | null>(null);

  const filtered = useMemo(() => {
    return reports.filter((r) => {
      const matchSearch =
        r.analis.toLowerCase().includes(search.toLowerCase()) ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.diagnosisAI.toLowerCase().includes(search.toLowerCase()) ||
        r.koordinat.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === 'semua' || r.status === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [reports, search, filterStatus]);

  const totalValid = reports.filter((r) => r.status === 'valid').length;
  const totalInvalid = reports.filter((r) => r.status === 'invalid').length;

  const handleDelete = () => {
    if (!deleteTarget) return;
    setReports((prev) => prev.filter((r) => r.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full pb-20">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-outline-variant/10 pb-6">
        <div>
          <h1 className="text-3xl font-manrope font-extrabold text-emerald-950 tracking-tight">Laporan &amp; Wawasan AI</h1>
          <p className="text-slate-500 mt-1 max-w-xl">
            Data laporan dikirim langsung dari pengguna mobile KARU beserta hasil diagnosis AI.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors whitespace-nowrap">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Ekspor Laporan
        </button>
      </div>

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Total Laporan',
            value: reports.length,
            icon: 'description',
            bg: 'bg-slate-50',
            color: 'text-slate-700',
            border: 'border-slate-100',
            sub: 'Semua laporan masuk',
          },
          {
            label: 'Valid',
            value: totalValid,
            icon: 'check_circle',
            bg: 'bg-emerald-50',
            color: 'text-emerald-700',
            border: 'border-emerald-100',
            sub: 'Terverifikasi sistem',
          },
          {
            label: 'Invalid',
            value: totalInvalid,
            icon: 'cancel',
            bg: 'bg-rose-50',
            color: 'text-rose-600',
            border: 'border-rose-100',
            sub: 'Perlu perhatian',
          },
          {
            label: 'Rata-rata / Hari',
            value: Math.round(reports.length / 7),
            icon: 'analytics',
            bg: 'bg-amber-50',
            color: 'text-amber-700',
            border: 'border-amber-100',
            sub: '7 hari terakhir',
          },
        ].map((s) => (
          <div
            key={s.label}
            className={`bg-white rounded-2xl p-5 border ${s.border} shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${s.bg}`}>
              <span className={`material-symbols-outlined text-[24px] ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {s.icon}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
              <p className={`text-2xl font-manrope font-extrabold ${s.color}`}>{s.value}</p>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Filter Bar ── */}
      <div className="bg-white rounded-2xl p-4 flex flex-wrap items-center gap-3 shadow-sm border border-slate-100">
        {/* Search */}
        <div className="relative flex-1 min-w-[220px]">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari analis, ID laporan, diagnosis..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
            {([
              { key: 'semua', label: 'Semua' },
              { key: 'valid', label: 'Valid' },
              { key: 'invalid', label: 'Invalid' },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilterStatus(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                  filterStatus === tab.key
                    ? 'bg-white text-slate-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Periode */}
          <div className="relative">
            <select
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
              className="bg-slate-100 border-0 rounded-xl py-2 pl-3 pr-7 text-[11px] font-bold text-slate-600 focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
            >
              <option value="7d">7 Hari Terakhir</option>
              <option value="30d">30 Hari Terakhir</option>
              <option value="all">Semua Waktu</option>
            </select>
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[14px]">expand_more</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 font-medium ml-auto">{filtered.length} laporan ditemukan</p>
      </div>

      {/* ── Table ── */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest w-[170px]">Waktu</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[160px]">Analis</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest w-[110px]">Sampel Gambar</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[160px]">Koordinat</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest w-[110px]">Status</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest min-w-[200px]">Diagnosis AI</th>
                <th className="px-6 py-4 text-[10px] font-manrope font-bold text-slate-400 uppercase tracking-widest text-right w-[110px]">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-20 text-center">
                    <span className="material-symbols-outlined text-5xl text-slate-200 mb-3 block">manage_search</span>
                    <p className="text-slate-400 font-bold text-sm">Tidak ada laporan yang cocok.</p>
                    <button
                      type="button"
                      onClick={() => { setSearch(''); setFilterStatus('semua'); }}
                      className="mt-2 text-xs text-emerald-600 font-bold hover:underline"
                    >
                      Reset filter
                    </button>
                  </td>
                </tr>
              ) : (
                filtered.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50/70 transition-colors group">

                    {/* Waktu */}
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-slate-700 font-mono">
                        {report.waktu.split(' ')[0]}
                      </p>
                      <p className="text-[11px] font-bold text-slate-400 font-mono mt-0.5">
                        {report.waktu.split(' ')[1]}
                      </p>
                    </td>

                    {/* Analis */}
                    <td className="px-6 py-4">
                      <AnalystBadge name={report.analis} />
                    </td>

                    {/* Sampel Gambar */}
                    <td className="px-6 py-4">
                      <div
                        className="w-16 h-10 rounded-lg overflow-hidden bg-slate-100 relative cursor-pointer ring-1 ring-slate-200 hover:ring-emerald-300 transition-all"
                        onClick={() => setPreviewImg({ src: report.sampelGambar, alt: `Sampel ${report.id}` })}
                      >
                        <img alt={`Sampel ${report.id}`} className="w-full h-full object-cover" src={report.sampelGambar} />
                        <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[1px]">
                          <span className="material-symbols-outlined text-white text-[16px]">zoom_in</span>
                        </div>
                      </div>
                    </td>

                    {/* Koordinat */}
                    <td className="px-6 py-4">
                      <span className="text-[11px] font-bold font-mono bg-slate-100 px-2.5 py-1.5 rounded-md text-slate-600 border border-slate-200 whitespace-nowrap">
                        {report.koordinat}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      {report.status === 'valid' ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Valid
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-100 gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          Invalid
                        </span>
                      )}
                    </td>

                    {/* Diagnosis AI */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-[17px] flex-shrink-0 ${report.status === 'valid' ? 'text-emerald-500' : 'text-amber-500'}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {report.status === 'valid' ? 'check_circle' : 'warning'}
                        </span>
                        <span className="text-sm font-bold text-slate-800 leading-tight">{report.diagnosisAI}</span>
                      </div>
                    </td>

                    {/* Aksi */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* Lihat Detail */}
                        <button
                          type="button"
                          onClick={() => setDetailTarget(report)}
                          className="p-2 text-slate-400 hover:text-primary hover:bg-emerald-50 rounded-lg transition-all border border-transparent hover:border-emerald-100"
                          title="Lihat Detail"
                        >
                          <span className="material-symbols-outlined text-[17px]">info</span>
                        </button>

                        {/* Hapus */}
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(report)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all border border-transparent hover:border-rose-100"
                          title="Hapus Laporan"
                        >
                          <span className="material-symbols-outlined text-[17px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-medium">
            Menampilkan <span className="font-bold text-slate-700">{filtered.length}</span> dari{' '}
            <span className="font-bold text-slate-700">{reports.length}</span> laporan
          </p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-950 text-white text-xs font-bold shadow-md shadow-emerald-950/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Modals / Drawers / Dialogs ── */}
      {previewImg && (
        <ImagePreviewModal src={previewImg.src} alt={previewImg.alt} onClose={() => setPreviewImg(null)} />
      )}
      {detailTarget && (
        <DetailDrawer report={detailTarget} onClose={() => setDetailTarget(null)} />
      )}
      {deleteTarget && (
        <DeleteDialog report={deleteTarget} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
      )}
    </div>
  );
}
