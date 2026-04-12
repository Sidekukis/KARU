import React from 'react';

export default function WorkspacePage() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full">
      {/* Header Section */}
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
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all text-sm">
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
            Buat Ruang Kerja
          </button>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Proyek Aktif</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-primary">12</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[12px]">arrow_upward</span>14%
            </span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Node Sensor</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-primary">1,284</span>
            <span className="text-xs font-medium text-slate-400 bg-surface px-2 py-0.5 rounded-md">Total Aktif</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Cakupan Lahan</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-primary">45.2</span>
            <span className="text-xs font-medium text-slate-400 bg-surface px-2 py-0.5 rounded-md">Hektar</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Kesehatan Sistem</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-manrope font-extrabold text-primary">98.4%</span>
            <span className="material-symbols-outlined text-emerald-500 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </div>
      </div>

      {/* Workspace Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-outline-variant/10 flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img alt="Arboretum Barat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmz9drdnHMVt4JNaErayQFm25aUzNQMhpCj8j75SHNWmQl9mZSmm7ttlhd5xKQ_bw-kSgigMjaGLDirdKFlhFzn6F97dXEofhtq4JMKG8Yh_zh4dMaZBUwbYOWD4sGHIz9yyCfbc_GutK1s4qOjoDJ8oa7QpWkZ_iypV7sA4og_7I-xW5MgzsxmqXNzAlvoj19wiA7AjcXDutoXYt_iMFfpF4_xP3jYStfUaJl3s9nTjnCo4vC59V515XkEuiesStxjvpSzjIq83BD" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest shadow-sm">Lahan Makro</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
              <span className="text-xs font-bold text-primary">342 Node</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-manrope font-extrabold text-primary">Arboretum Barat</h3>
              <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100">
                <span className="material-symbols-outlined text-xl">more_vert</span>
              </button>
            </div>
            <p className="text-sm text-on-surface-variant line-clamp-2 md:line-clamp-3 mb-6 font-medium leading-relaxed">Studi reboisasi jangka panjang yang berfokus pada keragaman kayu keras dan tingkat penyerapan karbon tanah.</p>
            <div className="mt-auto pt-6 border-t border-surface-container flex items-center justify-between">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm-BujHaFnX3MTlS-E4ICukmGy60DmN2JROayh7wyCgPixnxy0RzzLqZsvlmH-XxDOvP5HXpMckXkVQMYuDtvfy4eP-TBBX9YQ_scrnT18lGHyflkZKQOC70zLeV9UL4lYu1-T_0iZPibUW2roj4DLIS8Ggzqkxx2Q8eotV1n5K36EeKOdnGNt8Q4Pe5WE-riqA0IEZ07DaJg05iTDoZN79dRTyNulBZ0NcFOj3UNIOfiWWeNfDYymUWZ4tzDc6Td6L0HPr9q-Dtxc" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfWFJ6aeIHZfGF9YnaHdAlaOsC5K1gsWUXHqyy55KhL109GIexzEzoLbj5MNIspP1ireJzhxXpCNgew-xTsskgbNPkdd70RVDQ04SbGrubQH8Mmgk3V-rFdz_8XaCnu6it0k-XFoeugPdd5NQIk-JDy6gv6ZMkydbiHfJSGtSraTMlaz0hDcbJwKD9Vr4PGnsl7cF-v-JcpDU357JMRHtfEhaXSjg7PXX4ksytqBanYXgtANybCnpeK_4pKX9JTrxX6ROizM9CwDj" />
                <div className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center text-[10px] font-bold ring-2 ring-white">+4</div>
              </div>
              <button className="text-sm font-bold text-primary hover:text-emerald-600 transition-colors flex items-center gap-1 group/btn px-2 py-1 rounded-lg hover:bg-emerald-50">
                Lihat Detail
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-outline-variant/10 flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img alt="Lab Iklim Mikro B" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVdmMIZ1fq13_sBDE5TJrN-U1oTisbAEekV61zshnCvNa-2eSNk4mYSVI46nInuv4VE-S0gL6oICAcEH2OJF_TZIlVTit1r7wDmNrhblzSifRbxGgEXcrvEEJvR_Unc0F__8Km-eUmdZkmiGg_j99g69AZzFHGbli3z_3LEsppobVTzSB_ExYa3be8x4Sf7uPy7YxbX_3m1c2gVCvzSHmBFqHjC5C0KiVcLAI_2zEkSHLNznBZbiJtpAMXWNARt6I8oquYRkpfIF4u" />
            <div className="absolute top-4 left-4">
              <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest shadow-sm">Lahan Mikro</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
              <span className="text-xs font-bold text-primary">86 Node</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-manrope font-extrabold text-primary">Lab Iklim Mikro B</h3>
              <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100">
                <span className="material-symbols-outlined text-xl">more_vert</span>
              </button>
            </div>
            <p className="text-sm text-on-surface-variant line-clamp-2 md:line-clamp-3 mb-6 font-medium leading-relaxed">Pengujian pertanian lingkungan terkontrol yang dioptimalkan spektrum UV untuk produksi kale vertikal.</p>
            <div className="mt-auto pt-6 border-t border-surface-container flex items-center justify-between">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6pQ6bFeqKUDh52FEhE0C3Om635wlFfJmPe2HF_XqYMUrYaRQ_Ta8_fkA94sGyRKOpYI0Pmjihd-lbZUf5LQkEry7M_Zcw0n7eKqZ0YT8Zxuu7dM639cGbZrAU73WDo9Gp0CeDSUsfOYeXAXJ2mI5OneRwZdEaSJga1SBCu-vHOwEK5GSVJISHQpxNck1gWieveuVbpYgRyrkSyH2WN8f4zmEj-DOjOIKic-6KmLQ15w1RKNHYiREC37Wna9qmRWgdCTTrR0hEsoVa" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqs3S-2QlVD2sH0IFIFiXhkqhtPc2k7n13yr-BBqhN2OaXqsc3h9_TRqU8YNBRZKZgchijaPo2Xr4sFBdV_WiEZjIvP310O9rFu6xFAtO57EcDAa1uEenSrxzNX9hUfwUR1GP_0nDLs0ELceKee6sEToF8imu1vIFLZ2L1Wsu1o0QNxBp-JEeXinlQPdTSCxuyA1xEM3h6fxi0kWHf09D1iXl3CCdwDy2KIiqrhnZbnCByoI9krNJ5rbWmlUdKEy4lU96MD9qTN2XU" />
              </div>
              <button className="text-sm font-bold text-primary hover:text-emerald-600 transition-colors flex items-center gap-1 group/btn px-2 py-1 rounded-lg hover:bg-emerald-50">
                Lihat Detail
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-outline-variant/10 flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img alt="Lahan Basah Utara" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrbYJjm7pMBTKFUICpLTelJGPSF3bQ1CDKhogktHKBnt6oTs4zwAlePGlSFn9wK4JpLoqyUCaMnNkIe6ZO3ozjHh3Ljoz--Q-_Qy8YJpeMqE1vrKaIhPtKvOMOa8JsjfpY0feJcKctGaxjoJCOlx1vtxtmvdxxZtNP14ijWQs27f5zHvFDRkhn-5Wer2XGM2GPzlHJtbbyj80YNsDEZtu-cjdx8KH-0zza49hpbZ3Qsk6mSC5jh5qoB5XV4D015do85nwqqniFfrvl" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest shadow-sm">Lahan Makro</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
              <span className="text-xs font-bold text-primary">156 Node</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-manrope font-extrabold text-primary">Lahan Basah Utara</h3>
              <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100">
                <span className="material-symbols-outlined text-xl">more_vert</span>
              </button>
            </div>
            <p className="text-sm text-on-surface-variant line-clamp-2 md:line-clamp-3 mb-6 font-medium leading-relaxed">Pemantauan emisi metana dan pelacakan keanekaragaman hayati di ekosistem lahan gambut yang sedang direstorasi.</p>
            <div className="mt-auto pt-6 border-t border-surface-container flex items-center justify-between">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuUpLAr7k7HCC4blfE0KjqmPCxWfhr_pu7OlMjebPZjSFG0dbMU0kaBOzwFFWz6rZV30zpRKelaaYHB9PXb1HaivJf6fw82PX7KU410SJ5xlDUPRdRcuh01hpK0BFnsWd9uNnK2Ual46kSN76vGsOOd5EycYk0ltRL68LyK0gEjAhyEsOZrCLKjn8_LIq_5W8QTOrzmDl532EVLiZgIdOTjMYx66HmZarjVwZWbWiW9dmPQnCfae54WDqg8qDxolKEHgqXF_j-qjJ_" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7yf4bjJyDWoSvrdKo17nuebxDgXEq1Bn9zv320RNFuyVnhpGqnj6pSMZafjsvf8k26QSxcqUNvGCkfnsCAM4uyBz3z4bAFfJEhhkgNxuK355Azk8Yd2japIRAFP6lbiMNuVRHkeR6zBSPYvcAvXfx6j6cWMEaPZ8yVyTZKViGda8mloEq2P1jgPEAXZxgE0QEoTfUHu1FR5GxPtXV6ROngWLY0HcflY89TqXIolVq52Jj3oThFbt877TEQMT65wdm84mGQfmJSheB" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoY03_UhHlyYSpFMJit_545oHo3tmcMG-6N0kCdcOhaaopeDg8z306QSOpYGroUSerkLFek6TLQLnM6Q9plAQcIAvhXHmoWX3OcBeE6TdzQvXXOqysj0HuDUvX0eGM7iuc1Z81f7WlVGu0GUAxIJD4g-ePIYuK4i-rvwCUzAVVdsstljPZxzDrwKJaIwd48pV96dobDlqQdVe8epkAsdgdf-vT4hoWeDz_LtTwV_XIoatXrttlXGA6ExEDjIv7o-rUCio6-vz2hsWg" />
              </div>
              <button className="text-sm font-bold text-primary hover:text-emerald-600 transition-colors flex items-center gap-1 group/btn px-2 py-1 rounded-lg hover:bg-emerald-50">
                Lihat Detail
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-outline-variant/10 flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img alt="Kebun Anggur Pusat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPh7bGZL41D_Tiyw745d23XXqkPQ_XTaH7wYXRv7chvTKk35PL1cx0e7CPcKNs5IomAV6Cqbwh_OEQTKCgv4SZ_2RDmBpnVOF41iDUYb0PCZuPBz_-W8ZWhcfnv8ago6tJgUnlVnRR52crKamx4qsWDrNCIjIU0aRjNMWCm8nYKFQsA7uxA3MEMjda7u46vA-1Uxap3jXKlJaRZvOU0Lk0jup3vu5CL9o0YLAgxHy1w_dSbvg3Lst1EPvgvQWVwZ41k3x3i0EKJClz" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest shadow-sm">Lahan Makro</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
              <span className="text-xs font-bold text-primary">512 Node</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-manrope font-extrabold text-primary">Kebun Anggur Pusat</h3>
              <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-slate-100">
                <span className="material-symbols-outlined text-xl">more_vert</span>
              </button>
            </div>
            <p className="text-sm text-on-surface-variant line-clamp-2 md:line-clamp-3 mb-6 font-medium leading-relaxed">Irigasi cerdas dan manajemen hama menggunakan citra multispektral dan sensor kelembaban tanah langsung.</p>
            <div className="mt-auto pt-6 border-t border-surface-container flex items-center justify-between">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqSv3siu1FSO6G8HJliUw9ny9yUuM-a9uY9lxATHzSTDd6xSUabqX_RSjtmD6w9oa01iqteFTXW3pN4DautkR1uiqM0rJDXEFGzmXE5-M80eXuDKumLFWUP7C0QbLewqdpbJZw-fPIMle-XwM6TaueYKnm18ko7t6A6XrCSYF9FqwRGdqvn_YmrGWfP9ySbMqVlJftatUWOx6jT1OPrWc55Z2QcgUbIUzz3qMxIq-8PSaKZFcIlrnUUylv_ekb1FxJBhENbx_C_g-q" />
                <div className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center text-[10px] font-bold ring-2 ring-white">+8</div>
              </div>
              <button className="text-sm font-bold text-primary hover:text-emerald-600 transition-colors flex items-center gap-1 group/btn px-2 py-1 rounded-lg hover:bg-emerald-50">
                Lihat Detail
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Create New Placeholder */}
        <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all cursor-pointer min-h-[400px] group/new h-full">
          <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center mb-5 group-hover/new:bg-emerald-100 group-hover/new:scale-110 transition-all duration-300">
            <span className="material-symbols-outlined text-3xl text-slate-400 group-hover/new:text-emerald-600 transition-colors">add_circle</span>
          </div>
          <h3 className="text-xl font-manrope font-bold text-slate-500 group-hover/new:text-emerald-900 transition-colors">Tambah Proyek Baru</h3>
          <p className="text-sm text-slate-400 text-center mt-2 max-w-[220px] font-medium leading-relaxed">Tentukan batas lahan dan terapkan klaster sensor pertama Anda.</p>
        </div>
      </div>

      {/* Floating Action Button for Help (Mobile/Bottom) */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-800 text-white rounded-full shadow-xl shadow-emerald-900/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
      </button>
    </div>
  );
}
