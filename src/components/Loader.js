import React from 'react';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="load-wrap">
                <div className="load">
                    <div className="spinner">
                        <div className="bubble-1"></div>
                        <div className="bubble-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
