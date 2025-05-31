export default function ModalHeading({ className, style, children }) {
    return (
        <h2 className={`modal__heading ${className}`} style={style}>
            {children}
        </h2>
    );
}
