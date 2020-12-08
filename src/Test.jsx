import React from 'react';
import Card from './Card';

const Test = (props) => {
    const data = props.data;
    return (
        <>
            <div className="test">

                <h1 style={{ textAlign: "center", marginTop: "60px", color:"yellow" }}> Welcome to Live Test Score </h1>

                {
                    data.map((value) => {
                        return <Card key={value["unique_id"]}
                            firstteam={value["team-1"]}
                            secondteam={value["team-2"]}
                            time={value["dateTimeGMT"]}
                            winner={value["winner_team"]}
                            toss={value["toss_winner_team"]}
                        />
                    })
                }
            </div>
        </>
    );
}

export default Test;