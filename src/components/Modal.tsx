import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export type ModalHandle = {
  open: () => void;
};

const Modal = forwardRef(
  ({ children }: { children?: React.ReactNode }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current!.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="backdrop:bg-stone-900/50 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>Close</Button>
        </form>
      </dialog>,
      document.getElementById("modal-root") as Element
    );
  }
);

export default Modal;
