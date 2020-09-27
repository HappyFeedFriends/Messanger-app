import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Loader from './loader';
import cfg from '../config/general.json'
import MessageBlock from './MessageBlock';
import { ChatsAddMessageForChat, ChatsChangeChatSelect, RequestChatInfo } from '../redux/actions';
import UserIcon from './user_icon';

class ChatContainer extends Component {

    
    constructor(props){
        super(props)

        this.state = {
            text:'',
        }
    }

    componentDidMount(){

        this.props.socket.on('on_message',(data) => {
            console.log(data)
            this.props.ChatsAddMessageForChat(data.message_channel_id,data)
            this.scrollToBottom()
        })

        this.props.ChatsChangeChatSelect(this.props.location.pathname.split('/').pop())
    }

    scrollToBottom = () => {
        this.myRef.scrollTop = this.myRef.scrollHeight;
    };

    OnSubmitText(e){
        e.preventDefault();
        this.props.socket.emit('send_message',{
            data:this.state.text
        })
        this.refInput.value = ''
    }
    
    onChangeText(e){
        this.setState({
            text:e.target.value
        })
    }

    MessangeBlock(ref){
        this.myRef = this.myRef || ref
        if (this.myRef){
            this.scrollToBottom()
        }
    }

    render(){

        const location = this.props.location.pathname
        const isChannel = location.search('/channel/') !== -1
        const channelID = location.split('/').pop()
        if (!this.props.chatsData[channelID]){
            return <div className="ChatContentList" style={{position:'relative'}}> <Loader/> </div>
        }

        const userIndex = Number(this.props.chatsData[channelID].users[0] == this.props.user_id)
        return !isChannel 
        ? <div className="ChatContentList" style={{position:'relative'}}> <Loader/> </div>
        : (
            <div className="ChatContentList column">

            <div className="HeaderChatList">
                <div className="row ChatList">
                    <UserIcon user_id={this.props.chatsData[channelID].users[userIndex]} />
                    <span style={{marginLeft:'10px'}}>{ this.props.chatUsers[ this.props.chatsData[channelID].users[userIndex] ].username }</span>
                </div>
            </div>
            
            <div ref={(ref) => this.MessangeBlock(ref)} className="Messange_container">

                {Array.prototype.map.call(this.props.chatsData[channelID].messages, (value,key) => {
                    return <MessageBlock key={key} text={value.content} author_id={value.author_id} isAuthor={value.author_id == this.props.user_id}/>;
                }, this)}


            </div>

            <form onSubmit={(e) => this.OnSubmitText(e)} className="TextInputForChat row">
                <div className="AddFile"/> 
                <input ref={(ref) => {this.refInput = this.refInput || ref}} onChange={(e) => this.onChangeText(e)} className="inputText" placeholder="Начни своё сообщение с улыбки :)"/>
                <input className="SendBtn" type="submit" value=""/>

            </form>

        </div>
        )
    }

}

const mapStateToProps = state => {
    return { 
        chatsData:state.chats.chatsData, 
        chatUsers:state.chats.chatUsers, 
        user_id:state.user.id,
        socket:state.app.socket,
    };
};

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        { ChatsAddMessageForChat,ChatsChangeChatSelect }
    ),
)(ChatContainer);