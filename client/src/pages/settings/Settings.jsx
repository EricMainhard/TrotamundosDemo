import './settings.css';
import React from 'react';

function Settings(){
    return(
        <div className='settings container'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className='settingsUpdate'>Update your account</span>
                    <span className='settingsUpdate'>Delete account</span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture </label>
                    <div className="settingsProfilePicture">
                        <img src="/img/avatar.jpg"/>
                        <label htmlFor="inputFileSettings">
                            <i className="settingProfileIcon fas fa-user-circle"></i>
                            Change image
                        </label>
                        <input type="file" id="inputFileSettings" style={{display:'none'}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="email" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className='settingsButtonUpdate'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Settings;