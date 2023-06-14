import React from 'react';

export type AddPostAreaType ={
    changeInputPostValue: (value: string)=> void
    inputValue: string
    addPost: ()=>void
}

export const AddPostArea = (props: AddPostAreaType) => {
    return (
        <div>
            <input
                onChange={(e)=>props.changeInputPostValue(e.currentTarget.value)}
                value={props.inputValue}
            />
            <button onClick={props.addPost}>add post</button>
        </div>
    );
};