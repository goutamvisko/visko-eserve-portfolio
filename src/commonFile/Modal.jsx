// Modal.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children, maxWidth = "max-w-3xl" }) {
  // Prevent body scroll while modal is open
  useEffect(() => {
    const original = {
      overflow: document.body.style.overflow,
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original.overflow;
    }
    return () => {
      document.body.style.overflow = original.overflow;
    };
  }, [isOpen]);

  useEffect(() => {
    // Close on ESC
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null; // SSR safety
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-root"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal panel */}
          <motion.div
            className={`relative bg-white rounded-2xl shadow-xl w-full ${maxWidth} mx-4 max-h-[90vh] overflow-hidden flex flex-col`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()} // prevent backdrop close on inner click
          >
            {/* Close button (top-right) */}
            <div className="flex justify-end p-3">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-gray-500 hover:text-gray-800 rounded-full p-1"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content */}
            <div className="p-4 overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
