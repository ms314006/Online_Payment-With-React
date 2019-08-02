import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from './Tooltop';

const styles = {
  payTypeItem: {
    margin: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '160px',
    height: '140px',
    borderRadius: '5px',
    backgroundColor: '#F7F7F7',
    '&:hover': {
      backgroundColor: '#36B996',
      color: '#FFFFFF',
      '& > svg:nth-child(1)': {
        display: 'none',
      },
      '& > svg:nth-child(2)': {
        display: 'block',
      }
    }
  },
  payTypeIcon: {
    margin: '4px',
    width: '72px',
    height: '60px',
  },
  hoverhiddenIcon: {
    display: 'block'
  },
  hoverDisplayIcon: {
    display: 'none'
  }
};

const PayTypeItems = (props: any) => {
  const { classes, className } = props;
  const [ payTypes ] = useState([
    { name: '信用卡/金融卡', svgPath: 'M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' },
    { name: '銀聯卡', svgPath: 'M18,11H6A2,2 0 0,0 4,13V21A2,2 0 0,0 6,23H18A2,2 0 0,0 20,21V13A2,2 0 0,0 18,11M18,21H6V17H18V21M18,15H6V13H18V15M4.93,4.92L6.34,6.33C9.46,3.2 14.53,3.2 17.66,6.33L19.07,4.92C15.17,1 8.84,1 4.93,4.92M7.76,7.75L9.17,9.16C10.73,7.6 13.26,7.6 14.83,9.16L16.24,7.75C13.9,5.41 10.1,5.41 7.76,7.75Z', },
    { name: '超商付款', svgPath: 'M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z', },
    { name: 'Web ATM', svgPath: 'M8.95 13.4H6.58A5.5 5.5 0 0 1 6.58 10.6H8.95A11.56 11.56 0 0 0 8.85 12A11.56 11.56 0 0 0 8.95 13.4M7.16 9.2H9.2A12.06 12.06 0 0 1 10.18 6.71A5.55 5.55 0 0 0 7.16 9.2M16.84 9.2A5.59 5.59 0 0 0 13.81 6.71A10.95 10.95 0 0 1 14.78 9.2M12 17.57A9.5 9.5 0 0 0 13.34 14.8H10.66A9.5 9.5 0 0 0 12 17.57M12 6.42A9.53 9.53 0 0 0 10.66 9.2H13.34A9.53 9.53 0 0 0 12 6.42M7.16 14.8A5.61 5.61 0 0 0 10.18 17.29A12.06 12.06 0 0 1 9.2 14.8M21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5M19 12A7 7 0 1 0 12 19A7 7 0 0 0 19 12M15.15 12A11.56 11.56 0 0 1 15.05 13.4H17.42A5.5 5.5 0 0 0 17.42 10.6H15.05A11.56 11.56 0 0 1 15.15 12M13.81 17.29A5.62 5.62 0 0 0 16.84 14.8H14.78A10.95 10.95 0 0 1 13.81 17.29M10.36 10.6A8.81 8.81 0 0 0 10.36 13.4H13.64A10.3 10.3 0 0 0 13.75 12A10.21 10.21 0 0 0 13.64 10.6Z', },
    { name: 'ATM 轉帳', svgPath: 'M8,9V10.5H10.25V15H11.75V10.5H14V9H8M6,9H3A1,1 0 0,0 2,10V15H3.5V13.5H5.5V15H7V10A1,1 0 0,0 6,9M5.5,12H3.5V10.5H5.5V12M21,9H16.5A1,1 0 0,0 15.5,10V15H17V10.5H18V14H19.5V10.5H20.5V15H22V10A1,1 0 0,0 21,9Z', },
  ]);
  return (
    <>
      {
        payTypes.map(payType => (
          <Tooltip title="頁面將跳轉至對應之金融機構頁面進行後續交易" placement="top">
            <div className={clsx(classes.payTypeItem)} key={payType.name}>
              <svg
                className={clsx(`${classes.payTypeIcon} ${classes.hoverhiddenIcon}`)}
                viewBox="0 0 24 24"
              >
                <path fill="#4B4B4B" d={payType.svgPath} />
              </svg>
              <svg
                className={clsx(`${classes.payTypeIcon} ${classes.hoverDisplayIcon}`)}
                viewBox="0 0 24 24"
              >
                <path fill="#FFFFFF" d={payType.svgPath} />
              </svg>
              <Typography
                variant="body1"
                className={clsx(classes.formTitle, className)}
              >
                {payType.name}
              </Typography>
            </div>
          </Tooltip>
        ))
      }
    </>
  );
}

export default withStyles(styles)(PayTypeItems);
