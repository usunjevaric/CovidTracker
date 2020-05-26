import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Cards from './components/Cards/Cards';
import {Grid} from "@material-ui/core";
import {fetchGlobalData} from "./api";
import Chart from "./components/Chart/Chart";



class App extends React.Component {
    state = {
        data: {},
        lastUpdate:''
    }

    async componentDidMount() {
        const data = await fetchGlobalData();
        this.setState({data: data,lastUpdate:data.lastUpdate})
    }

    render() {
        return (
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <Navigation/>
                </Grid>
                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item container xs={10}  >
                        <Cards data={this.state.data} lastUpdate={this.state.lastUpdate}/>
                    </Grid>
                    <Grid item  xs={1}/>
                </Grid>
                <Grid item>
                    <Chart />
                </Grid>
            </Grid>
        );
    }
}

export default App;
 