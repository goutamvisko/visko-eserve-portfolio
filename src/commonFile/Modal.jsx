import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, children, maxWidth = "max-w-3xl" }) {
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
        className={`bg-white rounded-xl shadow-lg w-full ${maxWidth} max-h-[90vh] overflow-y-auto`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-2 sticky top-0 bg-white z-10">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
