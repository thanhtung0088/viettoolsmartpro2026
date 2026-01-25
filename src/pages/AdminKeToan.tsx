import React, { useState } from 'react';

const AdminKeToan = () => {
  return (
    <div style={{ padding: '30px', background: '#fff', minHeight: '100%' }}>
      {/* HEADER & AI ASSISTANT */}
      <div style={{ display: 'flex', gap: '25px', marginBottom: '30px' }}>
        <div style={{ flex: 1, background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', padding: '30px', borderRadius: '20px', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>💰 KẾ TOÁN TÀI VỤ</h2>
          <p style={{ opacity: 0.8, fontSize: '14px' }}>Quản lý ngân sách, lương và công khai tài chính theo Thông tư hiện hành.</p>
          
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
            <button style={{ background: '#fbbf24', color: '#1e293b', border: 'none', padding: '12px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>📊 BÁO CÁO TÀI CHÍNH</button>
            <button style={{ background: '#fff', color: '#1e293b', border: 'none', padding: '12px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>🧾 QUẢN LÝ HÓA ĐƠN</button>
            <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>💸 BẢNG LƯƠNG CM</button>
          </div>
        </div>

        {/* AI ASSISTANT BOX */}
        <div style={{ width: '350px', background: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '20px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <div style={{ background: '#3b82f6', color: 'white', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>AI</div>
            <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Trợ lý Tài chính SmartPro</span>
          </div>
          <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', fontSize: '13px', color: '#1e40af', marginBottom: '15px', border: '1px solid #dbeafe' }}>
            "Chào thầy cô, tôi đã kiểm tra dự toán quý này. Có vẻ khoản chi cho 'Thiết bị dạy học' đang vượt mức 5%. Thầy cô cần tôi lập biên bản điều chỉnh không?"
          </div>
          <input 
            type="text" 
            placeholder="Hỏi trợ lý về nghiệp vụ kế toán..." 
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
          />
        </div>
      </div>

      {/* DANH SÁCH NGHIỆP VỤ CHI TIẾT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {['Dự toán ngân sách', 'Hồ sơ quyết toán', 'Quản lý học phí', 'Công khai tài chính'].map((item, idx) => (
          <div key={idx} style={{ padding: '20px', background: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
            <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '5px' }}>{item}</h4>
            <span style={{ fontSize: '12px', color: '#10b981' }}>● Đã sẵn sàng xử lý</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminKeToan;