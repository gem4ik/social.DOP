import React from 'react';
import style from './App.module.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {StoreType} from "./components/Data/Store";

type AppPropsType = {
    Store: StoreType
}

function App(props: AppPropsType) {
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
                               profile={props.Store.getState().Profile}
                               dispatch={props.Store.dispatch.bind(props.Store)}
                           />}>
                    </Route>
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs
                            message={props.Store.getState().Message}
                            dispatch={props.Store.dispatch.bind(props.Store)}
                        />}>
                    </Route>
                    <Route path="/music"
                           render={() => <Music/>}>
                    </Route>
                    <Route path="/news"
                           render={() => <News/>}>
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
