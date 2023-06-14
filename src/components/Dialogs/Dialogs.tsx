import React from 'react';
import {DialogsType} from "../Types/Type";
import {Messages} from "./Messages/Messages";
import {Users} from "./Users/Users";
import s from './Dialogs.module.css'
import {AddMessageArea} from "./AddMessageArea/AddMessageArea";

export type DialogsPropsType = {
    dialogs: DialogsType
    changeInputMessageValue: (value: string)=> void
    addMessage: ()=>void
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogsWrapper}>
            <Users users={props.dialogs.dialogs} />
            <Messages messages={props.dialogs.messages} />
            <AddMessageArea
                inputValue={props.dialogs.messageValue}
                changeInputMessageValue={props.changeInputMessageValue}
                addMessage={props.addMessage}
            />
        </div>
    );
};