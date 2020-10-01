import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function PepperCard({ pepper }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pepper.pic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {pepper.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pepper.species}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            {pepper.user}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Scoville: {pepper.scoville}
          </Typography>
          {pepper.nada ? (
            <Typography gutterBottom variant="p" component="h4">
              Shared By: {pepper.nada}
            </Typography>
          ) : (
            <></>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
