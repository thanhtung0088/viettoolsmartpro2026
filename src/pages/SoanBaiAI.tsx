import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Thêm dòng này để nạp não AI

export default function SoanBaiAI() {
  const [tab, setTab] = useState('5512');
  const [form, setForm] = useState({ lop: '6', mon: 'Toán', bai: '', tiet: '1', dt: 'Khá', phamvi: 'Giữa kỳ', thoigian: '45' });
  const [prompt, setPrompt] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [loading, setLoading] = useState(false);

  // DÁN MÃ API KEY CỦA THẦY CÔ VÀO GIỮA HAI DẤU NGOẶC KÉP DƯỚI ĐÂY
  const YOUR_API_KEY = "AIzaSyARfEcOXQpCp8TA9ZZthW7V4-J0eQCj5KU"; 

  const listMon = ["Toán", "Ngữ văn", "Tiếng Anh", "KHTN", "Lịch sử & Địa lý", "GDCD", "Tin học", "Công nghệ", "Âm nhạc", "Mỹ thuật", "GDTC"];

  const generatePrompt = () => {
    let p = "";
    if (tab === '5512' || tab === 'slide') {
      p = `Trong vai một chuyên gia giáo dục và một giáo viên ${form.mon} có trên 20 năm kinh nghiệm, hãy soạn ${tab === '5512' ? 'BÀI GIẢNG 5512' : 'SLIDE BÀI GIẢNG'} theo định hướng chương trình GDPT 2018.\n\n• Môn: ${form.mon}\n• Lớp: ${form.lop}\n• Bài: ${form.bai || '[Tên bài]'}\n• Số tiết: ${form.tiet}\n• Đối tượng học sinh: ${form.dt}\n\nYêu cầu bài giảng gồm:\n1. Mục tiêu bài học (Kiến thức – Năng lực – Phẩm chất)\n2. Chuẩn bị của giáo viên và học sinh\n3. Tiến trình dạy học chi tiết theo từng hoạt động: Khởi động - Hình thành kiến thức - Luyện tập - Vận dụng\n4. Câu hỏi gợi mở cho học sinh\n5. Ví dụ minh họa, bài tập mẫu\n6. Dự kiến khó khăn và cách hỗ trợ\n7. Ghi chú sư phạm cho giáo viên\n\nTrình bày rõ ràng, đúng chuẩn hồ sơ chuyên môn.`;
    } else if (tab === 'decuong') {
      p = `Trong vai một giáo viên chủ nhiệm giàu kinh nghiệm, hãy soạn ĐỀ CƯƠNG ÔN TẬP cho học sinh.\n\n• Môn: ${form.mon}\n• Lớp: ${form.lop}\n• Phạm vi: ${form.phamvi}\n\nYêu cầu:\n1. Hệ thống kiến thức trọng tâm (ngắn gọn, dễ nhớ)\n2. Công thức / quy tắc / nội dung cần thuộc\n3. Các dạng bài thường gặp\n4. Ví dụ minh họa cho từng dạng\n5. Lưu ý khi làm bài để tránh mất điểm\n\nTrình bày dạng gạch đầu dòng, phù hợp phát cho học sinh.`;
    } else {
      p = `Trong vai một tổ trưởng chuyên môn, hãy soạn ĐỀ KIỂM TRA theo Thông tư 22 và định hướng 7991.\n\n• Môn: ${form.mon}\n• Lớp: ${form.lop}\n• Thời gian làm bài: ${form.thoigian} phút\n• Hình thức: Kết hợp Trắc nghiệm & Tự luận\n\nYêu cầu:\n1. Ma trận đề (Nhận biết – Thông hiểu – Vận dụng – Vận dụng cao)\n2. Đề kiểm tra hoàn chỉnh\n3. Đáp án chi tiết\n4. Thang điểm rõ ràng\n5. Nhận xét mức độ phân hóa học sinh.`;
    }
    setPrompt(p);
  };

  // HÀM XỬ LÝ AI THẬT
  const handleStartAI = async () => {
    if (!prompt) return alert("Vui lòng nhấn Tạo Prompt mẫu trước!");
    if (YOUR_API_KEY === "DÁN_MÃ_API_VÀO_ĐÂY") return alert("Thầy cô chưa dán mã API!");

    setLoading(true);
    setAiResult("AI đang phân tích và soạn thảo bài giảng... Thầy cô vui lòng chờ trong giây lát.");
    
    try {
      const genAI = new GoogleGenerativeAI(YOUR_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      setAiResult(result.response.text());
    } catch (error) {
      setAiResult("Lỗi: Không thể kết nối với trí tuệ nhân tạo. Kiểm tra lại API hoặc mạng.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '30px' }}>
        {['5512', 'slide', 'decuong', '7991'].map(id => (
          <button key={id} onClick={() => setTab(id)} style={{ padding: '15px 30px', borderRadius: '18px', border: 'none', fontWeight: '900', cursor: 'pointer', background: tab === id ? '#059669' : '#fff', color: tab === id ? '#fff' : '#64748b', fontSize: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            {id === '5512' ? 'SOẠN KHBD 5512' : id === 'slide' ? 'SOẠN SLIDE PP' : id === 'decuong' ? 'ÔN TẬP ĐỀ CƯƠNG' : 'ĐỀ KIỂM TRA 7991'}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '480px 1fr', gap: '30px' }}>
        <div style={{ background: '#fff', padding: '35px', borderRadius: '35px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '15px', marginBottom: '20px' }}>
            <label style={{fontSize:'12px', fontWeight:'900', color:'#1e293b'}}>LỚP (1-12):
              <select style={{width:'100%', padding:'12px', borderRadius:'12px', background:'#f8fafc', border:'1px solid #e2e8f0', marginTop:'5px'}} onChange={e=>setForm({...form, lop:e.target.value})}>
                {Array.from({length:12},(_,i)=><option key={i+1} value={i+1}>Khối {i+1}</option>)}
              </select>
            </label>
            <label style={{fontSize:'12px', fontWeight:'900', color:'#1e293b'}}>MÔN HỌC (2018):
              <select style={{width:'100%', padding:'12px', borderRadius:'12px', background:'#f8fafc', border:'1px solid #e2e8f0', marginTop:'5px'}} onChange={e=>setForm({...form, mon:e.target.value})}>
                {listMon.map(m=><option key={m}>{m}</option>)}
              </select>
            </label>
          </div>

          <input placeholder="Nhập tên bài học / chủ đề dạy học..." style={{width:'100%', padding:'15px', borderRadius:'15px', border:'1px solid #e2e8f0', marginBottom:'15px'}} onChange={e=>setForm({...form, bai:e.target.value})} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
             <input placeholder="Số tiết/Thời lượng..." style={{padding:'12px', borderRadius:'12px', border:'1px solid #e2e8f0'}} onChange={e=>setForm({...form, tiet:e.target.value, thoigian:e.target.value})} />
             <select style={{padding:'12px', borderRadius:'12px'}} onChange={e=>setForm({...form, dt:e.target.value})}>
                <option>Học sinh Khá</option><option>Trung bình</option><option>Hỗn hợp</option><option>Yếu</option>
             </select>
          </div>

          <button onClick={generatePrompt} style={{ width: '100%', padding: '20px', background: 'linear-gradient(to right, #fbbf24, #f59e0b)', border: 'none', borderRadius: '20px', fontWeight: '900', color: '#fff', marginBottom: '20px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(245,158,11,0.2)' }}>✨ TẠO PROMPT MẪU</button>
          
          <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} style={{ width: '100%', height: '280px', borderRadius: '20px', padding: '20px', border: '1px solid #e2e8f0', fontSize: '13px', lineHeight:'1.5', background:'#f8fafc' }} placeholder="Prompt AI sẽ xuất hiện tại đây..." />
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button style={{ flex: 1, padding: '15px', background: '#f1f5f9', border: 'none', borderRadius: '15px', fontWeight: '900', color:'#475569' }}>➕ TÀI LIỆU/ẢNH</button>
            <button 
                onClick={handleStartAI} 
                style={{ flex: 1.5, padding: '15px', background: loading ? '#94a3b8' : '#059669', color: '#fff', border: 'none', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}
                disabled={loading}
            >
                {loading ? "ĐANG SOẠN..." : "🚀 BẮT ĐẦU SOẠN"}
            </button>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '35px', borderRadius: '35px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', alignItems:'center' }}>
            <span style={{ fontWeight: '900', color: '#059669', fontSize:'18px' }}>📄 BẢN THẢO AI CHI TIẾT</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {tab === 'slide' && <button style={{ background: '#4f46e5', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: '900', cursor: 'pointer' }}>🔗 CANVA</button>}
              <button style={{ background: '#ecfdf5', color: '#059669', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: '900' }}>🖼️ ẢNH AI</button>
            </div>
          </div>
          <div style={{ flex: 1, background: '#1e293b', borderRadius: '25px', padding: '30px', color: '#34d399', fontFamily: 'monospace', overflowY: 'auto', border:'10px solid #334155', whiteSpace:'pre-wrap' }}>
             {aiResult || "> Hệ thống nơ-ron AI đã sẵn sàng. Hãy chọn Prompt mẫu và nhấn 'Bắt đầu soạn'..."}
          </div>
        </div>
      </div>
    </div>
  );
}