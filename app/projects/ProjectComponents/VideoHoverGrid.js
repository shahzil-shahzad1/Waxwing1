// components/RubiksCube.js
import React from 'react';

const RubiksCube = () => {
  return (
    <div className="scene">
      <div className="cube">
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
          <div key={face} className={`face ${face}`}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="block" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RubiksCube;
