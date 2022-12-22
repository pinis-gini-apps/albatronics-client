import React from 'react';

import './system-timer.style.scss';

export const SystemTimer: React.FC = () => {
    return (
    <>
        <div className="countdown">
            <div>
                <span className="number hours">10</span>
                <span>Hours</span>
            </div>
            <div>
                <span className="number minutes">12</span>
                <span>Minutes</span>
            </div>
        </div>
    </>)
}
