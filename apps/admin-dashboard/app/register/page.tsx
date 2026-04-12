"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [noHp, setNoHp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifikasiPassword, setVerifikasiPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifikasiPassword, setShowVerifikasiPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== verifikasiPassword) {
      alert("Password dan Verifikasi Password tidak cocok.");
      return;
    }
    console.log("Register Details:", { namaLengkap, noHp, username, password });
    // TODO: Implement actual registration here
    alert("Proses Pendaftaran...");
  };

  return (
    <main className="flex h-full w-full">
      {/* Left Section: Visual Brand */}
      <section className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="atmospheric misty forest with tall pine trees shrouded in deep fog morning light emerald green hues"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdTDY2UNU1BNrNsi684-P26iFbz75ciMKtA3AoIYmQI0lJx7kehqOYgHk9zUB2QNeMgAdIur9l7fkVSNavOM9kdywNdei9gcf-X8-BdYVchGjQXSpEEc3kGzQQu2MOqT2obSwx9KIm71hLJSEfyGb7qbS01lBUDRqA3hzCSS-vGUkF9Ip_f52-V6yk6UBV6YMIixYOKkTjDqufNm_7tmcwkQPQL1vURCUcy2SeDsbtvswBN-AJnjaopn_0GNzpwNFMOs7f2QOOJ4j9"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
        </div>

        {/* Brand Logo (Shared Component Logic - Top Left) */}
        <div className="absolute top-12 left-12 z-10">
          <span className="font-headline font-black text-3xl text-surface tracking-tighter">KARU</span>
        </div>

        {/* Slogan Left */}
        <div className="relative z-10 text-left px-12 w-full max-w-2xl">
          <h1 className="font-headline text-5xl font-extrabold text-surface-container-lowest leading-tight tracking-tight text-shadow-md">
            Your Intelligent Green Eye
          </h1>
          <p className="mt-4 text-primary-fixed font-medium text-lg opacity-90">
            Sistem pemantauan presisi untuk masa depan ekologi yang lebih cerdas dan lestari.
          </p>
        </div>

        {/* Footer Copyright */}
        <div className="absolute bottom-6 left-12 z-10">
          <p className="text-surface-container-lowest/70 text-[0.75rem] font-medium uppercase tracking-widest font-label">
            @ 2026 KARU. All Rights Reserved
          </p>
        </div>
      </section>

      {/* Right Section: Register Form */}
      <section className="w-full lg:w-1/2 bg-surface-container-lowest flex flex-col justify-center items-center px-8 sm:px-24 pt-12 pb-8 relative overflow-y-auto min-h-screen">
        {/* Mobile Brand Logo */}
        <div className="lg:hidden absolute top-8 left-8">
          <span className="font-headline font-black text-2xl text-primary tracking-tighter">KARU</span>
        </div>

        <div className="w-full max-w-sm z-10 mt-10 lg:mt-0">
          <header className="mb-8">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Buat Akun Baru</h3>
            <p className="text-on-surface-variant font-medium text-sm">Daftar sekarang untuk mulai memantau dan mengelola data terpusat Anda.</p>
          </header>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary/80 ml-1" htmlFor="namaLengkap">Nama Lengkap</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors text-xl">badge</span>
                <input
                  id="namaLengkap"
                  type="text"
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  required
                  placeholder="masukkan nama lengkap"
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-low border-none rounded-xl text-on-surface text-sm focus:ring-2 focus:ring-surface-tint focus:ring-offset-0 transition-all placeholder:text-outline-variant"
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary/80 ml-1" htmlFor="noHp">No HP</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors text-xl">call</span>
                <input
                  id="noHp"
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  required
                  placeholder="08xxxxxxxxxx"
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-low border-none rounded-xl text-on-surface text-sm focus:ring-2 focus:ring-surface-tint focus:ring-offset-0 transition-all placeholder:text-outline-variant"
                />
              </div>
            </div>

            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary/80 ml-1" htmlFor="username">Username</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors text-xl">person</span>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="masukkan username"
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-low border-none rounded-xl text-on-surface text-sm focus:ring-2 focus:ring-surface-tint focus:ring-offset-0 transition-all placeholder:text-outline-variant"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary/80 ml-1" htmlFor="password">Kata Sandi</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors text-xl">lock</span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="masukkan password"
                  className="w-full pl-11 pr-11 py-3 bg-surface-container-low border-none rounded-xl text-on-surface text-sm focus:ring-2 focus:ring-surface-tint focus:ring-offset-0 transition-all placeholder:text-outline-variant"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors flex"
                >
                  <span className="material-symbols-outlined text-xl">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            {/* Verifikasi Password Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-primary/80 ml-1" htmlFor="verifikasiPassword">Verifikasi Kata Sandi</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors text-xl">lock_reset</span>
                <input
                  id="verifikasiPassword"
                  type={showVerifikasiPassword ? "text" : "password"}
                  value={verifikasiPassword}
                  onChange={(e) => setVerifikasiPassword(e.target.value)}
                  required
                  placeholder="masukkan ulang password"
                  className="w-full pl-11 pr-11 py-3 bg-surface-container-low border-none rounded-xl text-on-surface text-sm focus:ring-2 focus:ring-surface-tint focus:ring-offset-0 transition-all placeholder:text-outline-variant"
                />
                <button
                  type="button"
                  onClick={() => setShowVerifikasiPassword(!showVerifikasiPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors flex"
                >
                  <span className="material-symbols-outlined text-xl">{showVerifikasiPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-surface font-headline font-bold text-base rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
              >
                Mendaftar
                <span className="material-symbols-outlined text-lg">how_to_reg</span>
              </button>
            </div>
          </form>

          {/* Footer Support */}
          <footer className="mt-8 pt-6 border-t border-surface-container-high text-center">
            <p className="text-sm text-on-surface-variant">
              Sudah punya akun? <Link href="/" className="font-bold text-secondary hover:underline text-sm">Masuk sekarang</Link>
            </p>
          </footer>
        </div>

        {/* Floating Aesthetic Blur (Minimalist Detail) */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-container/20 blur-3xl rounded-full pointer-events-none"></div>
      </section>
    </main>
  );
}
