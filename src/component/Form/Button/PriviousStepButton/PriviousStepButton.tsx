import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { setStep } from '../../../../action/onlinePay';
import stepStatus from '../../../../lib/enum/step';


const PriviousStepButton = withStyles({
  root: {
    width: '88px',
    height: '40px',
    backgroundColor: '#D5F5E9',
    color: '#5E5E5E',
    '&:hover': {
      backgroundColor: '#DEFFF2',
    }
  },
})(Button);

const PriviousStepButtonWithRouter = withRouter(({ history }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.currentStep);
  const getPriviousRouter = (step: number) => {
    switch(step) {
      case stepStatus.payInformation:
        return stepStatus.payType;
      default:
        throw new Error('');
    }
  }
  return (
    <PriviousStepButton
      onClick={() => {
        dispatch(setStep(getPriviousRouter(currentStep)));
        history.push(`/${stepStatus[getPriviousRouter(currentStep)]}`);
      }}
    >
      回上一步
    </PriviousStepButton>
  )
});

export default PriviousStepButtonWithRouter;
