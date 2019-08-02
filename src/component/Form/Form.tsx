import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PayTypeItems from './PayTypeItems';

const styles = {
  formBlock: {
    boxSizing: 'border-box',
    padding: '36px',
    height: '100%',
    boxShadow: '0px 2px 13px 0px rgba(0,0,0,0.08)',
  },
  formTitleBlock: {
    display: 'flex',
    justifyContent: 'center',
  },
  formTitle: {
    background: 'linear-gradient(0deg, #B5FFE4 45%, #FFFFFF 55%)',
    width: '236px',
    textAlign: 'center',
  },
  formContent: {
    marginTop: '80px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
};

const OrderContent = (props: any) => {
  const { classes, className } = props;
  return (
    <Paper className={clsx(classes.formBlock, className)}>
      <div className={clsx(classes.formTitleBlock, className)}>
        <Typography variant="h6" component="h5" className={clsx(classes.formTitle, className)}>
          STEP1. 選擇付款方式
        </Typography>
      </div>
      <div className={clsx(classes.formContent, className)}>
        <PayTypeItems />
      </div>
    </Paper>
  )
}

export default withStyles(styles)(OrderContent);
