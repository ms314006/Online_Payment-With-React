import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { cleanPayInfoData } from '../../../../action/onlinePay';
import stepStatus from '../../../../lib/enum/step';

const BackToHomePageButton = withStyles({
  root: {
    width: '88px',
    height: '40px',
    backgroundColor: '#36B996',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#8DEFCB',
    }
  },
})(Button);

const BackToHomePageButtonWithRouter = withRouter(({ history }) => {
  const dispatch = useDispatch();
  return (
    <BackToHomePageButton
      onClick={() => {
        dispatch(cleanPayInfoData());
        history.push(`/${stepStatus[stepStatus.payType]}`);
      }}
    >
      返回首頁
    </BackToHomePageButton>
  )
});

export default BackToHomePageButtonWithRouter;
