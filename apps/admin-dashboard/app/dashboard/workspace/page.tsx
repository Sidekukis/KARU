'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ── Mock Data ─────────────────────────────────────────────────────────────────
type WorkspaceItem = {
  id: string;
  name: string;
  category: 'makro' | 'mikro';
  status: 'Aktif' | 'Perencanaan' | 'Ditangguhkan';
  priority: 'Normal' | 'Tinggi' | 'Kritis';
  image: string;
  description: string;
  area: string;
  coords: string;
  startDate: string;
  nodeCount: number;
  members: { name: string; avatar: string }[];
  extra?: string;
  qrBatches: number;
};

const WORKSPACES: WorkspaceItem[] = [
  {
    id: 'ws-001',
    name: 'Arboretum Barat',
    category: 'makro',
    status: 'Aktif',
    priority: 'Normal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmz9drdnHMVt4JNaErayQFm25aUzNQMhpCj8j75SHNWmQl9mZSmm7ttlhd5xKQ_bw-kSgigMjaGLDirdKFlhFzn6F97dXEofhtq4JMKG8Yh_zh4dMaZBUwbYOWD4sGHIz9yyCfbc_GutK1s4qOjoDJ8oa7QpWkZ_iypV7sA4og_7I-xW5MgzsxmqXNzAlvoj19wiA7AjcXDutoXYt_iMFfpF4_xP3jYStfUaJl3s9nTjnCo4vC59V515XkEuiesStxjvpSzjIq83BD',
    description: 'Studi reboisasi jangka panjang yang berfokus pada keragaman kayu keras dan tingkat penyerapan karbon tanah.',
    area: '12.4 Ha',
    coords: '-3.4720, -62.1950',
    startDate: '12 Jan 2024',
    nodeCount: 342,
    qrBatches: 3,
    members: [
      { name: 'Aris T.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm-BujHaFnX3MTlS-E4ICukmGy60DmN2JROayh7wyCgPixnxy0RzzLqZsvlmH-XxDOvP5HXpMckXkVQMYuDtvfy4eP-TBBX9YQ_scrnT18lGHyflkZKQOC70zLeV9UL4lYu1-T_0iZPibUW2roj4DLIS8Ggzqkxx2Q8eotV1n5K36EeKOdnGNt8Q4Pe5WE-riqA0IEZ07DaJg05iTDoZN79dRTyNulBZ0NcFOj3UNIOfiWWeNfDYymUWZ4tzDc6Td6L0HPr9q-Dtxc' },
      { name: 'Sari W.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfWFJ6aeIHZfGF9YnaHdAlaOsC5K1gsWUXHqyy55KhL109GIexzEzoLbj5MNIspP1ireJzhxXpCNgew-xTsskgbNPkdd70RVDQ04SbGrubQH8Mmgk3V-rFdz_8XaCnu6it0k-XFoeugPdd5NQIk-JDy6gv6ZMkydbiHfJSGtSraTMlaz0hDcbJwKD9Vr4PGnsl7cF-v-JcpDU357JMRHtfEhaXSjg7PXX4ksytqBanYXgtANybCnpeK_4pKX9JTrxX6ROizM9CwDj' },
    ],
    extra: '+4',
  },
  {
    id: 'ws-002',
    name: 'Lab Iklim Mikro B',
    category: 'mikro',
    status: 'Aktif',
    priority: 'Tinggi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVdmMIZ1fq13_sBDE5TJrN-U1oTisbAEekV61zshnCvNa-2eSNk4mYSVI46nInuv4VE-S0gL6oICAcEH2OJF_TZIlVTit1r7wDmNrhblzSifRbxGgEXcrvEEJvR_Unc0F__8Km-eUmdZkmiGg_j99g69AZzFHGbli3z_3LEsppobVTzSB_ExYa3be8x4Sf7uPy7YxbX_3m1c2gVCvzSHmBFqHjC5C0KiVcLAI_2zEkSHLNznBZbiJtpAMXWNARt6I8oquYRkpfIF4u',
    description: 'Pengujian pertanian lingkungan terkontrol yang dioptimalkan spektrum UV untuk produksi kale vertikal.',
    area: '0.8 Ha',
    coords: '-3.4350, -62.1480',
    startDate: '5 Mar 2024',
    nodeCount: 86,
    qrBatches: 1,
    members: [
      { name: 'Budi P.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6pQ6bFeqKUDh52FEhE0C3Om635wlFfJmPe2HF_XqYMUrYaRQ_Ta8_fkA94sGyRKOpYI0Pmjihd-lbZUf5LQkEry7M_Zcw0n7eKqZ0YT8Zxuu7dM639cGbZrAU73WDo9Gp0CeDSUsfOYeXAXJ2mI5OneRwZdEaSJga1SBCu-vHOwEK5GSVJISHQpxNck1gWieveuVbpYgRyrkSyH2WN8f4zmEj-DOjOIKic-6KmLQ15w1RKNHYiREC37Wna9qmRWgdCTTrR0hEsoVa' },
      { name: 'Nisa K.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqs3S-2QlVD2sH0IFIFiXhkqhtPc2k7n13yr-BBqhN2OaXqsc3h9_TRqU8YNBRZKZgchijaPo2Xr4sFBdV_WiEZjIvP310O9rFu6xFAtO57EcDAa1uEenSrxzNX9hUfwUR1GP_0nDLs0ELceKee6sEToF8imu1vIFLZ2L1Wsu1o0QNxBp-JEeXinlQPdTSCxuyA1xEM3h6fxi0kWHf09D1iXl3CCdwDy2KIiqrhnZbnCByoI9krNJ5rbWmlUdKEy4lU96MD9qTN2XU' },
    ],
  },
  {
    id: 'ws-003',
    name: 'Lahan Basah Utara',
    category: 'makro',
    status: 'Aktif',
    priority: 'Normal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrbYJjm7pMBTKFUICpLTelJGPSF3bQ1CDKhogktHKBnt6oTs4zwAlePGlSFn9wK4JpLoqyUCaMnNkIe6ZO3ozjHh3Ljoz--Q-_Qy8YJpeMqE1vrKaIhPtKvOMOa8JsjfpY0feJcKctGaxjoJCOlx1vtxtmvdxxZtNP14ijWQs27f5zHvFDRkhn-5Wer2XGM2GPzlHJtbbyj80YNsDEZtu-cjdx8KH-0zza49hpbZ3Qsk6mSC5jh5qoB5XV4D015do85nwqqniFfrvl',
    description: 'Pemantauan emisi metana dan pelacakan keanekaragaman hayati di ekosistem lahan gambut yang sedang direstorasi.',
    area: '18.7 Ha',
    coords: '-3.4200, -62.2100',
    startDate: '18 Feb 2024',
    nodeCount: 156,
    qrBatches: 2,
    members: [
      { name: 'Rai S.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuUpLAr7k7HCC4blfE0KjqmPCxWfhr_pu7OlMjebPZjSFG0dbMU0kaBOzwFFWz6rZV30zpRKelaaYHB9PXb1HaivJf6fw82PX7KU410SJ5xlDUPRdRcuh01hpK0BFnsWd9uNnK2Ual46kSN76vGsOOd5EycYk0ltRL68LyK0gEjAhyEsOZrCLKjn8_LIq_5W8QTOrzmDl532EVLiZgIdOTjMYx66HmZarjVwZWbWiW9dmPQnCfae54WDqg8qDxolKEHgqXF_j-qjJ_' },
      { name: 'Maya D.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7yf4bjJyDWoSvrdKo17nuebxDgXEq1Bn9zv320RNFuyVnhpGqnj6pSMZafjsvf8k26QSxcqUNvGCkfnsCAM4uyBz3z4bAFfJEhhkgNxuK355Azk8Yd2japIRAFP6lbiMNuVRHkeR6zBSPYvcAvXfx6j6cWMEaPZ8yVyTZKViGda8mloEq2P1jgPEAXZxgE0QEoTfUHu1FR5GxPtXV6ROngWLY0HcflY89TqXIolVq52Jj3oThFbt877TEQMT65wdm84mGQfmJSheB' },
      { name: 'Hana A.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoY03_UhHlyYSpFMJit_545oHo3tmcMG-6N0kCdcOhaaopeDg8z306QSOpYGroUSerkLFek6TLQLnM6Q9plAQcIAvhXHmoWX3OcBeE6TdzQvXXOqysj0HuDUvX0eGM7iuc1Z81f7WlVGu0GUAxIJD4g-ePIYuK4i-rvwCUzAVVdsstljPZxzDrwKJaIwd48pV96dobDlqQdVe8epkAsdgdf-vT4hoWeDz_LtTwV_XIoatXrttlXGA6ExEDjIv7o-rUCio6-vz2hsWg' },
    ],
  },
  {
    id: 'ws-004',
    name: 'Kebun Anggur Pusat',
    category: 'makro',
    status: 'Perencanaan',
    priority: 'Kritis',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPh7bGZL41D_Tiyw745d23XXqkPQ_XTaH7wYXRv7chvTKk35PL1cx0e7CPcKNs5IomAV6Cqbwh_OEQTKCgv4SZ_2RDmBpnVOF41iDUYb0PCZuPBz_-W8ZWhcfnv8ago6tJgUnlVnRR52crKamx4qsWDrNCIjIU0aRjNMWCm8nYKFQsA7uxA3MEMjda7u46vA-1Uxap3jXKlJaRZvOU0Lk0jup3vu5CL9o0YLAgxHy1w_dSbvg3Lst1EPvgvQWVwZ41k3x3i0EKJClz',
    description: 'Irigasi cerdas dan manajemen hama menggunakan citra multispektral dan sensor kelembaban tanah langsung.',
    area: '22.1 Ha',
    coords: '-3.4600, -62.1700',
    startDate: '2 Apr 2024',
    nodeCount: 512,
    qrBatches: 5,
    members: [
      { name: 'Yoga P.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqSv3siu1FSO6G8HJliUw9ny9yUuM-a9uY9lxATHzSTDd6xSUabqX_RSjtmD6w9oa01iqteFTXW3pN4DautkR1uiqM0rJDXEFGzmXE5-M80eXuDKumLFWUP7C0QbLewqdpbJZw-fPIMle-XwM6TaueYKnm18ko7t6A6XrCSYF9FqwRGdqvn_YmrGWfP9ySbMqVlJftatUWOx6jT1OPrWc55Z2QcgUbIUzz3qMxIq-8PSaKZFcIlrnUUylv_ekb1FxJBhENbx_C_g-q' },
    ],
    extra: '+8',
  },
];

// ── Badge helpers ──────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: WorkspaceItem['status'] }) {
  const map = {
    Aktif: 'bg-emerald-100 text-emerald-700',
    Perencanaan: 'bg-blue-100 text-blue-700',
    Ditangguhkan: 'bg-amber-100 text-amber-700',
  };
  return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${map[status]}`}>{status}</span>;
}

function PriorityBadge({ priority }: { priority: WorkspaceItem['priority'] }) {
  const map = {
    Normal: 'bg-slate-100 text-slate-500',
    Tinggi: 'bg-amber-100 text-amber-600',
    Kritis: 'bg-rose-100 text-rose-600',
  };
  const icons = { Normal: 'radio_button_unchecked', Tinggi: 'priority_high', Kritis: 'emergency' };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 ${map[priority]}`}>
      <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icons[priority]}</span>
      {priority}
    </span>
  );
}

// ── Detail Drawer ──────────────────────────────────────────────────────────────
function DetailDrawer({ ws, onClose }: { ws: WorkspaceItem; onClose: () => void }) {
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const [editData, setEditData] = useState({
    name: ws.name,
    description: ws.description,
    status: ws.status,
    priority: ws.priority,
    startDate: ws.startDate,
    anggota: ws.members.map(m => m.name).join(', '),
  });

  const handleEditInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEditData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    // TODO: persist changes to backend
    setMode('view');
  };

  const handleCancel = () => {
    // Reset to original values
    setEditData({
      name: ws.name,
      description: ws.description,
      status: ws.status,
      priority: ws.priority,
      startDate: ws.startDate,
      anggota: ws.members.map(m => m.name).join(', '),
    });
    setMode('view');
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 transition-opacity" onClick={mode === 'view' ? onClose : undefined} />

      {/* Drawer panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-xl bg-white z-50 shadow-2xl flex flex-col overflow-hidden animate-[slideInRight_0.25s_ease-out]">

        {/* Cover image — shown in both modes */}
        <div className="relative h-44 flex-shrink-0 overflow-hidden">
          <img src={ws.image} alt={ws.name} className={`w-full h-full object-cover transition-all duration-300 ${mode === 'edit' ? 'brightness-50' : ''}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Mode indicator badge */}
          <div className="absolute top-4 left-5">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest backdrop-blur-md ${mode === 'edit' ? 'bg-amber-500/90 text-white' : 'bg-white/20 text-white border border-white/30'}`}>
              {mode === 'edit' ? '✏ Mode Edit' : (ws.category === 'makro' ? 'Lahan Makro' : 'Lahan Mikro')}
            </span>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={mode === 'view' ? onClose : handleCancel}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Bottom overlay */}
          <div className="absolute bottom-4 left-5 right-5">
            <h2 className="text-xl font-manrope font-extrabold text-white tracking-tight">
              {mode === 'edit' ? `Edit: ${ws.name}` : ws.name}
            </h2>
            {mode === 'view' && (
              <div className="flex items-center gap-2 mt-1.5">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${ws.category === 'makro' ? 'bg-emerald-500/80 text-white' : 'bg-violet-500/80 text-white'}`}>
                  {ws.category === 'makro' ? 'Lahan Makro' : 'Lahan Mikro'}
                </span>
                <StatusBadge status={ws.status} />
                <PriorityBadge priority={ws.priority} />
              </div>
            )}
          </div>
        </div>

        {/* ── VIEW MODE ── */}
        {mode === 'view' && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Luas Area</p>
                  <p className="text-lg font-manrope font-extrabold text-primary">{ws.area}</p>
                </div>
                <div className={`rounded-2xl p-4 text-center border ${ws.nodeCount > 0 ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-slate-100'}`}>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Node Aktif</p>
                  <p className={`text-lg font-manrope font-extrabold ${ws.nodeCount > 0 ? 'text-emerald-700' : 'text-slate-400'}`}>
                    {ws.nodeCount > 0 ? ws.nodeCount : '—'}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Batch QR</p>
                  <p className="text-lg font-manrope font-extrabold text-primary">{ws.qrBatches}</p>
                </div>
              </div>

              {/* Description */}
              <section>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Deskripsi</p>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{ws.description}</p>
              </section>

              {/* Location */}
              <section>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Informasi Lokasi</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 mb-1">Koordinat Tengah</p>
                    <p className="text-xs font-mono font-bold text-slate-700">{ws.coords}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 mb-1">Tanggal Mulai</p>
                    <p className="text-xs font-bold text-slate-700">{ws.startDate}</p>
                  </div>
                </div>
              </section>

              {/* Nodes */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Node Terdaftar</p>
                  <Link href="/dashboard/qr-node" onClick={onClose} className="text-xs font-bold text-emerald-700 hover:text-emerald-600 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    Kelola di QR Node
                  </Link>
                </div>
                {ws.nodeCount > 0 ? (
                  <div className="space-y-2">
                    {[
                      { id: `KARU-${ws.id.toUpperCase()}-001`, zone: 'Zona A', lastScan: '18 Apr 2026, 14:32', status: 'Online' },
                      { id: `KARU-${ws.id.toUpperCase()}-002`, zone: 'Zona A', lastScan: '18 Apr 2026, 14:28', status: 'Online' },
                      { id: `KARU-${ws.id.toUpperCase()}-003`, zone: 'Zona B', lastScan: '18 Apr 2026, 13:55', status: 'Offline' },
                    ].map((node) => (
                      <div key={node.id} className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-100">
                        <div>
                          <p className="text-xs font-mono font-bold text-slate-700">{node.id}</p>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5">{node.zone} · {node.lastScan}</p>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${node.status === 'Online' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
                          {node.status}
                        </span>
                      </div>
                    ))}
                    <p className="text-[10px] text-slate-400 text-center pt-1 font-medium">
                      Menampilkan 3 dari {ws.nodeCount} node · <Link href="/dashboard/qr-node" onClick={onClose} className="text-emerald-600 font-bold hover:underline">Lihat semua</Link>
                    </p>
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-5 flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-slate-300">qr_code_2</span>
                    <div>
                      <p className="text-sm font-bold text-slate-500">Belum ada node terdaftar</p>
                      <p className="text-xs text-slate-400 mt-0.5">Daftarkan node sensor melalui menu Aset Node QR.</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Team */}
              <section>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tim yang Ditugaskan</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {ws.members.map((m) => (
                    <div key={m.name} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">
                      <img src={m.avatar} alt={m.name} className="w-6 h-6 rounded-full object-cover" />
                      <span className="text-xs font-semibold text-slate-700">{m.name}</span>
                    </div>
                  ))}
                  {ws.extra && <div className="bg-slate-100 rounded-xl px-3 py-2 text-xs font-bold text-slate-500">{ws.extra} lainnya</div>}
                </div>
              </section>
            </div>

            {/* View mode footer */}
            <div className="flex-shrink-0 p-5 border-t border-slate-100 flex gap-3">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-rose-100 text-rose-500 hover:bg-rose-50 rounded-xl text-sm font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">delete</span>
                Hapus Zona
              </button>
              <button
                type="button"
                onClick={() => setMode('edit')}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">edit</span>
                Edit Ruang Kerja
              </button>
            </div>
          </>
        )}

        {/* ── EDIT MODE ── */}
        {mode === 'edit' && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-5">

              {/* Info banner */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>edit_note</span>
                <p className="text-xs font-semibold text-amber-800 leading-snug">
                  Anda sedang mengedit ruang kerja ini. Untuk mengubah <strong>batas zona di peta</strong>, gunakan fitur Edit Peta yang akan hadir segera.
                </p>
              </div>

              {/* Nama */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Ruang Kerja</label>
                <input
                  type="text" name="name" value={editData.name} onChange={handleEditInput}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all"
                />
              </div>

              {/* Deskripsi */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deskripsi</label>
                <textarea
                  name="description" value={editData.description} onChange={handleEditInput}
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Status & Priority */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</label>
                  <div className="relative">
                    <select name="status" value={editData.status} onChange={handleEditInput}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none"
                    >
                      <option value="Aktif">Aktif</option>
                      <option value="Perencanaan">Perencanaan</option>
                      <option value="Ditangguhkan">Ditangguhkan</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Prioritas</label>
                  <div className="relative">
                    <select name="priority" value={editData.priority} onChange={handleEditInput}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none"
                    >
                      <option value="Normal">Normal</option>
                      <option value="Tinggi">Tinggi</option>
                      <option value="Kritis">Kritis</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Tanggal Mulai */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tanggal Mulai</label>
                <input
                  type="text" name="startDate" value={editData.startDate} onChange={handleEditInput}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all"
                />
              </div>

              {/* Tim */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Anggota Tim</label>
                <input
                  type="text" name="anggota" value={editData.anggota} onChange={handleEditInput}
                  placeholder="Masukkan nama anggota, pisahkan dengan koma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all"
                />
              </div>

              {/* Batas peta (read-only info) */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
                <div className="w-9 h-9 bg-white rounded-lg border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-slate-400">map</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-600">Batas Zona di Peta</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5 font-mono">{ws.coords} · {ws.area}</p>
                </div>
                <span className="text-[9px] font-bold bg-slate-200 text-slate-500 px-2 py-1 rounded-md uppercase tracking-wider whitespace-nowrap">Segera Hadir</span>
              </div>

            </div>

            {/* Edit mode footer */}
            <div className="flex-shrink-0 p-5 border-t border-slate-100 flex gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl text-sm font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">undo</span>
                Batal
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                Simpan Perubahan
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function WorkspacePage() {
  const [selectedWs, setSelectedWs] = useState<WorkspaceItem | null>(null);

  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Manajemen Ruang Kerja</h2>
          <p className="text-slate-500 mt-2 max-w-2xl font-body">Kelola proyek ekologi presisi Anda di seluruh arboretum global dan ruang iklim mikro.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="bg-surface-container-highest border-none rounded-xl pl-9 pr-4 py-2.5 text-sm w-64 focus:ring-2 focus:ring-surface-tint focus:ring-offset-0 placeholder:text-slate-400 transition-all" placeholder="Cari ruang kerja..." type="text" />
          </div>
          <Link href="/dashboard/workspace/buat" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all text-sm">
            <span className="material-symbols-outlined">add</span>
            Buat Ruang Kerja
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Proyek Aktif', value: '12', sub: <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">arrow_upward</span>14%</span> },
          { label: 'Node Sensor', value: '1,284', sub: <span className="text-xs font-medium text-slate-400 bg-surface px-2 py-0.5 rounded-md">Total Aktif</span> },
          { label: 'Cakupan Lahan', value: '45.2', sub: <span className="text-xs font-medium text-slate-400 bg-surface px-2 py-0.5 rounded-md">Hektar</span> },
          { label: 'Kesehatan Sistem', value: '98.4%', sub: <span className="material-symbols-outlined text-emerald-500 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> },
        ].map((s) => (
          <div key={s.label} className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{s.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-manrope font-extrabold text-primary">{s.value}</span>
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Workspace Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {WORKSPACES.map((ws) => (
          <div key={ws.id} className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-outline-variant/10 flex flex-col">
            {/* Card Image */}
            <div className="relative h-48 overflow-hidden">
              <img alt={ws.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={ws.image} />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest shadow-sm ${ws.category === 'makro' ? 'bg-primary/90 text-white' : 'bg-secondary text-white'}`}>
                  {ws.category === 'makro' ? 'Lahan Makro' : 'Lahan Mikro'}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
                <span className="text-xs font-bold text-primary">{ws.nodeCount.toLocaleString()} Node</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-manrope font-extrabold text-primary">{ws.name}</h3>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <StatusBadge status={ws.status} />
                <PriorityBadge priority={ws.priority} />
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-6 font-medium leading-relaxed">{ws.description}</p>

              <div className="mt-auto pt-5 border-t border-surface-container flex items-center justify-between">
                <div className="flex -space-x-2">
                  {ws.members.slice(0, 3).map((m) => (
                    <img key={m.name} className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt={m.name} src={m.avatar} />
                  ))}
                  {ws.extra && (
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center text-[10px] font-bold ring-2 ring-white">{ws.extra}</div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedWs(ws)}
                  className="text-sm font-bold text-primary hover:text-emerald-600 transition-colors flex items-center gap-1 group/btn px-2 py-1 rounded-lg hover:bg-emerald-50"
                >
                  Lihat Detail
                  <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <Link href="/dashboard/workspace/buat" className="border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all cursor-pointer min-h-[400px] group/new h-full">
          <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center mb-5 group-hover/new:bg-emerald-100 group-hover/new:scale-110 transition-all duration-300">
            <span className="material-symbols-outlined text-3xl text-slate-400 group-hover/new:text-emerald-600 transition-colors">add_circle</span>
          </div>
          <h3 className="text-xl font-manrope font-bold text-slate-500 group-hover/new:text-emerald-900 transition-colors">Tambah Proyek Baru</h3>
          <p className="text-sm text-slate-400 text-center mt-2 max-w-[220px] font-medium leading-relaxed">Tentukan batas lahan dan terapkan klaster sensor pertama Anda.</p>
        </Link>
      </div>

      {/* FAB */}
      <button type="button" className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-800 text-white rounded-full shadow-xl shadow-emerald-900/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-30">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
      </button>

      {/* Detail Drawer */}
      {selectedWs && <DetailDrawer ws={selectedWs} onClose={() => setSelectedWs(null)} />}
    </div>
  );
}
