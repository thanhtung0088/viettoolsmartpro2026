import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PasteImageContextType {
  image: string | null;
  setImage: (img: string | null) => void;
}

const PasteImageContext = createContext<PasteImageContextType | undefined>(undefined);

export const PasteImageProvider = ({ children }: { children: ReactNode }) => {
  const [image, setImage] = useState<string | null>(localStorage.getItem('pastedBanner'));

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const items = event.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            if (blob) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const base64 = e.target?.result as string;
                setImage(base64);
                localStorage.setItem('pastedBanner', base64);
              };
              reader.readAsDataURL(blob);
            }
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  return (
    <PasteImageContext.Provider value={{ image, setImage }}>
      {children}
    </PasteImageContext.Provider>
  );
};

// ĐÂY LÀ DÒNG QUAN TRỌNG BỊ THIẾU
export const usePasteImage = () => {
  const context = useContext(PasteImageContext);
  if (context === undefined) {
    throw new Error('usePasteImage must be used within a PasteImageProvider');
  }
  return context;
};