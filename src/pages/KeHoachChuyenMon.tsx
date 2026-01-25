export default function KeHoachChuyenMon() {
  return (
    <div className="p-8 h-full bg-slate-50">
      <div className="bg-white rounded-[40px] shadow-2xl min-h-[600px] flex flex-col overflow-hidden">
        {/* Header điều hướng */}
        <div className="p-8 flex justify-between items-center border-b">
          <div className="flex items-center gap-4">
            <button className="text-slate-400 font-black text-[12px] uppercase">← Quay lại</button>
          </div>
          <button className="bg-[#1a233b] text-white px-8 py-3 rounded-2xl font-black text-[12px] uppercase flex items-center gap-2 shadow-xl">
            ☁️ Tải lên hồ sơ số
          </button>
        </div>

        {/* Tabs */}
        <div className="px-8 mt-6 flex gap-2">
          <button className="px-10 py-4 rounded-t-2xl bg-slate-100 text-slate-400 font-black text-[12px] uppercase">KH Trường</button>
          <button className="px-10 py-4 rounded-t-2xl bg-blue-600 text-white font-black text-[12px] uppercase shadow-lg">👤 KH Cá nhân</button>
          <button className="px-10 py-4 rounded-t-2xl bg-slate-100 text-slate-400 font-black text-[12px] uppercase italic">Phân phối CT</button>
        </div>

        {/* Danh sách file */}
        <div className="flex-1 p-10 bg-white">
          <div className="max-w-xl bg-slate-50 p-6 rounded-[30px] border border-slate-100 flex justify-between items-center group hover:bg-blue-50 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm font-black">📄</div>
              <div>
                <div className="font-black text-slate-700 uppercase italic text-[13px]">KHDH-GDCD-6-CHAN...</div>
                <div className="text-[10px] text-slate-400 font-bold">26/12/2025</div>
              </div>
            </div>
            <button className="text-slate-300 group-hover:text-red-500 text-xl font-black">🗑️</button>
          </div>
          
          {/* Hình vẽ mờ trang trí bên phải */}
          <div className="absolute right-20 bottom-20 opacity-5 pointer-events-none">
             <div className="text-[150px] font-black italic uppercase">VietEdu</div>
          </div>
        </div>
      </div>
    </div>
  );
}