import React from 'react';
//==========Material UI imports============
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height:'100%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default function NewsCards({article}) {
  const classes = useStyles();
  function windowOpen(url, name, specs) {
    if (!url.match(/^https?:\/\//i)) {
        url = 'http://' + url;
    }
    return window.open(url, name, specs);
}
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="New img"
          height="140"
          image={article.imageUrl}
          title="New img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.bot}>
        <Button size="small" color='primary' className={classes.button} onClick={()=>windowOpen(article.sourceUrl,article.provider._id, "_blank")}>
         Ir a la Noticia Completa
        </Button>
      </CardActions>
    </Card>
  );
}