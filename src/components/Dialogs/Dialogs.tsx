import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {useNavigate} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDateType, MassagePageType, MessagesDateType} from '../redux/state';

type DialogsPropsType={
    messagesPage: MassagePageType
    updateMessageText: (newMessage: string)=> void
    addMessage: ()=> void
}

export const Dialogs = (props: DialogsPropsType) => {
    const navigate = useNavigate();
    const addMessageHandler =()=> {
        props.addMessage()
    }
    const changeMessageHandler =(e: ChangeEvent<HTMLTextAreaElement>)=> {
            props.updateMessageText(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                  props.messagesPage.dialogsData.map((dialog: DialogsDateType) =>{
                      return(
                          <DialogItem name={dialog.name} id={dialog.id}/>
                      )
                  })
                }


            </div>
            <div className={s.messages}>
                {
                    props.messagesPage.messagesData.map((message: MessagesDateType) =>{
                        return(
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }

            </div>
            <div>
                <textarea
                    placeholder={'Write your Message'}
                    value={props.messagesPage.newMessageText}
                    onChange={changeMessageHandler}
                ></textarea>
                <button
                    onClick={addMessageHandler}
                >send</button>
            </div>
        </div>
    )
}

export default Dialogs;