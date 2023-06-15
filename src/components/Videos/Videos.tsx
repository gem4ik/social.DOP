import React, {useState} from 'react';
import './Videos.css'



export const Videos = () => {

    const [like, setLike] = useState(0)
    // @ts-ignore
    const myMarquee = <marquee behavior="alternate" scrollamount='25' direction="right">{`лайков: ${like}`}</marquee>
    return (
        <div>
            <div className='video-like'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BrkBvksOIls"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                <img
                    onClick={()=>setLike(like+1)}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/langru-240px-Bot%C3%B3n_Me_gusta.svg.png"
                     alt="LIKE"
                />
            </div>
            {(like>0) &&
                <div className='marquee'>
                    {myMarquee}
                </div>}
        </div>
    );
};