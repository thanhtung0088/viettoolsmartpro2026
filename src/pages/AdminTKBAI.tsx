import { useState } from 'react';
import { analyzeTKBWithGemini25 } from '../services/geminiService';
import { useNavigate } from 'react-router-dom';

export default function AdminTKBAI() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const nav = useNavigate();

  const handleAIScan = async () => {
    if (!image) return alert("Thầy cô chọn ảnh TKB trước đã!");
    setLoading(true);
    try {
      const result = await analyzeTKBWithGemini25(image);
      setData(result);
      setLoading(false);
    } catch (err) {
      alert("Lỗi AI 2.5: " + err.message);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '30px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', borderRadius: '40px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontWeight: '950', textAlign: 'center', color: '#1e293b' }}>⚡ QUÉT TKB VỚI GEMINI 2.5 FLASH</h2>
        
        <div style={{ margin: '25px 0', padding: '40px', border: '3px dashed #10b981', borderRadius: '30px', textAlign: 'center', background: '#f0fdf4' }}>
          {loading ? (
            <div style={{ padding: '20px' }}>
              <div style={{ width: '50px', height: '50px', border: '4px solid #e2e8f0', borderTop: '4px solid #10b981', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }}></div>
              <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#059669' }}>AI 2.5 ĐANG QUÉT... (ỔN ĐỊNH & MIỄN PHÍ)</p>
            </div>
          ) : (
            <>
              {image && <img src={image} style={{ width: '250px', borderRadius: '15px', marginBottom: '20px' }} />}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <input type="file" id="up-25" hidden onChange={(e) => {
                  const r = new FileReader();
                  r.onload = (ev) => setImage(ev.target?.result as string);
                  r.readAsDataURL(e.target.files![0]);
                }} />
                <button onClick={() => document.getElementById('up-25')?.click()} style={{ background: '#fff', padding: '15px 30px', borderRadius: '15px', fontWeight: 'bold', border: '2px solid #10b981', cursor: 'pointer' }}>📁 CHỌN ẢNH</button>
                <button onClick={handleAIScan} style={{ background: '#10b981', color: '#fff', padding: '15px 30px', borderRadius: '15px', fontWeight: '950', border: 'none', cursor: 'pointer' }}>⚡ BẮT ĐẦU QUÉT</button>
              </div>
            </>
          )}
        </div>

        {data.length > 0 && (
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h4 style={{ color: '#059669', fontWeight: '900' }}>✅ DỮ LIỆU ĐÃ TRÍCH XUẤT:</h4>
            <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '20px', maxHeight: '300px', overflowY: 'auto' }}>
              {data.map((item, i) => (
                <div key={i} style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                  <span><b>{item.thu}:</b> Tiết {item.tiet} - {item.mon}</span>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>Lớp {item.lop}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { localStorage.setItem('tkb-data', JSON.stringify(data)); nav('/'); }} style={{ width: '100%', marginTop: '25px', padding: '20px', background: '#0f172a', color: '#fff', borderRadius: '20px', fontWeight: '950', border: 'none', cursor: 'pointer' }}>LƯU VÀO DASHBOARD</button>
          </div>
        )}
      </div>
    </div>
  );
}