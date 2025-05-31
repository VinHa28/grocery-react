import useBodyScrollLock from "../useBodyScrollLock";

import "./Modal.scss";

export default function Modal(props) {
    const { open = false, setOpen, className, children, style } = props;
    useBodyScrollLock(open);
    return (
        <div
            role="dialog"
            aria-modal="true"
            className={`modal ${open ? "show" : ""} ${className}`}
            style={{ ...style }}
        >
            <div className="modal__content">{children}</div>
            <div
                className="modal__overlay"
                onClick={() => setOpen(false)}
            ></div>
        </div>
    );
}
