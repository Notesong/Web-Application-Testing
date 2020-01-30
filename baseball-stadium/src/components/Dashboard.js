import React from 'react';

function Dashboard({ balls, strikes, setBalls, setStrikes }) {
    function hit() {
        setBalls(0);
        setStrikes(0);
    }
    
    function strike() {
        if(strikes === 2) {
            setBalls(0);
            setStrikes(0);
        } else {
            setStrikes(strikes + 1);
        }
    }
    
    function ball() {
        if(balls === 3) {
            setBalls(0);
            setStrikes(0);
        } else {
            setBalls(balls + 1);
        }
    }

    function foul() {
        if(strikes === 0 || strikes === 1) {
            setStrikes(strikes + 1);
        }
    }

    return (
        <div className="dashboard">
            <button onClick={hit}>Hit</button>
            <button onClick={strike}>Strike</button>
            <button onClick={ball}>Ball</button>
            <button onClick={foul}>Foul</button>
        </div>
    );
}

export default Dashboard;