import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profileDescription}>
            <div className={s.profileDescriptionDetails}>
                <div className={s.profileDetails}>
                    <img src="https://sun9-46.userapi.com/impg/A4EXnydiJW_Y4jX-5K69pWSJiZek3_Q3Ls5oGg/I98nIVmKlpY.jpg?size=605x807&quality=95&sign=ae89b7966745e7b48af6111a03aefe34&type=album" alt="моё фото"/>
                    <span>Миша Гемский</span>
                </div>
                <div className={s.profileDescriptionDetail}>
                    <span className={s.profileDescriptionDetailLabel}>День рождения:</span>
                    <span className={s.profileDescriptionDetailValue}>23 Октября</span>
                </div>
                <div className={s.profileDescriptionDetail}>
                    <span className={s.profileDescriptionDetailLabel}>Город:</span>
                    <span className={s.profileDescriptionDetailValue}>Минск</span>
                </div>
                <div className={s.profileDescriptionDetail}>
                    <span className={s.profileDescriptionDetailLabel}>Образование:</span>
                    <span className={s.profileDescriptionDetailValue}>средне-специальное</span>
                </div>
                <div className={s.aboutDetails}>
                    <h2 className={s.profileDescriptionTitle}>Обо мне</h2>
                    <p className={s.profileDescriptionText}>Привет! Меня зовут Миша и я учусь в инкубаторе.
                        Я люблю создавать красивые и удобные интерфейсы для веб-сайтов и приложений. В свободное
                        время я сплю</p>
                </div>
            </div>
        </div>
    );
};