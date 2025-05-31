import './AccountInfo.scss'

export default function AccountInfo(props) {
    /** Data Props */
    const { title, desc, icon } = props;

    return (
        <article className="account-info">
            <div className="account-info__icon">
                <img src={icon} alt="" className="icon" />
            </div>
            <div>
                <h3 className="account-info__title">{title}</h3>
                <p className="account-info__desc">{desc}</p>
            </div>
        </article>
    )
}
