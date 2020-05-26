import React from "react";
import {Card, CardContent,Typography, } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import CountUp from "react-countup";
import cx from 'classnames';

const useStyles = makeStyles({
  cardBorder:{
    height:"100%",
    borderBottom: "6px solid #eee"
  },
  infected: {
    borderColor: '#0090ad'
  },
  deaths:{
    borderColor: '#cb464a'
  },
  recovered:{
    borderColor: '#016612'
  }
});

const CardItem = (props) => {
  const classes = useStyles();
  const {value,cardTitle,cardDescription, lastUpdate}=props;
  return (
      <Card variant="outlined" className={cx(classes.cardBorder, classes[cardTitle.toLowerCase()])}>
        <CardContent>
          <Typography variant="h5" component="h2" color={"textSecondary"} gutterBottom>
            {cardTitle}
          </Typography>

          <Typography variant="h6" component="p">
            <CountUp end={value} duration="2" separator="."/>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {new Date(lastUpdate).toLocaleString("en-US", {dateStyle:'medium', timeStyle: 'short'})}
          </Typography>
          <Typography variant="body1" component="p" color="textPrimary">
            {cardDescription}
          </Typography>
        </CardContent>
      </Card>
  )
};

export default CardItem;
