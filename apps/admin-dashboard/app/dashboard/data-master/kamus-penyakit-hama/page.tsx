'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ── Types ──────────────────────────────────────────────────────────────────────
type JenisEntri = 'Penyakit' | 'Hama';
type KategoriPenyakit =
  | 'Jamur / Fungi'
  | 'Bakteri'
  | 'Virus'
  | 'Nematoda'
  | 'Serangga'
  | 'Tungau'
  | 'Hama Penggerek'
  | 'Hama Pengisap'
  | 'Hama Pengunyah';
type TingkatRisiko = 'Tinggi' | 'Sedang' | 'Rendah';

type EntriPenyakitHama = {
  id: string;
  nama: string;
  namaIlmiah: string;
  jenis: JenisEntri;
  kategori: KategoriPenyakit;
  tingkatRisiko: TingkatRisiko;
  tanamanInang: string[];     // tanaman yang rentan terserang
  gejala: string;             // gejala serangan
  penanganan: string;         // cara pengendalian singkat
  foto: string;
  ditambahkan: string;
};

// ── Mock Data ──────────────────────────────────────────────────────────────────
const INIT_DATA: EntriPenyakitHama[] = [
  {
    id: 'PH-001', nama: 'Blas', namaIlmiah: 'Pyricularia oryzae',
    jenis: 'Penyakit', kategori: 'Jamur / Fungi', tingkatRisiko: 'Tinggi',
    tanamanInang: ['Padi'],
    gejala: 'Bercak berbentuk belah ketupat pada daun berwarna cokelat keabu-abuan dengan tepi kuning. Pada serangan berat dapat menyebabkan kematian rumpun.',
    penanganan: 'Gunakan varietas tahan, aplikasi fungisida berbahan aktif trisiklazol atau edifenphos. Atur jarak tanam dan kurangi penggunaan pupuk N berlebihan.',
    foto: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=200&h=200&fit=crop',
    ditambahkan: '10 Jan 2025',
  },
  {
    id: 'PH-002', nama: 'Wereng Cokelat', namaIlmiah: 'Nilaparvata lugens',
    jenis: 'Hama', kategori: 'Hama Pengisap', tingkatRisiko: 'Tinggi',
    tanamanInang: ['Padi'],
    gejala: 'Tanaman menguning dan mengering dari bawah (hopperburn). Koloni wereng terlihat di pangkal batang. Dapat menularkan virus kerdil rumput.',
    penanganan: 'Tanam varietas tahan wereng, pertahankan populasi musuh alami (laba-laba, kepinding), gunakan insektisida imidakloprid hanya saat puncak serangan.',
    foto: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=200&h=200&fit=crop',
    ditambahkan: '12 Jan 2025',
  },
  {
    id: 'PH-003', nama: 'Layu Fusarium', namaIlmiah: 'Fusarium oxysporum',
    jenis: 'Penyakit', kategori: 'Jamur / Fungi', tingkatRisiko: 'Tinggi',
    tanamanInang: ['Tomat', 'Cabai Merah', 'Bawang Merah', 'Pisang Kepok'],
    gejala: 'Daun layu dimulai dari bagian bawah, menguning secara asimetris. Pembuluh batang berwarna cokelat jika dibelah. Tanaman akhirnya mati.',
    penanganan: 'Pilih benih bersertifikat, rotasi tanaman, aplikasi Trichoderma sp. sebagai agen hayati, hindari luka pada akar saat pengolahan tanah.',
    foto: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200&h=200&fit=crop',
    ditambahkan: '15 Jan 2025',
  },
  {
    id: 'PH-004', nama: 'Antraknosa', namaIlmiah: 'Colletotrichum capsici',
    jenis: 'Penyakit', kategori: 'Jamur / Fungi', tingkatRisiko: 'Tinggi',
    tanamanInang: ['Cabai Merah', 'Karet'],
    gejala: 'Bercak cokelat kehitaman pada buah dengan pusat berwarna krem, terlihat seperti luka cekung. Buah membusuk dari ujung dan gugur prematur.',
    penanganan: 'Panen buah sebelum terlalu matang, semprot fungisida mankozeb atau klorotalonil, buang dan musnahkan buah terinfeksi dari kebun.',
    foto: 'https://images.unsplash.com/photo-1559181567-c3190ca9d1da?w=200&h=200&fit=crop',
    ditambahkan: '18 Jan 2025',
  },
  {
    id: 'PH-005', nama: 'Thrips', namaIlmiah: 'Thrips palmi',
    jenis: 'Hama', kategori: 'Hama Pengisap', tingkatRisiko: 'Sedang',
    tanamanInang: ['Cabai Merah', 'Bawang Merah', 'Tomat'],
    gejala: 'Daun keriting ke atas, permukaan bawah berbercak perak keperakan. Bunga rontok lebih awal. Serangan berat menyebabkan pertumbuhan kerdil.',
    penanganan: 'Pasang perangkap lengket biru/kuning, semprotkan spinosad atau abamektin pada pagi hari, jaga kelembapan kebun untuk mengurangi populasi.',
    foto: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&h=200&fit=crop',
    ditambahkan: '20 Jan 2025',
  },
  {
    id: 'PH-006', nama: 'Ulat Grayak', namaIlmiah: 'Spodoptera frugiperda',
    jenis: 'Hama', kategori: 'Hama Pengunyah', tingkatRisiko: 'Tinggi',
    tanamanInang: ['Jagung Manis', 'Padi'],
    gejala: 'Daun berlubang tidak beraturan, kotoran larva berupa serbuk kasar di dalam corong daun. Serangan pada tongkol jagung muda menyebabkan gagal panen.',
    penanganan: 'Gunakan varietas toleran, aplikasi Bt (Bacillus thuringiensis) secara hayati, insektisida emamektin benzoat pada serangan berat, pemantauan rutin.',
    foto: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=200&h=200&fit=crop',
    ditambahkan: '22 Jan 2025',
  },
  {
    id: 'PH-007', nama: 'Virus Kuning Tomat', namaIlmiah: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
    jenis: 'Penyakit', kategori: 'Virus', tingkatRisiko: 'Tinggi',
    tanamanInang: ['Tomat', 'Cabai Merah'],
    gejala: 'Daun muda menggulung ke atas dan menguning, pertumbuhan terhambat parah. Tidak ada obat setelah tanaman terinfeksi. Ditularkan oleh kutu kebul.',
    penanganan: 'Kendalikan kutu kebul (vektor) dengan insektisida sistemik, cabut dan musnahkan tanaman terinfeksi, gunakan mulsa plastik perak untuk mengusir kutu kebul.',
    foto: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop',
    ditambahkan: '25 Jan 2025',
  },
  {
    id: 'PH-008', nama: 'Ganoderma (Busuk Pangkal Batang)', namaIlmiah: 'Ganoderma boninense',
    jenis: 'Penyakit', kategori: 'Jamur / Fungi', tingkatRisiko: 'Tinggi',
    tanamanInang: ['Kelapa Sawit'],
    gejala: 'Pelepah bawah layu dan patah, tumbuh tubuh buah jamur (bracket fungi) berwarna merah-cokelat di pangkal batang. Dalam tanah terjadi pembusukan basah.',
    penanganan: 'Tidak ada obat efektif setelah infeksi masif. Pencegahan: injeksi heksakonazol sejak dini, sanitasi sisa panen, rotasi dengan tanaman bukan inang.',
    foto: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=200&fit=crop',
    ditambahkan: '28 Jan 2025',
  },
  {
    id: 'PH-009', nama: 'Bercak Ungu Bawang', namaIlmiah: 'Alternaria porri',
    jenis: 'Penyakit', kategori: 'Jamur / Fungi', tingkatRisiko: 'Sedang',
    tanamanInang: ['Bawang Merah'],
    gejala: 'Bercak kecil berwarna putih pucat kemudian berkembang menjadi ungu kecokelatan dengan lingkaran konsentris. Daun layu dan mengering pada serangan berat.',
    penanganan: 'Hindari penanaman terlalu rapat, semprot fungisida iprodion atau mankozeb setiap 7 hari sejak gejala muncul, kurangi irigasi berlebih.',
    foto: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=200&h=200&fit=crop',
    ditambahkan: '30 Jan 2025',
  },
  {
    id: 'PH-010', nama: 'Kumbang Tanduk Kelapa Sawit', namaIlmiah: 'Oryctes rhinoceros',
    jenis: 'Hama', kategori: 'Hama Penggerek', tingkatRisiko: 'Sedang',
    tanamanInang: ['Kelapa Sawit'],
    gejala: 'Lubang berbentuk segitiga pada daun muda yang belum membuka (tombak), menggerek ke arah titik tumbuh. Serangan berulang melemahkan tanaman dewasa.',
    penanganan: 'Pemasangan perangkap feromon, aplikasi jamur Metarhizium anisopliae secara hayati, musnahkan tunggul bekas tebangan sebagai sumber sarang larva.',
    foto: 'https://images.unsplash.com/photo-1534361960057-19f4434dce8b?w=200&h=200&fit=crop',
    ditambahkan: '3 Feb 2025',
  },
];

const JENIS_OPTS: JenisEntri[] = ['Penyakit', 'Hama'];
const KATEGORI_OPTS: KategoriPenyakit[] = [
  'Jamur / Fungi', 'Bakteri', 'Virus', 'Nematoda',
  'Serangga', 'Tungau', 'Hama Penggerek', 'Hama Pengisap', 'Hama Pengunyah',
];
const RISIKO_OPTS: TingkatRisiko[] = ['Tinggi', 'Sedang', 'Rendah'];

// ── Badge helpers ──────────────────────────────────────────────────────────────
function JenisBadge({ j }: { j: JenisEntri }) {
  return j === 'Penyakit' ? (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-amber-100 text-amber-800">
      <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>coronavirus</span>
      Penyakit
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-red-100 text-red-800">
      <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>pest_control</span>
      Hama
    </span>
  );
}

function RisikoBadge({ r }: { r: TingkatRisiko }) {
  const map: Record<TingkatRisiko, { cls: string; dot: string }> = {
    'Tinggi': { cls: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
    'Sedang': { cls: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
    'Rendah': { cls: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  };
  const { cls, dot } = map[r];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {r}
    </span>
  );
}

// ── CRUD Drawer ────────────────────────────────────────────────────────────────
type DrawerMode = 'view' | 'add' | 'edit';

const EMPTY_FORM: Omit<EntriPenyakitHama, 'id' | 'ditambahkan'> = {
  nama: '', namaIlmiah: '', jenis: 'Penyakit', kategori: 'Jamur / Fungi',
  tingkatRisiko: 'Sedang', tanamanInang: [], gejala: '', penanganan: '', foto: '',
};

function EntriDrawer({
  mode, entri, onClose, onSave,
}: {
  mode: DrawerMode;
  entri: EntriPenyakitHama | null;
  onClose: () => void;
  onSave: (data: EntriPenyakitHama) => void;
}) {
  const [form, setForm] = useState<Omit<EntriPenyakitHama, 'id' | 'ditambahkan'>>(
    entri ? { ...entri } : { ...EMPTY_FORM }
  );
  const [drawerMode, setDrawerMode] = useState<DrawerMode>(mode);
  const [inangInput, setInangInput] = useState((entri?.tanamanInang ?? []).join(', '));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const saved: EntriPenyakitHama = {
      ...(entri ?? {
        id: `PH-${Date.now()}`,
        ditambahkan: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      }),
      ...form,
      tanamanInang: inangInput.split(',').map(s => s.trim()).filter(Boolean),
    };
    onSave(saved);
    onClose();
  };

  const isEditable = drawerMode === 'add' || drawerMode === 'edit';

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
        onClick={drawerMode === 'view' ? onClose : undefined} />
      <div className="fixed right-0 top-0 h-full w-full max-w-xl bg-white z-50 shadow-2xl flex flex-col overflow-hidden"
        style={{ animation: 'slideInRight 0.25s ease-out' }}>

        {/* Header */}
        <div className={`flex-shrink-0 px-6 py-5 flex items-center justify-between border-b border-slate-100 ${drawerMode === 'edit' ? 'bg-amber-50' : drawerMode === 'add' ? 'bg-emerald-50' : 'bg-slate-50'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${drawerMode === 'edit' ? 'bg-amber-500' : drawerMode === 'add' ? 'bg-emerald-600' : 'bg-primary'}`}>
              <span className="material-symbols-outlined text-white text-[18px]">
                {drawerMode === 'add' ? 'add' : drawerMode === 'edit' ? 'edit' : (form.jenis === 'Hama' ? 'pest_control' : 'coronavirus')}
              </span>
            </div>
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${drawerMode === 'edit' ? 'text-amber-600' : drawerMode === 'add' ? 'text-emerald-700' : 'text-slate-400'}`}>
                {drawerMode === 'add' ? 'Tambah Entri Baru' : drawerMode === 'edit' ? 'Mode Edit' : `Detail ${form.jenis}`}
              </p>
              <h2 className="text-base font-manrope font-extrabold text-primary leading-tight truncate max-w-[280px]">
                {drawerMode === 'add' ? 'Entri Baru' : form.nama}
              </h2>
            </div>
          </div>
          <button type="button" onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-colors">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">

          {/* Foto preview */}
          {drawerMode === 'view' && form.foto && (
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img src={form.foto} alt={form.nama} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Foto URL (add/edit) */}
          {isEditable && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">URL Foto</label>
              <input type="text" name="foto" value={form.foto} onChange={handleInput}
                placeholder="https://..."
                className="field" />
            </div>
          )}

          {/* Nama + Ilmiah */}
          {isEditable ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Umum</label>
                <input type="text" name="nama" value={form.nama} onChange={handleInput}
                  placeholder="cth. Blas" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Ilmiah</label>
                <input type="text" name="namaIlmiah" value={form.namaIlmiah} onChange={handleInput}
                  placeholder="cth. Pyricularia oryzae" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium italic text-slate-700 placeholder:text-slate-300 placeholder:not-italic focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xl font-manrope font-extrabold text-primary">{form.nama}</p>
              <p className="text-sm italic text-slate-400 mt-0.5">{form.namaIlmiah}</p>
              <div className="flex items-center gap-2 mt-3">
                <JenisBadge j={form.jenis} />
                <RisikoBadge r={form.tingkatRisiko} />
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">{form.kategori}</span>
              </div>
            </div>
          )}

          {/* Jenis + Kategori + Risiko */}
          {isEditable && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jenis Entri</label>
                  <div className="relative">
                    <select name="jenis" value={form.jenis} onChange={handleInput}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none">
                      {JENIS_OPTS.map(j => <option key={j}>{j}</option>)}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tingkat Risiko</label>
                  <div className="relative">
                    <select name="tingkatRisiko" value={form.tingkatRisiko} onChange={handleInput}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none">
                      {RISIKO_OPTS.map(r => <option key={r}>{r}</option>)}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori Ilmiah</label>
                <div className="relative">
                  <select name="kategori" value={form.kategori} onChange={handleInput}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all appearance-none">
                    {KATEGORI_OPTS.map(k => <option key={k}>{k}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
              </div>
            </>
          )}

          {/* View: kategori info row */}
          {drawerMode === 'view' && (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 mb-1">Kategori Ilmiah</p>
                <p className="text-sm font-bold text-slate-700">{form.kategori}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 mb-1">Ditambahkan</p>
                <p className="text-sm font-bold text-slate-700">{entri?.ditambahkan ?? '—'}</p>
              </div>
            </div>
          )}

          {/* Tanaman Inang */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              Tanaman Inang
            </label>
            {isEditable ? (
              <>
                <input type="text" value={inangInput} onChange={e => setInangInput(e.target.value)}
                  placeholder="Pisahkan dengan koma, cth: Padi, Jagung"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all" />
                <p className="text-[10px] text-slate-400 pl-1">Tandai tanaman yang rentan terhadap penyakit/hama ini</p>
              </>
            ) : (
              <div className="flex flex-wrap gap-2">
                {form.tanamanInang.map(t => (
                  <span key={t} className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-lg border border-emerald-100">{t}</span>
                ))}
                {form.tanamanInang.length === 0 && <span className="text-xs text-slate-400">—</span>}
              </div>
            )}
          </div>

          {/* Gejala */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              Gejala Serangan
            </label>
            {isEditable ? (
              <textarea name="gejala" value={form.gejala} onChange={handleInput} rows={3}
                placeholder="Deskripsikan gejala yang terlihat pada tanaman..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all resize-none" />
            ) : (
              <p className="text-sm text-slate-600 leading-relaxed font-medium bg-amber-50/60 border border-amber-100 rounded-xl p-4">{form.gejala}</p>
            )}
          </div>

          {/* Penanganan */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-blue-500" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              Cara Pengendalian
            </label>
            {isEditable ? (
              <textarea name="penanganan" value={form.penanganan} onChange={handleInput} rows={3}
                placeholder="Cara pengendalian dan pencegahan yang direkomendasikan..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 outline-none transition-all resize-none" />
            ) : (
              <p className="text-sm text-slate-600 leading-relaxed font-medium bg-blue-50/60 border border-blue-100 rounded-xl p-4">{form.penanganan}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-5 border-t border-slate-100 flex gap-3">
          {drawerMode === 'view' ? (
            <>
              <button type="button" onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>Tutup
              </button>
              <button type="button" onClick={() => setDrawerMode('edit')}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]">edit</span>Edit Data
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={drawerMode === 'edit' ? () => setDrawerMode('view') : onClose}
                className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">undo</span>Batal
              </button>
              <button type="button" onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px]">save</span>Simpan
              </button>
            </>
          )}
        </div>
      </div>
      <style>{`@keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>
    </>
  );
}

// ── Delete Dialog ──────────────────────────────────────────────────────────────
function DeleteDialog({ entri, onConfirm, onCancel }: { entri: EntriPenyakitHama; onConfirm: () => void; onCancel: () => void }) {
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
              <h3 className="font-manrope font-extrabold text-primary text-base">Hapus Entri?</h3>
              <p className="text-xs text-slate-500 mt-0.5">Data yang dihapus tidak dapat dikembalikan.</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl px-4 py-3 mb-5 flex items-center gap-3 border border-slate-100">
            <img src={entri.foto} alt={entri.nama} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-primary">{entri.nama}</p>
              <p className="text-xs italic text-slate-500">{entri.namaIlmiah}</p>
            </div>
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

// ── Halaman Utama ──────────────────────────────────────────────────────────────
export default function KamusPenyakitHamaPage() {
  const [data, setData] = useState<EntriPenyakitHama[]>(INIT_DATA);
  const [search, setSearch] = useState('');
  const [filterJenis, setFilterJenis] = useState<string>('semua');
  const [filterRisiko, setFilterRisiko] = useState<string>('semua');
  const [drawerState, setDrawerState] = useState<{ open: boolean; mode: DrawerMode; entri: EntriPenyakitHama | null }>({ open: false, mode: 'view', entri: null });
  const [deleteTarget, setDeleteTarget] = useState<EntriPenyakitHama | null>(null);

  const filtered = data.filter(e => {
    const matchSearch = e.nama.toLowerCase().includes(search.toLowerCase()) || e.namaIlmiah.toLowerCase().includes(search.toLowerCase());
    const matchJenis = filterJenis === 'semua' || e.jenis === filterJenis;
    const matchRisiko = filterRisiko === 'semua' || e.tingkatRisiko === filterRisiko;
    return matchSearch && matchJenis && matchRisiko;
  });

  const handleSave = (saved: EntriPenyakitHama) => {
    setData(prev => {
      const idx = prev.findIndex(e => e.id === saved.id);
      if (idx >= 0) { const next = [...prev]; next[idx] = saved; return next; }
      return [saved, ...prev];
    });
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    setData(prev => prev.filter(e => e.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const openDrawer = (mode: DrawerMode, entri: EntriPenyakitHama | null = null) =>
    setDrawerState({ open: true, mode, entri });

  const totalPenyakit = data.filter(e => e.jenis === 'Penyakit').length;
  const totalHama = data.filter(e => e.jenis === 'Hama').length;
  const totalTinggi = data.filter(e => e.tingkatRisiko === 'Tinggi').length;

  return (
    <div className="p-8 space-y-6 max-w-[1600px] mx-auto w-full pb-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Kamus Penyakit &amp; Hama</h1>
          <p className="text-slate-500 mt-2 font-body max-w-2xl">
            Repositori penyakit dan hama tanaman sebagai acuan sistem deteksi AI. Data ini terhubung dengan Kamus Tanaman untuk menentukan risiko dan identitas ancaman.
          </p>
        </div>
        <button
          type="button"
          onClick={() => openDrawer('add')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all text-sm whitespace-nowrap self-start md:self-auto"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Tambah Entri Baru
        </button>
      </div>

      {/* Sub-nav Tabs */}
      <div className="flex gap-8 border-b border-slate-200">
        <Link href="/dashboard/data-master/kamus-tanaman" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
          Kamus Tanaman
        </Link>
        <Link href="/dashboard/data-master/kamus-penyakit-hama" className="pb-4 text-sm font-bold text-primary relative">
          Kamus Penyakit &amp; Hama
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
        </Link>
        <Link href="/dashboard/data-master/sop-penanganan" className="pb-4 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
          Panduan SOP
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Entri', value: data.length, icon: 'database', color: 'text-primary', bg: 'bg-emerald-50' },
          { label: 'Penyakit', value: totalPenyakit, icon: 'coronavirus', color: 'text-amber-700', bg: 'bg-amber-50' },
          { label: 'Hama', value: totalHama, icon: 'pest_control', color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Risiko Tinggi', value: totalTinggi, icon: 'warning', color: 'text-rose-700', bg: 'bg-rose-50' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.bg}`}>
              <span className={`material-symbols-outlined text-[22px] ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
              <p className={`text-xl font-manrope font-extrabold ${s.color}`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Cari nama penyakit / hama..."
            className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-full focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
        </div>
        <div className="relative">
          <select value={filterJenis} onChange={e => setFilterJenis(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 outline-none appearance-none">
            <option value="semua">Semua Jenis</option>
            {JENIS_OPTS.map(j => <option key={j}>{j}</option>)}
          </select>
          <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
        </div>
        <div className="relative">
          <select value={filterRisiko} onChange={e => setFilterRisiko(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary/20 outline-none appearance-none">
            <option value="semua">Semua Risiko</option>
            {RISIKO_OPTS.map(r => <option key={r}>{r}</option>)}
          </select>
          <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
        </div>
        <p className="text-xs text-slate-400 font-medium ml-auto">{filtered.length} entri ditemukan</p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Foto</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Nama</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Jenis</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Kategori</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Risiko</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tanaman Inang</th>
                <th className="px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="py-16 text-center">
                  <span className="material-symbols-outlined text-4xl text-slate-300 mb-2 block">search_off</span>
                  <p className="text-slate-500 font-bold">Tidak ada entri yang cocok</p>
                  <button type="button" onClick={() => { setSearch(''); setFilterJenis('semua'); setFilterRisiko('semua'); }}
                    className="mt-2 text-xs text-emerald-600 font-bold hover:underline">Reset filter</button>
                </td></tr>
              ) : filtered.map(e => (
                <tr key={e.id} className="hover:bg-slate-50/60 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex-shrink-0">
                      <img src={e.foto} alt={e.nama} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-4 min-w-[180px]">
                    <p className="text-sm font-bold text-primary">{e.nama}</p>
                    <p className="text-xs italic text-slate-400 mt-0.5">{e.namaIlmiah}</p>
                  </td>
                  <td className="px-4 py-4"><JenisBadge j={e.jenis} /></td>
                  <td className="px-4 py-4">
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">{e.kategori}</span>
                  </td>
                  <td className="px-4 py-4"><RisikoBadge r={e.tingkatRisiko} /></td>
                  <td className="px-4 py-4 max-w-[180px]">
                    <div className="flex flex-wrap gap-1">
                      {e.tanamanInang.slice(0, 2).map(t => (
                        <span key={t} className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-md border border-emerald-100">{t}</span>
                      ))}
                      {e.tanamanInang.length > 2 && (
                        <span className="text-[10px] bg-slate-100 text-slate-500 font-semibold px-2 py-0.5 rounded-md">+{e.tanamanInang.length - 2}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <button type="button" title="Edit" onClick={() => openDrawer('edit', e)}
                        className="p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button type="button" title="Hapus" onClick={() => setDeleteTarget(e)}
                        className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Menampilkan <span className="font-bold text-primary">{filtered.length}</span> dari <span className="font-bold text-primary">{data.length}</span> entri
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-slate-200 text-slate-400 transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors">2</button>
            <button className="p-2 rounded-lg hover:bg-slate-200 text-slate-400 transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {drawerState.open && (
        <EntriDrawer
          mode={drawerState.mode}
          entri={drawerState.entri}
          onClose={() => setDrawerState(s => ({ ...s, open: false }))}
          onSave={handleSave}
        />
      )}

      {/* Delete dialog */}
      {deleteTarget && (
        <DeleteDialog
          entri={deleteTarget}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
