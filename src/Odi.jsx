import React from 'react';
import Card from './Card';

const Odi = (props) => {
    const data = props.data;
    return (
        <>
            <div className="odi">

                <h1 style={{ textAlign: "center", marginTop: "60px", color:"#fff"}}> Welcome to Live Odi Score </h1>

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

export default Odi;