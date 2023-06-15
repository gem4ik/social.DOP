import "./Friends.css"
import {FriendsType} from "../Data/Store";

export type FriendsPropsType = {
    friends: FriendsType[]
}

export const Friends = (props: FriendsPropsType) => {

    return (
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
    )
}