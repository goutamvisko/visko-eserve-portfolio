import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, children, maxWidth = "max-w-6xl" }) {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        className={`
        w-full             
        sm:w-full           
        md:w-full          
        lg:w-auto          
        ${maxWidth} 
        mx-auto rounded-xl shadow-lg overflow-y-auto
      `}
      >
        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
