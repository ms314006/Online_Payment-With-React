import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PayTypeItems from './PayTypeItems';
import PayInformation from './PayInformation';
import PayVictory from './PayVictory';
import PriviousStepButton from './Button/PriviousStepButton';
import NextStepButton from './Button/NextStepButton';
import BackToHomePageButton from './Button/BackToHomePageButton';
import stepStatus from '../../lib/enum/step';

const styles = {
  formBlock: {
    boxSizing: 'border-box',
    padding: '36px',
    height: '100%',
  },
  formTitleBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formTitle: {
    background: 'linear-gradient(0deg, #B5FFE4 45%, #FFFFFF 55%)',
    width: '236px',
    textAlign: 'center',
  },
  formContent: {
    marginTop: '72px',
    marginBottom: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  controlButtonBlock: {
    boxSizing: 'border-box',
    padding: '24px 80px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      padding: '24px 20px',
    }
  },
  center: {
    justifyContent: 'center',
  }
};

const OrderContent = (props: any) => {
  const { classes, className } = props;
  const currentStep = useSelector(state => state.currentStep);
  const payType = useSelector(state => state.payType);
  const dispatch = useDispatch();
  const getCorrespondTitle = (step: number) => {
    switch (step) {
      case stepStatus.payType:
        return 'STEP1. 選擇付款方式';
      case stepStatus.payInformation:
        return 'STEP2. 填寫付款資訊'
      case stepStatus.payVictory:
        return '您的訂單已成立！'
      default:
        throw new Error('No have correspond title!')
    };
  };
  const getCorrespondPayTypeText = (type: string) => {
    switch (type) {
      case 'storePay':
        return '超商付款';
      case 'webAtm':
      case 'atm':
        return 'Web ATM';
      case 'creditCard':
      case 'unionPay':
        return '信用卡/金融卡';
      default:
        throw new Error('No have correspond pay type text.')
    };
  };
  return (
    <div className={clsx(classes.formBlock, className)}>
      <div className={clsx(classes.formTitleBlock, className)}>
        <Typography variant="h5" component="h5" className={clsx(classes.formTitle, className)}>
          {getCorrespondTitle(currentStep)}
        </Typography>
        {
          currentStep !== stepStatus.payInformation ? null:
          <Typography variant="body1">
            {getCorrespondPayTypeText(payType)}
          </Typography>
        }
      </div>
      <div className={clsx(classes.formContent, className)}>
        <Switch>
          <Route
            path={`/${stepStatus[stepStatus.payType]}`}
            component={() => (<PayTypeItems />)}
          />
          <Route
            path={`/${stepStatus[stepStatus.payInformation]}`}
            component={() => (<PayInformation />)}
          />
          <Route
            path={`/${stepStatus[stepStatus.payVictory]}`}
            component={() => (<PayVictory />)}
          />
        </Switch>
      </div>
      {
        currentStep === stepStatus.payVictory ? (
          <div className={clsx(`${classes.controlButtonBlock} ${classes.center}`, className)}>
            <BackToHomePageButton />
          </div>
        ) : (
          <div className={clsx(classes.controlButtonBlock, className)}>
            {currentStep === stepStatus.payType ?
              <div /> : <PriviousStepButton />
            }
            <NextStepButton />
          </div>
        )
      }
    </div>
  )
}

export default withStyles(styles)(OrderContent);
