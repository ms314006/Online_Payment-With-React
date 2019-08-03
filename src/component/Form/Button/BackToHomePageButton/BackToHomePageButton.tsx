import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  return (
    <BackToHomePageButton
      onClick={() => {
        history.push(`/${stepStatus[stepStatus.payType]}`);
      }}
    >
      返回首頁
    </BackToHomePageButton>
  )
});

export default BackToHomePageButtonWithRouter;
