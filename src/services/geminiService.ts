import { GoogleGenerativeAI } from "@google/generative-ai";

// ⚠️ Thầy cô dán API KEY lấy từ Google AI Studio vào đây
// Lưu ý: Khi đưa lên Vercel, hãy dùng Environment Variable (VITE_GEMINI_KEY) để bảo mật
const API_KEY = import.meta.env.VITE_GEMINI_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * SỬ DỤNG GEMINI 2.5 FLASH - TỐI ƯU CHO VERCEL & MIỄN PHÍ
 * Chuyên quét TKB với tính ổn định tuyệt đối
 */
export const analyzeTKBWithGemini25 = async (base64Image: string) => {
  try {
    // Chốt mô hình 2.5 Flash theo yêu cầu của thầy cô
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Bạn là trợ lý ảo chuyên trách số hóa học đường. 
      Hãy phân tích ảnh Thời khóa biểu này và trích xuất dữ liệu.
      Yêu cầu:
      1. Trích xuất: Thứ, Tiết, Môn, Lớp.
      2. Trả về mảng JSON duy nhất: [{"thu": "Thứ...", "tiet": 1, "mon": "...", "lop": "..."}]
      3. Chỉ trả về mã JSON, không giải thích.
    `;

    const imagePart = {
      inlineData: {
        data: base64Image.split(",")[1],
        mimeType: "image/jpeg",
      },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    // Làm sạch chuỗi để parse JSON an toàn
    const cleanJson = text.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanJson);

  } catch (error) {
    console.error("Lỗi Gemini 2.5 Flash:", error);
    throw new Error("AI 2.5 đang bận hoặc sai API Key. Thầy cô kiểm tra lại nhé!");
  }
};