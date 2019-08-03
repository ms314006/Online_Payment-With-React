import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { setStep } from '../../../../action/onlinePay';
import stepStatus from '../../../../lib/enum/step';

const NextStepButton = withStyles({
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

const NextStepButtonWithRouter = withRouter(({ history }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.currentStep);
  const getNextRouter = (step: number) => {
    switch(step) {
      case stepStatus.payType:
        return stepStatus.payInformation;
      case stepStatus.payInformation:
        return stepStatus.payVictory;
      default:
        throw new Error('');
    }
  }
  return (
    <NextStepButton
      onClick={() => {
        dispatch(setStep(getNextRouter(currentStep)));
        history.push(`/${stepStatus[getNextRouter(currentStep)]}`);
      }}
    >
      下一步
    </NextStepButton>
  )
});

export default NextStepButtonWithRouter;
