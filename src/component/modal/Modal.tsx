import { FunctionComponent, useEffect } from "react";

import { createPortal } from "react-dom";

import "./modal.css";

export interface ModalProps {
  isShown: boolean;
  onHide: () => void;
  message: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  onHide,
  message,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      onHide();
    }
  };
  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);
  const modal = (
    
    <div className="backdrop" onClick={onHide}>
    
      <div
        className="wrapper"
        aria-modal
        aria-labelledby="Confirmation"
        tabIndex={-1}
        role="dialog"
      >
        <div className="styledModal">
          <header className="header-modal">
            <button
              aria-label="Close"
              type="button"
              className="closeButton"
              onClick={onHide}
            >
              X
            </button>
          </header>
          <div className="content">{message}</div>
        </div>
      </div>
    </div>
  );
  return isShown ? createPortal(modal, document.body) : null;
};
