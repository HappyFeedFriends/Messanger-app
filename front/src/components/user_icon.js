import React,{ Component } from 'react';
import { connect } from 'react-redux';
import cfg from '../config/general.json'

class UserIcon extends Component {

    render(){

        return (
        <div className={"UserIcon OnlineState" + Number(this.props.chatUsers[ this.props.user_id ].IsOnline)}>
            <img src={ cfg.img_avatar_path + this.props.chatUsers[ this.props.user_id ].avatar }/>
        </div>
        )

    }

}

const mapStateToProps = state => {
    return { 
        chatUsers:state.chats.chatUsers, 
    };
};

export default connect(
    mapStateToProps,
    { }
)(UserIcon);