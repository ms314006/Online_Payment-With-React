import React, { StatelessComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: 200,
    width: 200,
    borderRadius: '50%',
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
});

const Main = () => {
  const classes = useStyles({});
  return (
    <Button
      classes={{
        root: classes.root,
      }}
      variant="contained"
      color="primary"
    >
      Hello World
    </Button>
  );
};

export default Main;