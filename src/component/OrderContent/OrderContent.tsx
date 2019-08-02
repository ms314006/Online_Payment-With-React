import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  orderPaper: {
    boxSizing: 'border-box',
    backgroundColor: '#F3F3F3',
    height: '281px',
    padding: '16px',
  },
  item: {
    margin: '16px 0px',
  },
  title: {
    color: '#5E5E5E',
  },
  content: {
    color: '#000000',
  }
};

const OrderContent = (props: any) => {
  const { classes, className } = props;
  return (
    <Paper className={clsx(classes.orderPaper, className)}>
      <Typography variant="h6" component="h5" >
        訂單資訊
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={clsx(classes.item, className)}>
        <div className={clsx(classes.title, className)}>商品名稱：</div>
        <div className={clsx(classes.content, className)}>Iphone XR手機殼 x1</div>
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={clsx(classes.item, className)}>
        <div className={clsx(classes.title, className)}>訂單編號：</div>
        <div className={clsx(classes.content, className)}>17485739</div>
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={clsx(classes.item, className)}>
        <div className={clsx(classes.title, className)}>訂單金額：</div>
        <div className={clsx(classes.content, className)}>NT$ 600</div>
      </Typography>
    </Paper>
  )
}

export default withStyles(styles)(OrderContent);
