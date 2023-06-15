import React, {useRef, useState} from 'react';
import './Music.css';

type AudioProps = {
    src?: string;
}

export const Music: React.FC<AudioProps> = ({ src: defaultSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        setIsPlaying(!isPlaying);
        if (isPlaying) audio.pause();
        else audio.play();
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume / 100;
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseInt(event.target.value, 10);
        setCurrentTime(newTime);
        if (audioRef.current) audioRef.current.currentTime = newTime;
    };

    const addAudio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        audioRef.current!.src = URL.createObjectURL(file);
        setIsPlaying(true);
    };

    const src = defaultSrc || '';

    const minutes = Math.floor((audioRef.current?.duration ?? 0) / 60);
    const seconds = Math.floor((audioRef.current?.duration ?? 0) % 60);
    const durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const selectedMinutes = Math.floor(currentTime / 60) || 0;
    const selectedSeconds = Math.floor(currentTime % 60) || 0;
    const selectedTimeText = `${selectedMinutes}:${selectedSeconds < 10 ? '0' : ''}${selectedSeconds}`;

    return (
        <div className="audio-wrapper">
            <div className="audio-play-button" onClick={togglePlay}>
                {isPlaying ? '❚❚' : '▶'}
            </div>
            <div className="audio-progress-bar">
                <input
                    type="range"
                    min={0}
                    max={audioRef.current?.duration}
                    value={currentTime}
                    onChange={handleTimeChange}
                />
                <div className="audio-selected-time">{selectedTimeText}</div>
                <div className="audio-duration-time">{durationText}</div>
            </div>
            <div className="audio-volume-bar">
                <input type="range" min={0} max={100} value={volume} onChange={handleVolumeChange} />
            </div>
            <input type="file" accept="audio/*" onChange={addAudio} />
            <audio ref={audioRef} src={src} />
        </div>
    );
};


// import "./Music.css"
// import {useRef, useState} from "react";
//
// export const Music = () => {
//
//         const src = ''
//
//         const [isPlaying, setIsPlaying] = useState(false);
//         const [volume, setVolume] = useState(50);
//         const audioRef = useRef<HTMLAudioElement>(null);
//
//         const togglePlay = () => {
//             const audio = audioRef.current;
//             if (!audio) return;
//
//             setIsPlaying(!isPlaying);
//             if (isPlaying) audio.pause();
//             else audio.play();
//         };
//
//         const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//             const newVolume = parseInt(event.target.value, 10);
//             setVolume(newVolume);
//             if (audioRef.current) audioRef.current.volume = newVolume / 100;
//         };
//
//         const addAudio = (event: React.ChangeEvent<HTMLInputElement>) => {
//             const file = event.target.files?.[0];
//             if (!file) return;
//
//             const url = URL.createObjectURL(file);
//             audioRef.current!.src = url;
//         };
//         return (
//             <div>
//                 <audio ref={audioRef} src={src}/>
//                 <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//                 <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange}/>
//                 <input type="file" accept="audio/*" onChange={addAudio}/>
//             </div>
//         )
//     }