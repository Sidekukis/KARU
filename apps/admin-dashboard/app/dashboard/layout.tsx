"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isDataMasterOpen, setIsDataMasterOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);
  const pathname = usePathname();

  // Auto-open Data Master section if we are in those routes
  useEffect(() => {
    if (pathname && pathname.includes('/data-master')) {
      setIsDataMasterOpen(true);
    }
  }, [pathname]);

  // Real-time Clock Initialization
  useEffect(() => {
    setCurrentDateTime(new Date());
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat('id-ID', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date).replace(/\./g, ':');
  };

  // Build breadcrumbs dynamically based on URL
  let breadcrumbCategory = "KARU";
  let breadcrumbPage = "Beranda";

  if (pathname.includes('/data-master')) {
    breadcrumbCategory = "Data Master";
    if (pathname.includes('/kamus-tanaman')) breadcrumbPage = "Kamus Tanaman";
    else if (pathname.includes('/kamus-penyakit-hama')) breadcrumbPage = "Kamus Penyakit & Hama";
    else if (pathname.includes('/sop-penanganan')) breadcrumbPage = "SOP Penanganan";
    else breadcrumbPage = "Referensi";
  } else if (pathname.includes('/workspace')) {
    breadcrumbCategory = "KARU";
    breadcrumbPage = "Ruang Kerja";
  } else if (pathname.includes('/geofencing')) {
    breadcrumbCategory = "Lingkungan";
    breadcrumbPage = "Peta Geofencing";
  } else if (pathname.includes('/qr-node')) {
    breadcrumbCategory = "Aset Fisik";
    breadcrumbPage = "Aset Node QR";
  } else if (pathname.includes('/reports-ai')) {
    breadcrumbCategory = "Laporan";
    breadcrumbPage = "Wawasan AI";
  } else if (pathname.includes('/users-access')) {
    breadcrumbCategory = "Administrasi";
    breadcrumbPage = "Pengguna & Akses";
  } else if (pathname.includes('/profile')) {
    breadcrumbCategory = "Pengaturan";
    breadcrumbPage = "Profil Saya";
  }

  return (
    <div className="flex h-screen bg-background text-on-surface font-body overflow-hidden">
      {/* SideNavBar Shell */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-emerald-950 dark:bg-slate-950 flex flex-col z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-5 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[72px] h-[72px] shrink-0 flex items-center justify-center -ml-2">
              <img src="/logo-karu.png" alt="Logo KARU" className="w-full h-full object-contain drop-shadow-lg scale-110" />
            </div>
            <div className="flex flex-col justify-center pt-1">
              <span className="text-emerald-50 font-headline font-black text-3xl tracking-tight uppercase leading-none">KARU</span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-bold mt-1">Ekologi Presisi</span>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded-lg hover:bg-emerald-800/50 text-emerald-100/50 hover:text-emerald-50 transition-colors border border-transparent hover:border-emerald-700" title="Tutup Sidebar">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
        <nav className="flex-1 mt-4">
          {/* Dashboard Link */}
          <Link href="/dashboard" className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${pathname === '/dashboard' ? 'text-emerald-300 border-l-4 border-emerald-400 bg-emerald-900/30 font-semibold' : 'text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20'}`}>
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>

          {/* Data Master Link (Collapsible) */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsDataMasterOpen(!isDataMasterOpen)}
              className={`flex items-center justify-between gap-3 px-4 py-3 transition-all duration-200 group w-full text-left ${pathname.includes('/data-master') ? 'text-emerald-300 border-l-4 border-emerald-400 bg-emerald-900/30 font-semibold' : 'text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20'}`}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">database</span>
                <span className="text-sm font-medium">Data Master</span>
              </div>
              <span className={`material-symbols-outlined text-xs transition-transform duration-300 ${isDataMasterOpen ? 'rotate-180' : 'rotate-0'}`}>expand_more</span>
            </button>
            <div className={`bg-emerald-950/50 flex flex-col overflow-hidden transition-all duration-300 ${isDataMasterOpen ? 'max-h-40 py-1 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
              <Link href="/dashboard/data-master/kamus-tanaman" className={`pl-12 pr-4 py-2 text-[12px] transition-colors ${pathname.includes('/kamus-tanaman') ? 'text-emerald-300 font-bold' : 'text-emerald-100/50 hover:text-emerald-50 hover:bg-emerald-900/10'}`}>Kamus Tanaman</Link>
              <Link href="/dashboard/data-master/kamus-penyakit-hama" className={`pl-12 pr-4 py-2 text-[12px] transition-colors ${pathname.includes('/kamus-penyakit-hama') ? 'text-emerald-300 font-bold' : 'text-emerald-100/50 hover:text-emerald-50 hover:bg-emerald-900/10'}`}>Kamus Penyakit &amp; Hama</Link>
              <Link href="/dashboard/data-master/sop-penanganan" className={`pl-12 pr-4 py-2 text-[12px] transition-colors ${pathname.includes('/sop-penanganan') ? 'text-emerald-300 font-bold' : 'text-emerald-100/50 hover:text-emerald-50 hover:bg-emerald-900/10'}`}>SOP Penanganan</Link>
            </div>
          </div>

          <Link href="/dashboard/workspace" className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${pathname.includes('/workspace') ? 'text-emerald-300 border-l-4 border-emerald-400 bg-emerald-900/30 font-semibold' : 'text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20'}`}>
            <span className="material-symbols-outlined">view_quilt</span>
            <span className="text-sm font-medium">WorkSpace</span>
          </Link>
          <Link href="/dashboard/geofencing" className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${pathname.includes('/geofencing') ? 'text-emerald-300 border-l-4 border-emerald-400 bg-emerald-900/30 font-semibold' : 'text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20'}`}>
            <span className="material-symbols-outlined">map</span>
            <span className="text-sm font-medium">Peta Geofencing</span>
          </Link>
          <Link href="/dashboard/qr-node" className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${pathname.includes('/qr-node') ? 'text-emerald-300 border-l-4 border-emerald-400 bg-emerald-900/30 font-semibold' : 'text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20'}`}>
            <span className="material-symbols-outlined">qr_code_2</span>
            <span className="text-sm font-medium">Aset Node QR</span>
          </Link>
          <Link href="/dashboard/reports-ai" className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${pathname.includes('/reports-ai') ? 'text-emerald-300 border-l-4 border-emerald-400 bg-emerald-900/30 font-semibold' : 'text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20'}`}>
            <span className="material-symbols-outlined">monitoring</span>
            <span className="text-sm font-medium">Laporan &amp; Wawasan AI</span>
          </Link>
          <Link href="/dashboard/users-access" className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${pathname.includes('/users-access') ? 'text-emerald-300 border-l-4 border-emerald-400 bg-emerald-900/30 font-semibold' : 'text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20'}`}>
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Pengguna &amp; Akses</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-emerald-100/60 hover:text-emerald-50 hover:bg-emerald-900/20 transition-all duration-200">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Pengaturan</span>
          </Link>
        </nav>
        <div className="p-6 border-t border-emerald-900/50">
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-emerald-100/40 hover:text-emerald-100 transition-colors">
            <span className="material-symbols-outlined text-[18px]">help_outline</span>
            <span className="text-sm">Dukungan</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-2 text-emerald-100/40 hover:text-emerald-100 transition-colors">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="text-sm">Keluar</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area - Shifted for Sidebar */}
      <div className={`flex-1 flex flex-col relative h-screen transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} bg-surface`}>
        {/* TopNavBar Shell */}
        <header className="absolute top-0 w-full z-40 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-white/40 flex justify-between items-center h-16 px-8 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-200/50 transition-colors focus:ring focus:ring-emerald-500/20 outline-none ${isSidebarOpen ? 'hidden' : 'block'}`} title="Buka Sidebar">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className={`${pathname.includes('/data-master') ? "hover:text-primary transition-colors cursor-pointer" : ""}`}>{breadcrumbCategory}</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="font-bold text-emerald-700">{breadcrumbPage}</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* Clock Widget */}
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-surface-container-lowest border border-surface-container px-3 py-1.5 rounded-xl shadow-sm mr-2">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              <span suppressHydrationWarning>{currentDateTime ? formatDateTime(currentDateTime) : 'Memuat Waktu...'}</span>
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-lg transition-colors duration-200 relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              {/* Notification dot indicator */}
              {pathname.includes('/data-master') && <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>}
            </button>
            <div className="h-8 w-[1px] bg-slate-200/80 mx-1"></div>
            <div className="relative">
              <div
                className="flex items-center gap-3 pl-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-[13px] font-extrabold text-primary">Dr. Aris Thorne</p>
                  <p className="text-[11px] text-slate-500 font-bold tracking-tight">Kepala Ekologi</p>
                </div>
                <img alt="Foto Profil" className="w-9 h-9 rounded-full object-cover shadow-sm ring-2 ring-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRx8yeqPFVFlPBy6iNJodE-Q9ep4ixUFcr1N3gogFMifp78LHGoA_-NN_NyuqZhJoUTEZzV_UMVgfFWMsaAoXo6JeoRvduQQan6Jm3hu1voagCWjBDP1g2dsHHGbfiI4ZxKc1_In7IiP7CwiXJjbsF3T50wZMMEpYn-yWw0EidJUTB8qABYV25FiaXKbkVqKNfgV9MvK4tg_q4m3vDxdebi_fCRCcO7ULr14uHCrnlWur8IyZ_X5rCg6zNWjfQaahQ8nPk40bcbSv" />
              </div>

              {/* Profile Dropdown Menu */}
              {isProfileMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsProfileMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-outline-variant/20 z-50 overflow-hidden transform origin-top-right transition-all">
                    <div className="p-4 border-b border-outline-variant/10 bg-slate-50">
                      <p className="text-[13px] font-bold text-primary">Dr. Aris Thorne</p>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">aris.t@karu.eco</p>
                    </div>
                    <div className="p-2">
                      <Link href="/dashboard/profile" onClick={() => setIsProfileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[18px]">person</span> Edit Profil
                      </Link>
                      <Link href="/dashboard/settings" onClick={() => setIsProfileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[18px]">data_usage</span> Pemakaian Akses
                      </Link>
                    </div>
                    <div className="p-2 border-t border-outline-variant/10">
                      <Link href="/login" className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                        Keluar Aplikasi <span className="material-symbols-outlined text-[18px]">logout</span>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Page Content Area */}
        <main className="flex-1 pt-16 overflow-y-auto w-full h-full relative z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
