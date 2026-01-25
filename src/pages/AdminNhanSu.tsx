import { useState } from 'react';

export default function AdminNhanSu() {
  const [showImport, setShowImport] = useState(false);
  const [data, setData] = useState<string[][]>([]);

  const handlePaste = (e: any) => {
    const rawData = e.target.value;
    const rows = rawData.split('\n').map((row: string) => row.split('\t'));
    setData(rows.filter((r: any) => r[0].trim() !== ""));
  };

  return (
    <div style={{ padding: '25px' }}>
      <div style={{ width: '100%', height: '180px', background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/1200/400?education)', backgroundSize: 'cover', borderRadius: '25px', display: 'flex', alignItems: 'center', padding: '0 40px', marginBottom: '25px', color: '#fff' }}>
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: '900', margin: 0 }}>👥 NHÂN SỰ & TỔ CHỨC</h2>
          <p style={{ color: '#34d399', fontWeight: 'bold', marginTop: '10px' }}>Quản lý hồ sơ công chức, viên chức THCS Bình Hòa</p>
        </div>
        <button onClick={() => setShowImport(true)} style={{ marginLeft: 'auto', background: '#fbbf24', border: 'none', padding: '15px 30px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer', color: '#1e293b' }}>📥 DÁN EXCEL</button>
      </div>

      <div style={{ background: '#fff', borderRadius: '25px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#f8fafc', textAlign: 'left' }}>
              {['STT', 'HỌ VÀ TÊN', 'CHỨC VỤ', 'TỔ CHUYÊN MÔN', 'TRÌNH ĐỘ', 'SĐT'].map(h => (
                <th key={h} style={{ padding: '18px', borderBottom: '2px solid #edf2f7', color: '#64748b', fontWeight: '900' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? data.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '18px' }}>{i + 1}</td>
                <td style={{ padding: '18px', fontWeight: 'bold' }}>{row[0]}</td>
                <td style={{ padding: '18px' }}>{row[1]}</td>
                <td style={{ padding: '18px' }}>{row[2]}</td>
                <td style={{ padding: '18px' }}>{row[3]}</td>
                <td style={{ padding: '18px' }}>{row[4]}</td>
              </tr>
            )) : (
              <tr><td colSpan={6} style={{ padding: '100px', textAlign: 'center', color: '#94a3b8' }}>Chưa có dữ liệu. Hãy bấm "Dán Excel" để bắt đầu.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showImport && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: '#fff', width: '600px', padding: '30px', borderRadius: '25px' }}>
            <h3 style={{ fontWeight: '900' }}>📥 DÁN DỮ LIỆU TỪ EXCEL</h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '15px' }}>Chọn vùng dữ liệu trong Excel (Họ tên, Chức vụ, Tổ...) rồi dán vào đây.</p>
            <textarea onPaste={handlePaste} style={{ width: '100%', height: '250px', borderRadius: '15px', border: '2px solid #e2e8f0', padding: '15px', outline: 'none' }} placeholder="Nhấp vào đây và nhấn Ctrl + V" />
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <button onClick={() => setShowImport(false)} style={{ flex: 1, background: '#059669', color: '#fff', border: 'none', padding: '15px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>✅ XÁC NHẬN NHẬP</button>
              <button onClick={() => {setData([]); setShowImport(false)}} style={{ flex: 1, background: '#f1f5f9', border: 'none', padding: '15px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>HỦY</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}