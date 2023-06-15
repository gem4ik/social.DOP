import React, {useState} from 'react';
import style from './App.module.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {Settings} from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {FriendsType, MessagesType, Poststype, StoreType} from "./components/Data/Store";
import {v1} from "uuid";

type AppPropsType = {
    Store: StoreType
}

function App(props: AppPropsType) {

    let [posts, setPosts] = useState<Poststype[]>(props.Store.getState().Profile.posts)
    let [messages, setMessages] = useState<MessagesType[]>(props.Store.getState().Message.messages)
    let [friends, setFriends] = useState<FriendsType[]>(props.Store.getState().Friends)

    function addPost(value: string) {
        const newPost: Poststype = {id: v1(), post: value, likeValue: 0}
        setPosts([newPost, ...posts])
    }

    function addMessage(value: string) {
        const newMessage: MessagesType = {id: v1(), message: value}
        setMessages([...messages, newMessage])
    }
    function addFriends(name: string, description: string) {
        const newFriend: FriendsType = {id:v1(), name, description}
        setFriends([...friends, newFriend])
    }

    return (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <div>
                    <Header/>
                    <Nav/>
                </div>
                <div className={style.content}>
                    <Route path="/profile"
                           render={() => <Profile
                               //--------------------------------------------------------------
                               posts={posts}
                               addPost={addPost}
                               //--------------------------------------------------------------
                           />}>
                    </Route>
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs
                            //--------------------------------------------------------------
                            messages={messages}
                            addMessage={addMessage}
                            //--------------------------------------------------------------
                            users={props.Store.getState().Message.dialogs}
                        />}>
                    </Route>
                    <Route path="/music"
                           render={() => <Music/>}>
                    </Route>
                    <Route path="/friends"
                           render={() => <Friends
                               friends={props.Store.getState().Friends}
                           />}>
                    </Route>
                    <Route path="/settings"
                           render={() => <Settings/>}>
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
