'use client';

import React, { useState } from 'react';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: 'Aris',
    lastName: 'Thorne',
    email: 'aris.t@karu.eco',
    phone: '+62 812-3456-7890',
    title: 'Kepala Ekologi',
    organization: 'KARU Presisi Nusantara',
    bio: 'Meneliti anomali patogen menggunakan data geospasial real-time.'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Saving profile data...", profileData);
    alert("Profil berhasil diperbarui!");
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1000px] mx-auto w-full pb-20">
      
      {/* Header Title */}
      <div className="flex flex-col md:flex-row items-center gap-6 border-b border-outline-variant/20 pb-8">
        <div className="relative group">
          <img 
            alt="Foto Profil Utama" 
            className="w-28 h-28 rounded-full object-cover shadow-md ring-4 ring-emerald-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRx8yeqPFVFlPBy6iNJodE-Q9ep4ixUFcr1N3gogFMifp78LHGoA_-NN_NyuqZhJoUTEZzV_UMVgfFWMsaAoXo6JeoRvduQQan6Jm3hu1voagCWjBDP1g2dsHHGbfiI4ZxKc1_In7IiP7CwiXJjbsF3T50wZMMEpYn-yWw0EidJUTB8qABYV25FiaXKbkVqKNfgV9MvK4tg_q4m3vDxdebi_fCRCcO7ULr14uHCrnlWur8IyZ_X5rCg6zNWjfQaahQ8nPk40bcbSv" 
          />
          <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg border-2 border-white hover:bg-emerald-800 transition-colors" title="Ubah Foto">
            <span className="material-symbols-outlined text-[16px]">photo_camera</span>
          </button>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-manrope font-extrabold text-emerald-950 tracking-tight">Profil Saya</h2>
          <p className="text-slate-500 mt-1">Kelola informasi pribadi dan preferensi akun Anda.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Detail Personal Section */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/30 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
          
          <h3 className="text-lg font-bold text-emerald-950 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">badge</span> Detail Personal
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Nama Depan</label>
              <input 
                type="text" 
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Nama Belakang</label>
              <input 
                type="text" 
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Alamat Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">mail</span>
                <input 
                  type="email" 
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Nomor Telepon</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">call</span>
                <input 
                  type="text" 
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Informasi Pekerjaan */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>

          <h3 className="text-lg font-bold text-emerald-950 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500">work</span> Informasi Profesional
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Jabatan / Peran</label>
              <input 
                type="text" 
                name="title"
                value={profileData.title}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Organisasi / Departemen</label>
              <input 
                type="text" 
                name="organization"
                value={profileData.organization}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Biografi Singkat</label>
              <textarea 
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-slate-50 border border-outline-variant/30 rounded-xl py-3 px-4 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" 
              ></textarea>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button type="button" className="px-6 py-3 border border-outline-variant/30 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            Batal
          </button>
          <button type="submit" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-950/20 hover:brightness-110 transition-all active:scale-95 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">save</span> Simpan Perubahan
          </button>
        </div>

      </form>
      
    </div>
  );
}
