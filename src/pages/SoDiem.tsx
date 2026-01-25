export default function SoDiem() {
  // DANH SÁCH MÔN HỌC THEO QUY ĐỊNH [cite: 2026-01-24]
  const monHoc = ["Ngữ văn", "Toán", "Ngoại ngữ 1", "GDCD", "Lịch sử & Địa lý", "Khoa học tự nhiên", "Công nghệ", "Tin học", "GDTC", "Nghệ thuật", "HĐTN, HN", "Nội dung địa phương"];
  
  // DANH SÁCH LỚP TỪ 1 ĐẾN 12 [cite: 2026-01-24]
  const khoiLop = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div style={{ padding: '25px', background: '#fff', minHeight: '100vh' }}>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', alignItems: 'center', flexWrap: 'wrap', fontSize: '13px', fontWeight: 'bold' }}>
        
        {/* CHỌN KHỐI/LỚP [cite: 2026-01-24] */}
        <div>Khối: 
          <select style={{ marginLeft: '5px', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            {khoiLop.map(k => <option key={k}>Khối {k}</option>)}
          </select>
        </div>

        <div>Lớp: 
          <select style={{ marginLeft: '5px', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            <option>6/1</option><option>6/2</option><option>6/3</option><option>6/4</option>
          </select>
        </div>

        {/* CHỌN MÔN HỌC ĐẦY ĐỦ [cite: 2026-01-24] */}
        <div>Môn học: 
          <select style={{ marginLeft: '5px', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            {monHoc.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>

        {/* CHỌN HỌC KỲ [cite: 2026-01-24] */}
        <div>Học kỳ: 
          <select style={{ marginLeft: '5px', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            <option>Học kỳ 1</option>
            <option>Học kỳ 2</option>
            <option>Cả năm (CN)</option>
          </select>
        </div>

        <button onClick={() => alert("Robot AI đang quét phổ điểm...")} style={{ marginLeft: 'auto', background: '#8b5cf6', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '12px', fontWeight: '950', cursor: 'pointer' }}>🧠 NHẬN XÉT AI TOÀN LỚP</button>
      </div>

      {/* BẢNG ĐIỂM (Giữ nguyên header cũ đã chuẩn) */}
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ background: '#075985', color: '#fff' }}>
            <th rowSpan={2} style={{ border: '1px solid #fff', padding: '10px' }}>STT</th>
            <th rowSpan={2} style={{ border: '1px solid #fff', padding: '10px' }}>Họ tên</th>
            <th colSpan={2} style={{ border: '1px solid #fff', padding: '10px' }}>ĐĐGtx</th>
            <th rowSpan={2} style={{ border: '1px solid #fff', padding: '10px' }}>ĐĐGgk</th>
            <th rowSpan={2} style={{ border: '1px solid #fff', padding: '10px' }}>ĐĐGck</th>
            <th rowSpan={2} style={{ border: '1px solid #fff', padding: '10px' }}>ĐTBMhk</th>
            <th style={{ border: '1px solid #fff', padding: '10px' }}>Nhận xét AI</th>
          </tr>
          <tr style={{ background: '#075985', color: '#fff' }}>
            <th style={{ border: '1px solid #fff', padding: '5px' }}>1</th>
            <th style={{ border: '1px solid #fff', padding: '5px' }}>2</th>
            <th style={{ border: '1px solid #fff', padding: '10px' }}>Nội dung tự động</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan={8} style={{ padding: '80px', color: '#94a3b8' }}>Vui lòng chọn Lớp và Môn để nạp dữ liệu.</td></tr>
        </tbody>
      </table>
    </div>
  );
}