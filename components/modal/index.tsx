import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import IconClose from "@public/images/modal/close.svg";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  closeIcon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  closeIconClassName?: string;
  isForceNormal?: boolean;
  innerStyle?: React.CSSProperties;
  innerClassName?: string;
  isMaskClose?: boolean;
  isShowCloseIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  closeIcon,
  style,
  className,
  closeIconClassName,
  isForceNormal,
  innerStyle,
  innerClassName,
  isMaskClose = true,
  isShowCloseIcon = true
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMaskClose) return;
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };
  return ReactDOM.createPortal(
    (
      <AnimatePresence mode="wait">
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] ${className}`}
          style={style}
          onClick={handleBackdropClick}
        >
          <div
            className={`rounded-lg relative ${innerClassName}`}
            style={innerStyle}
          >
            {isShowCloseIcon && (closeIcon || onClose) ? (
              <button
                onClick={onClose}
                className={`absolute top-5 right-5 cursor-pointer z-[100] ${closeIconClassName}`}
              >
                <IconClose />
              </button>
            ) : null}
            {children}
          </div>
        </div>
      </AnimatePresence>
    ) as any,
    document.body
  ) as unknown as React.ReactPortal;
};

export default Modal;
