import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";
import AddNewCard from "./AddNewCard";
import { user } from "data";

import "./ProfilePage.scss";

export default function ProfilePage() {
    const [open, setOpen] = useState(false);
    return (
        <main className="profile-main">
            <div className="container">
                <div className="profile-container">
                    <div className="row gy-xl-3">
                        <div className="col-3 col-xl-4 col-lg-5 col-md-12">
                            <div className="profile-info profile-info--no-padding">
                                <ProfileSidebar user={user} />
                            </div>
                        </div>

                        <div className="col-9 col-xl-8 col-lg-7 col-md-12">
                            <div className="profile-info">
                                {open ? (
                                    <AddNewCard setOpen={setOpen} />
                                ) : (
                                    <ProfileContent
                                        setOpen={setOpen}
                                        user={user}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
