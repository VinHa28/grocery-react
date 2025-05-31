export default function ModalBottom(props) {
    const { className, style, children } = props;
    return (
        <div className={`modal__bottom ${className}`} style={style}>
            {children}
        </div>
    );
}
