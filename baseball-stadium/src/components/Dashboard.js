import React from 'react';

function Dashboard({ setBalls, setStrikes }) {
    function hit() {

    }
    
    function strike() {

    }
    
    function ball() {

    }

    function foul() {

    }

    return (
        <div className="dashboard">
            <button onclick={hit}>Hit</button>
            <button onclick={strike}>Strike</button>
            <button onclick={ball}>Ball</button>
            <button onclick={foul}>Foul</button>
        </div>
    );
}

export default Dashboard;