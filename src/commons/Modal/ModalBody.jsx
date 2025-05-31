export default function ModalBody(props) {
    const { className, children, style } = props;
    return (
        <div className={`modal__body ${className}`} style={style}>
            {children}
        </div>
    );
}
