import React from 'react'
import './ProfilePage.scss'
import ProfileSidebar from './ProfileSidebar'
import ProfileContent from './ProfileContent'
import { dataSrc } from '../../data/DataSource'

export default function ProfilePage() {
    return (
        <main className="profile-main">
            <div className="container">
                <div className="profile-container">
                    <div className="row gy-xl-3">
                        <div className="col-3 col-xl-4 col-lg-5 col-md-12">
                            <div className="profile-info profile-info--no-padding">
                                <ProfileSidebar user={dataSrc.user}/>
                            </div>
                        </div>

                        <div className="col-9 col-xl-8 col-lg-7 col-md-12">
                            <div className="profile-info">
                                <ProfileContent user={dataSrc.user}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
