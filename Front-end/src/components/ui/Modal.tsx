import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 rounded-2xl shadow-2xl shadow-purple-300/40 border border-purple-200/50"
          >
            <div className="flex items-center justify-between p-5 border-b border-purple-200/50 bg-gradient-to-r from-purple-100/50 to-blue-100/50 rounded-t-2xl">
              <h3 className="text-xl font-bold bg-gradient-to-r from-bright-purple to-bright-blue bg-clip-text text-transparent">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;