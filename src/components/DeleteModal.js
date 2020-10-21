import React from 'react';

export default function DeleteModal ({open, children})  {
    if(!open) return null
    return (
        <div>
            <div className="popup-container">
            {children}
            </div>
        </div>
    )
}