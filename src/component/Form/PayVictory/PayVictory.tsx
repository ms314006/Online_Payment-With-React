import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { setStep } from '../../../action/onlinePay';
import stepStatus from '../../../lib/enum/step';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  victoryBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  victoryImgBlock: {
    height: '200px',
  },
  positionRelativeBlock: {
    position: 'relative',
  },
  circle: {
    width: '144px',
    height: '144px',
    backgroundColor: '#B5FFE4',
    borderRadius: '50%',
  },
  victoryIcon: {
    position: 'absolute',
    top: '0',
    height: '144px',
  }
};

const PayVictory = (props: any) => {
  const { classes, className } = props;
  return (
    <div className={clsx(classes.victoryBlock, className)}>
      <div className={clsx(classes.victoryImgBlock, className)}>
        <div className={clsx(classes.positionRelativeBlock, className)}>
          <div className={clsx(classes.circle, className)}/>
          <img
            className={clsx(classes.victoryIcon, className)}
            src="./icon/finish.svg"
          />
        </div>
      </div>
      <div>稍後將寄送訂單詳細資訊至您的E-mail</div>
    </div>
  );
};

const PayVictoryWithStyle = withStyles({ ...styles, })(PayVictory);

export default withRouter(({ history }) => {
  // 確認 step 狀況
  const currentStep = useSelector(state => state.currentStep);
  if (currentStep !== stepStatus.payVictory) {
    history.push(`/${stepStatus[currentStep]}`)
  }
  // 將 step 重置
  const payType = useSelector(state => state.payType);
  const dispatch = useDispatch();
  if (payType !== '') {
    dispatch(setStep(stepStatus.payVictory));
    return <PayVictoryWithStyle />;
  }
  history.push(`/${stepStatus[stepStatus.payType]}`)
  return null;
});
