import React from "react";
import CardItem from "./Card/Card";
import {Grid} from "@material-ui/core";

const Cards = (props) => {
    const {confirmed, deaths, recovered, lastUpdate} = props.data;
    let element = <p>Loading....</p>
    if (props.data.confirmed) {
        element = (<React.Fragment>
                <Grid item xs={12} sm={4}><CardItem value={confirmed.value} cardTitle="Infected"
                                                    cardDescription="Number of active cases " lastUpdate={lastUpdate}/></Grid>
                <Grid item xs={12} sm={4}><CardItem value={recovered.value} cardTitle="Recovered"
                                                    cardDescription="Number of recoveries" lastUpdate={lastUpdate}/></Grid>
                <Grid item xs={12} sm={4}><CardItem value={deaths.value} cardTitle="Deaths"
                                                    cardDescription="Number of deaths caused" lastUpdate={lastUpdate}/></Grid>
            </React.Fragment>
        )
    }
    return (
        <Grid container spacing={3}>
            {element}
        </Grid>
    )
};

export default Cards;
