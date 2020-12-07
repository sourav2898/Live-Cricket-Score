import React, { Fragment } from 'react';
import Card from './Card';

const T20 = (props) => {
    const data = props.data;
    return (
        <>
            <h1 style={{ textAlign: "center", margin: "10px" }}> Welcome to Live T20 Score </h1>

            {
                data.map((value) => {


                    return <Card key={value["unique_id"]}
                        firstteam={value["team-1"]}
                        secondteam={value["team-2"]}
                        time={value["dateTimeGMT"]}
                        winner={value["winner_team"]}
                        toss = {value["toss_winner_team"]}
                    />


                })
            }
        </>
    );
}

export default T20;