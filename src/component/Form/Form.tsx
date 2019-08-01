import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  formBlock: {
    height: '100%',
    boxShadow: '0px 2px 13px 0px rgba(0,0,0,0.08)',
  }
};

const OrderContent = (props: any) => {
  const { classes, className } = props;
  return (
    <Paper className={clsx(classes.formBlock, className)}>
      12313
    </Paper>
  )
}

export default withStyles(styles)(OrderContent);
