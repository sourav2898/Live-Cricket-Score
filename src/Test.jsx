import React from 'react';
import Card from './Card';

const Test = (props) => {
    const data = props.data;
    return (
        <>
            <h1 style={{ textAlign: "center", margin: "10px" }}> Welcome to Live Test Score </h1>

            {
                data.map((value)=>{
                   return <Card key={value["unique_id"]}
                    firstteam = {value["team-1"]}
                    secondteam = {value["team-2"]}
                    time = {value["dateTimeGMT"]}
                    winner = {value["winner_team"]}
                    toss = {value["toss_winner_team"]}
                     />
                })
            }
        </>
    );
}

export default Test;