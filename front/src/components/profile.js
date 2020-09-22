import React, { Component, StrictMode } from 'react';
import '../component_styles/ChatList.css'
import ChatSelector from './chat_block';


class Profile extends Component{
    render(){
        return (
        <StrictMode>
            <nav className="NavChatList">

                <div className="Header">
                    <span>Список Чатов</span>
                </div>

                <div className="SearchContent">
                    <input placeholder="Search"/>
                </div>

                <div className="ChatListContainer column">
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>

                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>
                    <ChatSelector/>

                </div>

            </nav>
        </StrictMode>
        )
    }
}

export default Profile;