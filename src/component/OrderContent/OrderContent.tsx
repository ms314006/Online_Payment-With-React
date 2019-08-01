import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  orderPaper: {
    backgroundColor: '#F3F3F3',
    height: '281px',
  }
};

const OrderContent = (props: any) => {
  const { classes, className } = props;
  return (
    <Paper className={clsx(classes.orderPaper, className)}>
      12313
    </Paper>
  )
}

export default withStyles(styles)(OrderContent);
