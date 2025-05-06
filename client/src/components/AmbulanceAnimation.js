import React from 'react';
import '../styles/AmbulanceAnimation.css';

function AmbulanceScene() {
    return (
        <div className="ambulance-container">
            <div className="road">
                <div className="ambulance">
                    <div className="light"></div>
                    <div className="sirens">
                        <div className="siren red"></div>
                        <div className="siren blue"></div>
                    </div>
                    <div className="window"></div>
                    <div className="cross"></div>
                    <div className="wheel front"></div>
                    <div className="wheel back"></div>
                </div>
            </div>
        </div>
    );
}

export default AmbulanceScene;
