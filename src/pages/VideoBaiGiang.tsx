import { useState, useRef } from 'react';

export default function VideoBaiGiang() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  return (
    <div className="p-8 h-full flex flex-col space-y-6">
      <div className="bg-white p-8 rounded-[40px] shadow-xl flex justify-between items-center border border-slate-100">
        <div>
          <h2 className="text-2xl font-black text-blue-900 uppercase italic">Kho Video Bài Giảng</h2>
          <p className="text-[10px] font-black text-slate-400 uppercase italic">Tải lên video từ máy tính để trình chiếu trực tiếp</p>
        </div>
        <button 
          onClick={() => fileInputRef.current?.click()} 
          className="bg-[#1a233b] text-white px-10 py-4 rounded-full font-black text-[12px] uppercase shadow-xl hover:bg-blue-600 transition-all"
        >
          📂 Đăng bài giảng từ máy
        </button>
        <input type="file" ref={fileInputRef} hidden accept="video/*" onChange={handleFileChange} />
      </div>

      <div className="flex-1 bg-black rounded-[50px] shadow-2xl overflow-hidden relative border-[10px] border-white">
        {videoUrl ? (
          <video src={videoUrl} controls className="w-full h-full object-contain" autoPlay />
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-white/20">
            <div className="text-[150px] mb-4">📽️</div>
            <p className="text-2xl font-black uppercase italic tracking-widest">Sẵn sàng trình chiếu video</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-6">
        {['Tiết 1: Môn Toán', 'Tiết 2: Môn Lý', 'Tiết 3: Môn Anh', 'Tiết 4: Môn Tin'].map((v, i) => (
          <div key={i} className="bg-white p-4 rounded-[25px] shadow-md border border-slate-100 flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-xl">🎞️</div>
            <div className="font-black text-[11px] text-slate-600 uppercase italic">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}