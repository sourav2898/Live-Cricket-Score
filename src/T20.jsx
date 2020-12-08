import React from 'react';
import Card from './Card';

const T20 = (props) => {
    const data = props.data;
    return (
        <>
            <div className="t20">

                <h1 style={{ textAlign: "center", marginTop: "60px" }}> Welcome to Live T20 Score </h1>

                {
                    data.map((value) => {

                        {/* {
                       return (value["team-1"] == "India") ? (<Card key={value["unique_id"]}
                            firstteam={value["team-1"]}
                            secondteam={value["team-2"]}
                            time={value["dateTimeGMT"]}
                            winner={value["winner_team"]}
                            toss={value["toss_winner_team"]}
                        />) : (" ")
                   } */}
                        return <Card className="t20_card" key={value["unique_id"]}
                            firstteam={value["team-1"]}
                            secondteam={value["team-2"]}
                            time={value["dateTimeGMT"]}
                            winner={value["winner_team"]}
                            toss={value["toss_winner_team"]}
                        />;
                    })
                }
            </div>
        </>
    );
}

export default T20;