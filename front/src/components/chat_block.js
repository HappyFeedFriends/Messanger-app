import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { ChatAddUserData, ChatsAddChatInfo, RequestChatInfo } from '../redux/actions';
import Loader from './loader';
import cfg from '../config/general.json'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ChatSelector extends Component{

    constructor(s){
        super(s)
        this.state = {
            select:false,
        }

        if (this.props.chatsData[this.props.id]) return
        this.props.RequestChatInfo(this.props.id)

    }

    SelectChat(){
        this.setState({
            select:!this.state.select,
        })
        this.props.history.push('/profile/channel/' + this.props.id);
    }


    render(){
        if (!this.props.chatsData[this.props.id])
            return <div className="ChatContainer row" style={{position:'relative'}} > <Loader/> </div>
        const messages = this.props.chatsData[this.props.id].messages
        const userIndex = Number(this.props.chatsData[this.props.id].users[0] == this.props.user_id)
        return (
            <div onClick={() => this.SelectChat()} className={ "ChatContainer row " + (this.state.select ? 'select' : '' ) }>
                <div className="UserIcon">
                    <img src={ cfg.img_avatar_path +  this.props.chatUsers[ this.props.chatsData[this.props.id].users[userIndex] ].avatar }/>
                </div>

                <div className="column rightUserBlock">
                    <div className="row UserHeader">
                        <span className="UserName_list">
                            { this.props.chatUsers[ this.props.chatsData[this.props.id].users[userIndex] ].username }
                        </span>
                        <span>
                            00:00
                        </span>
                    </div>
                    <div className="User_last_message">
                        <div>
                            {messages[messages.length - 1] && messages[messages.length - 1].content || ''}
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        chatsData:state.chats.chatsData, 
        chatUsers:state.chats.chatUsers, 
        user_id:state.user.id,
    };
};

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        { ChatAddUserData,ChatsAddChatInfo,RequestChatInfo }
    )
)(ChatSelector)
