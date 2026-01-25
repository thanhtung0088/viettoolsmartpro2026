import { useState } from 'react';

export default function SoChuNhiem() {
  const [tab, setTab] = useState<'so-diem' | 'so-do' | 'hanh-kiem'>('so-diem');

  return (
    <div style={{ padding: '25px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ background: '#fff', borderRadius: '30px', padding: '30px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
        
        {/* THANH TAB TƯ DUY MỚI */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: '950', color: '#1e293b' }}>📕 SỔ CHỦ NHIỆM THÔNG MINH</h2>
            <div style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '13px' }}>Lớp: 6/1 | GVCN: Nguyễn Thanh Tùng</div>
          </div>
          <div style={{ display: 'flex', gap: '10px', background: '#f8fafc', padding: '8px', borderRadius: '20px' }}>
            {[
              { id: 'so-diem', n: 'BẢNG ĐIỂM TỔNG HỢP', i: '📊' },
              { id: 'so-do', n: 'SƠ ĐỒ LỚP 3D', i: '🏛️' },
              { id: 'hanh-kiem', n: 'NHẬN XÉT HỌC BẠ', i: '📝' }
            ].map(t => (
              <button key={t.id} onClick={() => setTab(t.id as any)} style={{
                padding: '12px 20px', border: 'none', borderRadius: '15px', cursor: 'pointer',
                background: tab === t.id ? '#3b82f6' : 'transparent',
                color: tab === t.id ? '#fff' : '#64748b', fontWeight: '900', transition: '0.3s'
              }}>{t.i} {t.n}</button>
            ))}
          </div>
        </div>

        {/* NỘI DUNG CHI TIẾT */}
        {tab === 'so-diem' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#0284c7', color: '#fff' }}>
                  <th style={{ padding: '15px', border: '1px solid #0369a1' }}>STT</th>
                  <th style={{ padding: '15px', border: '1px solid #0369a1' }}>MÃ ĐỊNH DANH</th>
                  <th style={{ padding: '15px', border: '1px solid #0369a1' }}>HỌ VÀ TÊN</th>
                  <th style={{ padding: '15px', border: '1px solid #0369a1' }}>ĐĐGtx</th>
                  <th style={{ padding: '15px', border: '1px solid #0369a1' }}>ĐGK</th>
                  <th style={{ padding: '15px', border: '1px solid #0369a1' }}>ĐCK</th>
                  <th style={{ padding: '15px', border: '1px solid #0369a1' }}>ĐTBmhk</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map(i => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff' }}>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>{i}</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>240100{i}</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Nguyễn Văn Học Sinh {i}</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>8.5</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>9.0</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>8.0</td>
                    <td style={{ padding: '12px', border: '1px solid #e2e8f0', textAlign: 'center', color: '#ef4444', fontWeight: 'bold' }}>8.5</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'so-do' && (
          <div style={{ padding: '40px', border: '2px dashed #cbd5e1', borderRadius: '30px', position: 'relative' }}>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
                {[1, 2, 3, 4].map(c => (
                  <div key={c} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {Array.from({ length: 5 }).map((_, r) => (
                      <div key={r} style={{ background: '#3b82f6', color: '#fff', padding: '15px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(59,130,246,0.3)' }}>
                        Bàn {c}-{r+1}
                      </div>
                    ))}
                  </div>
                ))}
             </div>
             <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '250px', height: '80px', background: '#1e293b', color: '#fff', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', border: '4px solid #3b82f6' }}>BÀN GIÁO VIÊN</div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}