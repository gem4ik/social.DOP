import "./Friends.css"
import {FriendsType} from "../Data/Store";
import {useState} from "react";

export type FriendsPropsType = {
    friends: FriendsType[]
    addFriends:(name: string, description: string)=> void
}

export const Friends = (props: FriendsPropsType) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const onClickHandler = () => {
        props.addFriends(name, description)
    }

    return (
        <div className='wrapper'>
            <div className='AddFriendForm'>
                <h3>Let's Add New Friends</h3>
                <div className='inputForm'>
                    <textarea
                        value={name}
                        onChange={(e)=>setName(e.currentTarget.value)}
                        className='textitem'></textarea>
                    <textarea
                        value={description}
                        onChange={(e)=>setDescription(e.currentTarget.value)}
                        className='textitem'></textarea>
                    <button
                        onClick={onClickHandler}
                        className='button'>+</button>
                </div>

            </div>
            <div className='friends-wrapper'>
            {props.friends.map(f=>{
                return(
                    <div className="user-cards" key={f.id}>
                        <div className="card-body">
                            <h5 className="card-title">{f.name}</h5>
                            <p className="card-text">{f.description}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}