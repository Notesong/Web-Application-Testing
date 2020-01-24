import React from 'react';

function Display({ balls, strikes }) {
  return (
    <div className="display">
        <section>
            <h2>Balls</h2>
            <h3>{balls}</h3>
        </section>
        <section>
           <h2>Strikes</h2>
            <h3>{strikes}</h3> 
        </section>
    </div>
  );
}

export default Display;