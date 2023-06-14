import React from 'react';
import {Nav} from "./components/Nav/Nav";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import s from './App.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./components/Types/Type";

export type AppPropsType ={
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Nav/>
                <div className={s.content}>
                    <Route path="/profile" render={() => <Profile
                        profile={props.store.State.Profile}
                        changeInputPostValue={props.store.changeInputPostValue.bind(props.store)}
                        addPost={props.store.addPost.bind(props.store)}
                    />}></Route>
                    <Route path='/dialogs' render={()=><Dialogs
                        dialogs={props.store.State.Dialogs}
                        changeInputMessageValue={props.store.changeInputMessageValue.bind(props.store)}
                        addMessage={props.store.addMessage.bind(props.store)}
                    />} ></Route>
                    <Route path='/music' render={()=><Music/>} ></Route>
                    <Route path='/settings' render={()=><Settings/>} ></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;