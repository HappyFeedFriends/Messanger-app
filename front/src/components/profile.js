import React, { Component, StrictMode } from 'react';
import '../component_styles/ChatList.css'
import ChatSelector from './chat_block';


class Profile extends Component{
    render(){
        return (
        <div className="row">
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

            <div className="ChatContentList column">

                <div className="HeaderChatList">
                    <div className="UserIcon row ChatList">
                        <img src="img/user_avatars/default.png"/>
                        <span>HappyFeedFriends</span>
                    </div>
                </div>
                
                <div className="Messange_container">

                    <div className="MessageBlock row">

                        <div className="UserIcon row">
                            <img src="img/user_avatars/default.png"/>
                        </div>
                        <div className="MessageContainer">
                            <div className="MessageHeader row">
                                <span className="AuthorName">HappyFeedFriends</span>
                                <span className="dateMessage">24:32</span>
                            </div>
                            <div className="MessageContent column">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi consequuntur nihil pariatur voluptates earum sit dignissimos cum porro aspernatur sunt ad ducimus, qui nemo inventore vel, magni sint impedit.
                            </div>
                        </div>
                    </div>

                    <div className="MessageBlock row IsAuthor">

                        <div className="UserIcon row">
                            <img src="img/user_avatars/default.png"/>
                        </div>
                        <div className="MessageContainer">
                            <div className="MessageHeader row">
                                <span className="AuthorName">HappyFeedFriends</span>
                                <span className="dateMessage">24:32</span>
                            </div>
                            <div className="MessageContent column">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi consequuntur nihil pariatur voluptates earum sit dignissimos cum porro aspernatur sunt ad ducimus, qui nemo inventore vel, magni sint impedit.
                            </div>
                        </div>
                    </div>

                    <div className="MessageBlock row IsAuthor">

                        <div className="UserIcon row">
                            <img src="img/user_avatars/default.png"/>
                        </div>
                        <div className="MessageContainer">
                            <div className="MessageHeader row">
                                <span className="AuthorName">HappyFeedFriends</span>
                                <span className="dateMessage">24:32</span>
                            </div>
                            <div className="MessageContent column">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi consequuntur nihil pariatur voluptates earum sit dignissimos cum porro aspernatur sunt ad ducimus, qui nemo inventore vel, magni sint impedit.
                            </div>
                        </div>
                    </div>

                    <div className="MessageBlock row IsAuthor">

                        <div className="UserIcon row">
                            <img src="img/user_avatars/default.png"/>
                        </div>
                        <div className="MessageContainer">
                            <div className="MessageHeader row">
                                <span className="AuthorName">HappyFeedFriends</span>
                                <span className="dateMessage">24:32</span>
                            </div>
                            <div className="MessageContent column">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi consequuntur nihil pariatur voluptates earum sit dignissimos cum porro aspernatur sunt ad ducimus, qui nemo inventore vel, magni sint impedit.
                            </div>
                        </div>
                    </div>


                    <div className="MessageBlock row">

                        <div className="UserIcon row">
                            <img src="img/user_avatars/default.png"/>
                        </div>
                        <div className="MessageContainer">
                            <div className="MessageHeader row">
                                <span className="AuthorName">HappyFeedFriends</span>
                                <span className="dateMessage">24:32</span>
                            </div>
                            <div className="MessageContent column">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi consequuntur nihil pariatur voluptates earum sit dignissimos cum porro aspernatur sunt ad ducimus, qui nemo inventore vel, magni sint impedit.
                            </div>
                        </div>
                    </div>


                    <div className="MessageBlock row">

                        <div className="UserIcon row">
                            <img src="img/user_avatars/default.png"/>
                        </div>
                        <div className="MessageContainer">
                            <div className="MessageHeader row">
                                <span className="AuthorName">HappyFeedFriends</span>
                                <span className="dateMessage">24:32</span>
                            </div>
                            <div className="MessageContent column">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi consequuntur nihil pariatur voluptates earum sit dignissimos cum porro aspernatur sunt ad ducimus, qui nemo inventore vel, magni sint impedit.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="TextInputForChat row">
                    <div className="AddFile"/> 
                    <input placeholder="Начни своё сообщение с улыбки :)"/>
                    <div className="SendBtn" >SEND</div>

                </div>

            </div>

        </div>
        )
    }
}

export default Profile;