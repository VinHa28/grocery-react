import React from 'react'
import './AccountInfo.scss'

export default function AccountInfo({
    title='',
    desc='',
    icon=''
}) {
    return (
        <article class="account-info">
            <div class="account-info__icon">
                <img src={icon} alt="" class="icon" />
            </div>
            <div>
                <h3 class="account-info__title">{title}</h3>
                <p class="account-info__desc">{desc}</p>
            </div>
        </article>
    )
}
