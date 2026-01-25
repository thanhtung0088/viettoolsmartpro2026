import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const nav = useNavigate();
  const bannerRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  const [banner, setBanner] = useState(localStorage.getItem('db-banner') || "");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleBanner = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (r) => { setBanner(r.target?.result as string); localStorage.setItem('db-banner', r.target?.result as string); };
      reader.readAsDataURL(file);
    }
  };

  const handlePDF = (e: any) => {
    const file = e.target.files[0];
    if (file?.type === "application/pdf") setPdfUrl(URL.createObjectURL(file));
  };

  return (
    <div style={{ padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column', gap: '20px', background: '#f1f5f9', boxSizing: 'border-box', overflow: 'hidden' }}>
      
      {/* BANNER 16:9 [cite: 2026-01-24] */}
      <div style={{ background: '#0f172a', borderRadius: '30px', padding: '20px', display: 'flex', alignItems: 'center', gap: '25px', flexShrink: 0 }}>
        <div onClick={() => bannerRef.current?.click()} style={{ width: '280px', aspectRatio: '16/9', background: '#1e293b', borderRadius: '15px', border: '2px dashed #334155', cursor: 'pointer', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {banner ? <img src={banner} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#64748b', fontSize: '11px' }}>DÁN BANNER 16:9</span>}
          <input type="file" ref={bannerRef} hidden onChange={handleBanner} accept="image/*" />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '26px', fontWeight: '950', color: '#fbbf24', margin: 0 }}>HỆ SINH THÁI GIÁO DỤC SỐ 2026</h1>
          <p style={{ color: '#10b981', fontWeight: 'bold', margin: 0 }}>THCS Bình Hòa - Trí tuệ & Sáng tạo</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => nav('/admin-tkb-ai')} style={{ background: '#fbbf24', color: '#000', border: 'none', padding: '12px 25px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>🔍 QUÉT AI</button>
          <button onClick={() => window.open('https://meet.google.com')} style={{ background: '#10b981', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>📽️ PHÒNG HỌP</button>
        </div>
      </div>

      {/* DÃY NÚT ĐIỀU HƯỚNG */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px', flexShrink: 0 }}>
        {[
          { n: 'SOẠN BÀI AI', c: '#3b82f6', p: '/soan' },
          { n: 'SỔ CHỦ NHIỆM', c: '#10b981', p: '/chunhiem' },
          { n: 'SỔ ĐIỂM SỐ', c: '#f59e0b', p: '/diem' },
          { n: 'KẾ HOẠCH', c: '#8b5cf6', p: '/ke-hoach' },
          { n: 'GAME CENTER', c: '#ec4899', p: '/game' },
          { n: 'KHO TÀI NGUYÊN', c: '#64748b', p: '/kho' },
        ].map(b => (
          <button key={b.n} onClick={() => nav(b.p)} style={{ background: b.c, color: '#fff', border: 'none', padding: '15px', borderRadius: '15px', fontWeight: '900', fontSize: '11px', cursor: 'pointer', boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>{b.n}</button>
        ))}
      </div>

      {/* 3 THẺ LỚN KÉO DÀI LẤP ĐẦY [cite: 2026-01-24] */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 2fr', gap: '20px', minHeight: 0, paddingBottom: '15px' }}>
        <div style={{ background: '#fff', borderRadius: '30px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#3b82f6', color: '#fff', padding: '12px', borderRadius: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span>🗓️ LỊCH DẠY</span>
            <button onClick={() => nav('/admin-tkb-ai')} style={{ background: '#fff', color: '#3b82f6', border: 'none', padding: '2px 8px', borderRadius: '5px', fontSize: '9px', fontWeight: '900' }}>UPDATE</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', marginTop: '10px' }}>
             {/* Dữ liệu từ AI sẽ đổ vào đây */}
             <div style={{ padding: '10px', borderBottom: '1px solid #f1f5f9' }}><b>Tiết 1:</b> GDCD 6.1</div>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '30px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#10b981', color: '#fff', padding: '12px', borderRadius: '15px', fontWeight: 'bold' }}>📝 CÔNG VIỆC</div>
          <textarea placeholder="Nhập ghi chú..." style={{ flex: 1, width: '100%', border: 'none', background: '#f8fafc', padding: '15px', borderRadius: '20px', marginTop: '15px', resize: 'none' }} />
        </div>

        <div ref={viewRef} style={{ background: '#1e293b', borderRadius: '30px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <h4 style={{ color: '#fff', margin: 0 }}>📽️ TRÌNH CHIẾU</h4>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => pdfRef.current?.click()} style={{ background: '#10b981', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '10px', fontWeight: 'bold', fontSize: '11px' }}>📂 MỞ PDF</button>
              <button onClick={() => viewRef.current?.requestFullscreen()} style={{ background: '#64748b', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '10px', fontWeight: 'bold', fontSize: '11px' }}>🔳 FULL</button>
            </div>
            <input type="file" ref={pdfRef} hidden accept="application/pdf" onChange={handlePDF} />
          </div>
          <div style={{ flex: 1, background: '#0f172a', borderRadius: '20px', overflow: 'hidden' }}>
            {pdfUrl ? <iframe src={pdfUrl} style={{ width: '100%', height: '100%', border: 'none' }} /> : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>Kéo thả hoặc mở file PDF</div>}
          </div>
        </div>
      </div>
    </div>
  );
}