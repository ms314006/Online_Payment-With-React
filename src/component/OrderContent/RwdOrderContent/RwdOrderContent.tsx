import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  boxShadow: {
    boxShadow: '2px 1px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 4px 4px -1px rgba(0,0,0,0.12)',
  },
  orderTitleBlock: {
    position: 'absolute',
    top: '84px',
    width: '32px',
    height: '160px',
    boxSizing: 'border-box',
    backgroundColor: '#F3F3F3',
    transition: 'left 0.5s',
    zIndex: '1',
  },
  openOrderTitleBlock: {
    left: '200px',
  },
  closeOrderTitleBlock: {
    left: '0px',
  },
  orderTitle: {
    textAlign: 'center',
    margin: '24px 0px',
    fontWeight: 'bold',
  },
  orderPaper: {
    position: 'absolute',
    top: '84px',
    left: '-200px',
    boxSizing: 'border-box',
    backgroundColor: '#F3F3F3',
    height: '281px',
    width: '200px',
    padding: '16px',
    transition: 'left 0.5s',
    zIndex: '1',
  },
  openOrderPaper: {
    left: '0px',
  },
  closeOrderPaper: {
    left: '-200px',
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
  const [ displayOrderContent, setDisplayOrderContent ] = useState(false);
  return (
    <>
      <Paper
        className={
          clsx(`${classes.orderPaper} ${classes.boxShadow} ${displayOrderContent ? classes.openOrderPaper : classes.closeOrderPaper}`, className)
        }
      >
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
      <div onClick={() => {setDisplayOrderContent(!displayOrderContent)}}>
        <Paper className={clsx(`${classes.orderTitleBlock} ${classes.boxShadow} ${displayOrderContent ? classes.openOrderTitleBlock : classes.closeOrderTitleBlock}`, className)}>
          <Typography variant="subtitle1" gutterBottom className={clsx(classes.orderTitle, className)}>
            訂單資料
          </Typography>
        </Paper>
      </div>
    </>
  )
}

export default withStyles(styles)(OrderContent);
