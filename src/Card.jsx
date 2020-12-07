import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="top">
                    <h1> {props.firstteam} <span style={{ color: "crimson" }}>VS</span> {props.secondteam}  </h1>
                </div>
                <div>
                    <h1 className="toss"> {props.toss} won the toss.</h1>
                </div>
                <div className="bottom">
                    <h2 ><span>Date:</span>{new Date(props.time).toLocaleDateString()} | <span>Start Time :</span>  {new Date(props.time).toLocaleTimeString()} </h2>
                </div>
                <div>
                    <h1 className="toss"> {props.winner} won the match.</h1>
                </div>
            </div>
        </>
    );
}

export default Card;