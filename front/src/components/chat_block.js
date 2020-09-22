import React,{ Component } from 'react';

class ChatSelector extends Component{

    constructor(s){
        super(s)

        this.state = {
            select:false,
        }
    }

    SelectChat(){
        this.setState({
            select:!this.state.select,
        })
    }


    render(){
        return (
            <div onClick={() => this.SelectChat()} className={ "ChatContainer row " + (this.state.select ? 'select' : '' ) }>
                <div className="UserIcon">
                    <img src="img/user_avatars/default.png"/>
                </div>

                <div className="column rightUserBlock">
                    <div className="row UserHeader">
                        <span className="UserName_list">
                            HappyFeedFriends
                        </span>

                        <span>
                            00:00
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