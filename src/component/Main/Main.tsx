import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import OrderContent from '../OrderContent';
import Steppers from '../Steppers';
import Form from '../Form';

const styles = {
  mainBlock: {
    height: '100%',
  },
  leftBlock: {
    paddingTop: '120px',
    width: '20%',
  },
  rightBlock: {
    width: '52%',
  },
  rightTopBlock: {
    height: '120px',
    display: 'flex',
  },
  rightBottomBlock: {
    height: 'calc(100vh - 120px)',
  }
};

const Main = (props: any) => {
  const { classes, className } = props;
  return (
    <Grid container justify="center" className={clsx(classes.mainBlock, className)}>
      <Grid item className={clsx(classes.leftBlock, className)}>
        <OrderContent />
      </Grid>
      <Grid item className={clsx(classes.rightBlock, className)}>
        <Grid item className={clsx(classes.rightTopBlock, className)}>
          <Steppers />
        </Grid>
        <Grid item className={clsx(classes.rightBottomBlock, className)}>
          <Form />
        </Grid>
      </Grid>
      <div style={{ position: 'absolute', bottom: 0, zIndex: -1, width: '100%', height: '140px', backgroundColor: '#8DEFCB', }} />
    </Grid>
  );
};

export default withStyles(styles)(Main);
