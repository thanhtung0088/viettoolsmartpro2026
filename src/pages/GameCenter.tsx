import { useState } from 'react';

export default function GameCenter() {
  const [playing, setPlaying] = useState<any>(null);
  const [index, setIndex] = useState(0);

  const listGames = [
    { n: 'Đường lên đỉnh Olympia', questions: Array.from({length: 10}, (_, i) => ({ q: `Câu hỏi số ${i+1}: Nội dung kiến thức trọng tâm bài ${i+1}...`, a: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'] })) },
    { n: 'Rung chuông vàng', questions: Array.from({length: 10}, (_, i) => ({ q: `Thử thách trí tuệ câu ${i+1}: Bạn hãy chọn đáp án đúng...`, a: ['Đúng', 'Sai', 'Chưa rõ', 'Cả 3 sai'] })) },
    { n: 'Ai là triệu phú', questions: Array.from({length: 10}, (_, i) => ({ q: `Mức thưởng câu ${i+1}: Kiến thức tổng hợp...`, a: ['Đáp án 1', 'Đáp án 2', 'Đáp án 3', 'Đáp án 4'] })) },
  ];

  if (playing) return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2 style={{ color: '#059669' }}>{playing.n}</h2>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '30px', margin: '30px auto', maxWidth: '800px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>CÂU {index + 1}/10: {playing.questions[index].q}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
          {playing.questions[index].a.map((ans: any) => (
            <button key={ans} onClick={() => index < 9 ? setIndex(index + 1) : setPlaying(null)} style={{ padding: '20px', borderRadius: '15px', border: '2px solid #e2e8f0', cursor: 'pointer', fontWeight: 'bold' }}>{ans}</button>
          ))}
        </div>
      </div>
      <button onClick={() => setPlaying(null)} style={{ color: '#ef4444', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer' }}>THOÁT TRÒ CHƠI</button>
    </div>
  );

  return (
    <div style={{ padding: '30px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
      {listGames.map((g, i) => (
        <div key={i} style={{ background: 'white', padding: '30px', borderRadius: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <div style={{ fontSize: '60px' }}>{i === 0 ? '🏆' : i === 1 ? '🔔' : '💰'}</div>
          <h3 style={{ fontWeight: '900', margin: '20px 0' }}>{g.n}</h3>
          <button onClick={() => {setPlaying(g); setIndex(0);}} style={{ width: '100%', padding: '15px', background: '#059669', color: '#fff', border: 'none', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>BẮT ĐẦU CHƠI (10 CÂU)</button>
        </div>
      ))}
    </div>
  );
}