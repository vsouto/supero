import React, { useState } from 'react';
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import tasklistImg from '../assets/tasklist.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Task({ task }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  
  return (
    <li>
      <div className="view">
        <input className="toggle"
               type="checkbox" />
        <label>
          {task.title}
        </label>
        <button className="destroy" onClick={() => setOpen(true)}/>
        <Dialog
          fullWidth={true}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={tasklistImg}
                  title={task.modelo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4">
                    {task.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {task.createdDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary" autoFocus>
              Thanks
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </li>
  )
}
