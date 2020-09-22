import React,{ Component } from 'react';

class ChatSelector extends Component{


    render(){
        return (
            <div className="ChatContainer row">
                <div className="UserIcon">
                    <img src="img/user_avatars/default.png"/>
                </div>

                <div className="column rightUserBlock">
                    <div className="row UserHeader">
                        <span className="UserName_list">
                            HappyFeedFriends
                        </span>

                        <span>
                            11:32
                        </span>
                    </div>
                    <div className="User_last_message">
                        <div>
                            Привет другалёк пирожок с вареником! Тут тебе подарок пришёл
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default ChatSelector;