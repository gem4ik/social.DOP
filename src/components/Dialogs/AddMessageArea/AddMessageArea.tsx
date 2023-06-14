
import React from 'react';

export type AddPostAreaType ={
    changeInputMessageValue: (value: string)=> void
    inputValue: string
    addMessage: ()=>void
}

export const AddMessageArea = (props: AddPostAreaType) => {
    return (
        <div>
            <input
                onChange={(e)=>props.changeInputMessageValue(e.currentTarget.value)}
                value={props.inputValue}
            />
            <button onClick={props.addMessage}>add message</button>
        </div>
    );
};