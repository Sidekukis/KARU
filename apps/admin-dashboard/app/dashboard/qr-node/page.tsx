'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ── Mock Data ──────────────────────────────────────────────────────────────────
type BatchStatus = 'Dicetak' | 'Belum Dicetak';

type QRBatch = {
  id: string;
  workspace: string;
  workspaceId: string;
  zone: string;
  nodeCount: number;
  prefix: string;
  createdAt: string;
  createdBy: string;
  status: BatchStatus;
};

const QR_BATCHES: QRBatch[] = [
  { id: 'B-99823-XA', workspace: 'Arboretum Barat', workspaceId: 'ws-001', zone: 'Zona A', nodeCount: 12, prefix: 'KARU-ARB-A', createdAt: '24 Okt 2024, 09:30', createdBy: 'Dr. Aris Thorne', status: 'Dicetak' },
  { id: 'B-99824-XB', workspace: 'Arboretum Barat', workspaceId: 'ws-001', zone: 'Zona B', nodeCount: 8, prefix: 'KARU-ARB-B', createdAt: '24 Okt 2024, 10:15', createdBy: 'Dr. Aris Thorne', status: 'Dicetak' },
  { id: 'B-99901-YA', workspace: 'Arboretum Barat', workspaceId: 'ws-001', zone: 'Zona C', nodeCount: 10, prefix: 'KARU-ARB-C', createdAt: '12 Jan 2025, 08:00', createdBy: 'Sari W.', status: 'Belum Dicetak' },
  { id: 'B-88712-LA', workspace: 'Lab Iklim Mikro B', workspaceId: 'ws-002', zone: 'Ruang Utama', nodeCount: 6, prefix: 'KARU-LAB-U', createdAt: '15 Mar 2025, 14:22', createdBy: 'Budi P.', status: 'Dicetak' },
  { id: 'B-77501-WA', workspace: 'Lahan Basah Utara', workspaceId: 'ws-003', zone: 'Sektor Gambut', nodeCount: 20, prefix: 'KARU-LBU-G', createdAt: '20 Feb 2025, 11:00', createdBy: 'Rai S.', status: 'Dicetak' },
  { id: 'B-77502-WB', workspace: 'Lahan Basah Utara', workspaceId: 'ws-003', zone: 'Sektor Riparian', nodeCount: 15, prefix: 'KARU-LBU-R', createdAt: '22 Feb 2025, 09:45', createdBy: 'Maya D.', status: 'Belum Dicetak' },
  { id: 'B-66301-KA', workspace: 'Kebun Anggur Pusat', workspaceId: 'ws-004', zone: 'Blok Utara', nodeCount: 18, prefix: 'KARU-KAP-N', createdAt: '5 Apr 2025, 13:30', createdBy: 'Yoga P.', status: 'Dicetak' },
  { id: 'B-66302-KB', workspace: 'Kebun Anggur Pusat', workspaceId: 'ws-004', zone: 'Blok Selatan', nodeCount: 24, prefix: 'KARU-KAP-S', createdAt: '5 Apr 2025, 15:00', createdBy: 'Yoga P.', status: 'Belum Dicetak' },
];

const WORKSPACES_OPTS = [
  { id: 'ws-001', name: 'Arboretum Barat' },
  { id: 'ws-002', name: 'Lab Iklim Mikro B' },
  { id: 'ws-003', name: 'Lahan Basah Utara' },
  { id: 'ws-004', name: 'Kebun Anggur Pusat' },
];

const QR_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsMqpcH76Sznl3sot8zBTHI5d7yrHlJGVeNOCtGYGYyp52b6Gpnna8BJG8c-dLgx0RNdYMVfe_kdXGfiNJEjdOlNpegiIDmS907XNEHjFEgjnFJgFZ1gXV6TCcrKKJm-L_NICFuaUbpftuTHvvLoDSWD6F_udGbdLcjP3EOFou-8s1-dJNXcn3v1nj7nsy4O0KYCXZUR8DFAv6xVvFs9LcafOpQwVLkvMf7C7_OiF7Qk6sUAYW8SNX_2zqtSrD5n6xCQlko2M-7lnP',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCnUdU0VnCnknBZq2zgpULlE96IacrkPR3lm5gZVz6116wsOe1RT6TO7LpvONTmchePrqVMbKWiyS6gePEm9IsfVZVUrLcsOvhVZV399sWLAih4TjtNwjlEbArenV-A19PCai6mHoXi5sj5bZHRPbnARzu7gqQYg0nIhZ9Ekk1ZDLojWEraJtaIjWJcGe9ZLei3FUM-0n5rPZlpiEfBQXyggey2ymF3R2AcJRy3GKjAjqMwrg-pX8k_2BiiFsXKJoIvFVzRQvEJR_mp',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDK0OFMkgFVbwovbN2bBC8JAkt1zK0_pkc0m49HuqgvrsuAq7mxgLR9mo64K9i1EHE-46YFTxJNg-gm4q3VRoCCAXyHJK4iMkf7bDEPm4A8k0vvG3GUBgWGij28r76Z29mVBZGnujzgD6O0hdtQ3pxmYf_nixqfAQQ9NNvs-32dTQp34QI6O6ftxC3U_ykoX0WMbSBeu9jTuz8z9hZ3EdMDNEp4E6i0fenImr1rfyjG4My6ju4nyIkzGNyJNlYiH7SajU6NIFZrsM_P',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDevMffxmghueM9rh9UPHCnR40jWmBBwO1Z0xazeoVkn4T5_AUbVnTKNy7NM3vrLbh3bLLP62gQcYf0oSOJgeBqhzclEDDD6ynf7q6LQFTZs0oVHRFWjRNQKx6xsrIN4AlCTcKBYPn-gUBJu4TW-JUVVynvBqiH2OASlv1cMYi855qXhRUprvyzffrgCxFfNyyMctrv1gikLqYCzio7BPuJrYblkuPmZz5Ep0nNj47J2QZRheBXV8cYADGjHfSOXOZ1xbK4LSLYYWTd',
];

// ── Helpers ────────────────────────────────────────────────────────────────────
function StatusPill({ status }: { status: BatchStatus }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
      status === 'Dicetak' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
    }`}>
      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: status === 'Dicetak' ? '#10b981' : '#f59e0b' }} />
      {status}
    </span>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────
export default function QRNodePage() {
  const [activeTab, setActiveTab] = useState<'riwayat' | 'buat'>('riwayat');
  const [filterWs, setFilterWs] = useState('semua');

  // Buat tab state
  const [selectedWs, setSelectedWs] = useState('ws-001');
  const [zoneName, setZoneName] = useState('');
  const [nodeCount, setNodeCount] = useState(12);
  const [prefix, setPrefix] = useState('KARU-ARB-A');
  const [keterangan, setKeterangan] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const filteredBatches = filterWs === 'semua'
    ? QR_BATCHES
    : QR_BATCHES.filter(b => b.workspaceId === filterWs);

  const previewNodes = Array.from({ length: Math.min(nodeCount, 8) }, (_, i) => ({
    id: `${prefix}-${String(i + 1).padStart(3, '0')}`,
    zone: zoneName || 'Zona Baru',
  }));

  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full pb-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-manrope font-extrabold text-primary tracking-tight">Aset Node QR</h2>
          <p className="text-slate-500 mt-2 font-body">Kelola dan hasilkan kode QR untuk aset sensor lapangan di setiap ruang kerja.</p>
        </div>
        <div className="flex gap-3">
          <button type="button" className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant/30 rounded-xl text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors shadow-sm bg-white">
            <span className="material-symbols-outlined text-[18px]">ios_share</span>
            Ekspor ZIP
          </button>
          <button type="button" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-semibold shadow-md hover:brightness-105 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
            Cetak ke PDF
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-2xl w-fit mb-8">
        {[
          { key: 'riwayat', label: 'Riwayat QR', icon: 'history' },
          { key: 'buat', label: 'Buat Node Baru', icon: 'add_circle' },
        ].map(tab => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key as 'riwayat' | 'buat')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === tab.key
                ? 'bg-white text-emerald-800 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab: Riwayat ── */}
      {activeTab === 'riwayat' && (
        <div className="space-y-6">

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            {[
              { label: 'Total Batch', value: QR_BATCHES.length, icon: 'layers', color: 'text-primary' },
              { label: 'Total Node', value: QR_BATCHES.reduce((s, b) => s + b.nodeCount, 0), icon: 'qr_code_2', color: 'text-emerald-700' },
              { label: 'Sudah Dicetak', value: QR_BATCHES.filter(b => b.status === 'Dicetak').length, icon: 'print', color: 'text-emerald-600' },
              { label: 'Belum Dicetak', value: QR_BATCHES.filter(b => b.status === 'Belum Dicetak').length, icon: 'pending', color: 'text-amber-600' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-outline-variant/10 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className={`material-symbols-outlined text-[22px] ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
                  <p className={`text-2xl font-manrope font-extrabold mt-0.5 ${s.color}`}>{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Filter bar */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Filter:</span>
            <button
              type="button"
              onClick={() => setFilterWs('semua')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${filterWs === 'semua' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Semua Workspace
            </button>
            {WORKSPACES_OPTS.map(ws => (
              <button
                key={ws.id}
                type="button"
                onClick={() => setFilterWs(ws.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${filterWs === ws.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {ws.name}
              </button>
            ))}
          </div>

          {/* Batch table */}
          <div className="bg-white rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <th className="text-left px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Batch ID</th>
                    <th className="text-left px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ruang Kerja</th>
                    <th className="text-left px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Zona</th>
                    <th className="text-center px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Jumlah Node</th>
                    <th className="text-left px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dibuat</th>
                    <th className="text-center px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="text-center px-4 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredBatches.map((batch) => (
                    <tr key={batch.id} className="hover:bg-slate-50/60 transition-colors group">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-bold text-primary bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">{batch.id}</span>
                      </td>
                      <td className="px-4 py-4">
                        <Link href="/dashboard/workspace" className="font-semibold text-slate-700 hover:text-emerald-700 transition-colors">{batch.workspace}</Link>
                      </td>
                      <td className="px-4 py-4 text-slate-500 font-medium">{batch.zone}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="font-bold text-slate-800">{batch.nodeCount}</span>
                        <span className="text-slate-400 text-xs ml-1">node</span>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-slate-700 font-medium text-xs">{batch.createdAt}</p>
                        <p className="text-slate-400 text-[10px] mt-0.5">{batch.createdBy}</p>
                      </td>
                      <td className="px-4 py-4 text-center"><StatusPill status={batch.status} /></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button type="button" title="Cetak ulang" className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">print</span>
                          </button>
                          <button type="button" title="Download ZIP" className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                          </button>
                          <button type="button" title="Hapus batch" className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredBatches.length === 0 && (
                <div className="py-16 text-center">
                  <span className="material-symbols-outlined text-4xl text-slate-300 mb-3 block">inbox</span>
                  <p className="text-slate-500 font-bold">Belum ada batch QR untuk workspace ini.</p>
                  <button type="button" onClick={() => setActiveTab('buat')} className="mt-3 text-sm text-emerald-600 font-bold hover:underline">
                    + Buat node baru
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Tab: Buat Node ── */}
      {activeTab === 'buat' && (
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: Config form */}
          <div className="w-full lg:w-[380px] flex-shrink-0 space-y-5">

            <div className="bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm space-y-5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <span className="material-symbols-outlined text-emerald-700">tune</span>
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider font-manrope">Konfigurasi Aset</h3>
              </div>

              {/* Workspace select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ruang Kerja Target</label>
                <div className="relative">
                  <select
                    value={selectedWs}
                    onChange={(e) => setSelectedWs(e.target.value)}
                    className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium text-primary focus:ring-2 focus:ring-primary/20 appearance-none outline-none transition-all"
                  >
                    {WORKSPACES_OPTS.map(ws => <option key={ws.id} value={ws.id}>{ws.name}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
              </div>

              {/* Zone name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Zona / Sub-area</label>
                <input
                  type="text"
                  value={zoneName}
                  onChange={(e) => setZoneName(e.target.value)}
                  placeholder="cth. Zona A — Blok Barat"
                  className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium text-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300"
                />
              </div>

              {/* Node count */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jumlah Node</label>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setNodeCount(n => Math.max(1, n - 1))} className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold transition-colors flex-shrink-0">−</button>
                  <input
                    type="number"
                    value={nodeCount}
                    onChange={(e) => setNodeCount(Math.min(100, Math.max(1, Number(e.target.value))))}
                    min={1} max={100}
                    className="flex-1 bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm font-bold text-primary text-center focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                  <button type="button" onClick={() => setNodeCount(n => Math.min(100, n + 1))} className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold transition-colors flex-shrink-0">+</button>
                </div>
                <p className="text-[10px] text-slate-400 font-medium pl-1">Maksimum 100 node per batch</p>
              </div>

              {/* Prefix */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Awalan Kode Aset</label>
                <input
                  type="text"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value.toUpperCase())}
                  placeholder="cth. KARU-ARB-A"
                  className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-bold font-mono text-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all uppercase placeholder:normal-case placeholder:text-slate-300"
                />
                <p className="text-[10px] text-slate-400 font-medium pl-1">
                  Contoh hasil: <span className="font-mono font-bold text-slate-600">{prefix || 'KARU'}-001</span>
                </p>
              </div>

              {/* Keterangan */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Keterangan <span className="font-normal normal-case text-slate-300">(opsional)</span></label>
                <textarea
                  value={keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                  rows={2}
                  placeholder="Catatan tambahan untuk batch ini..."
                  className="w-full bg-slate-50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-medium text-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-300"
                />
              </div>

              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-emerald-800 transition-all active:scale-[0.98]"
              >
                <span className="material-symbols-outlined">barcode_scanner</span>
                Generate Preview QR
              </button>
            </div>

            {/* Tips */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-emerald-600 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                <h4 className="text-sm font-bold text-emerald-900">Tips Penempatan</h4>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                Cetak QR pada vinil tahan UV 3M untuk luar ruangan. Ukuran minimal 4×4 cm untuk pemindaian optimal. Simpan salinan digital sebagai backup.
              </p>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="flex-1 w-full">
            {showPreview ? (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                {/* Preview header */}
                <div className="flex justify-between items-center p-6 border-b border-slate-100">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Preview Batch Baru</p>
                    <h3 className="text-lg font-manrope font-extrabold text-primary">
                      {WORKSPACES_OPTS.find(w => w.id === selectedWs)?.name || '—'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{zoneName || 'Zona belum dipilih'} · {nodeCount} node · Prefix: <span className="font-mono font-bold">{prefix}</span></p>
                  </div>
                  <div className="bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    <p className="text-[10px] font-bold text-slate-400">ID Batch</p>
                    <p className="font-mono text-sm font-bold text-emerald-800">B-PREVIEW</p>
                  </div>
                </div>

                {/* QR grid */}
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {previewNodes.map((node, i) => (
                      <div key={node.id} className="flex flex-col items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                        <div className="w-full aspect-square bg-white p-2 border border-slate-200 rounded-md shadow-inner">
                          <img alt={`QR ${node.id}`} className="w-full h-full object-cover contrast-125" src={QR_IMAGES[i % QR_IMAGES.length]} />
                        </div>
                        <div className="text-center w-full">
                          <p className="text-[10px] font-mono font-bold text-primary truncate">{node.id}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide truncate mt-0.5">{node.zone}</p>
                        </div>
                      </div>
                    ))}
                    {nodeCount > 8 && (
                      <div className="flex flex-col items-center justify-center aspect-square bg-slate-50 border border-dashed border-slate-300 rounded-xl text-slate-400">
                        <span className="text-2xl font-manrope font-bold">+{nodeCount - 8}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wide mt-1">lainnya</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 border-t border-slate-100 flex flex-wrap gap-3 justify-end">
                  <button type="button" onClick={() => setShowPreview(false)} className="px-4 py-2.5 text-sm font-bold text-slate-500 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                    Reset
                  </button>
                  <button type="button" className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant/30 rounded-xl text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors bg-white">
                    <span className="material-symbols-outlined text-[18px]">ios_share</span>
                    Ekspor ZIP
                  </button>
                  <button type="button" className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant/30 rounded-xl text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors bg-white">
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    Cetak PDF
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowPreview(false); setActiveTab('riwayat'); }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">save</span>
                    Simpan ke Riwayat
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-12 hover:border-emerald-300 transition-colors">
                <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">qr_code_scanner</span>
                <h3 className="text-lg font-manrope font-bold text-slate-400">Preview QR akan muncul di sini</h3>
                <p className="text-sm text-slate-400 mt-2 max-w-xs font-medium leading-relaxed">
                  Isi konfigurasi di panel kiri dan klik <strong className="text-emerald-700">Generate Preview QR</strong> untuk melihat hasilnya.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
