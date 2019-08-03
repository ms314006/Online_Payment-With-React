import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import StorePay from './StorePay';
import AtmPay from './AtmPay';
import CreditCardPay from './CreditCardPay';
import { setStep } from '../../../action/onlinePay';
import stepStatus from '../../../lib/enum/step';
import payInfoStyles from './styles';

const styles = {
  payInformationBlock: {
    boxSizing: 'border-box',
    padding: '0px 40px',
    width: '100%',
    '@media (max-width: 768px)': {
      padding: '0px 20px',
    }
  },
  servicesRule: {
    margin: '4px 0px',
    color: '#969696',
    marginLeft: '32px',
  },
};

const PayInformation = (props: any) => {
  const { classes, className } = props;
  const payType = useSelector(state => state.payType);
  const dispatch = useDispatch();
  const getCorrespondPayInformationPage = (type: string) => {
    switch (type) {
      case 'storePay':
        return <StorePay />
      case 'webAtm':
      case 'atm':
        return <AtmPay />
      case 'creditCard':
      case 'unionPay':
        return <CreditCardPay />
      default:
        throw new Error('No have correspond pay information page.')
    }
  }
  return (
    <div className={clsx(classes.payInformationBlock, className)}>
      {getCorrespondPayInformationPage(payType)}
      <div className={clsx(classes.singleDataBlock, className)}>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          填寫付款人信箱：
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          className={clsx(classes.inputs, className)}
        />
      </div>
      <div className={clsx(classes.singleDataBlock, className)}>
        <FormControlLabel
          control={
            <Checkbox color="default" onChange={() => {}} />
          }
          label="請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱"
        />
        <div className={clsx(classes.servicesRule, className)}>
          第三方支付金流平台服務條款
        </div>
      </div>
    </div>
  )
};

const PayInformationWithStyle = withStyles({ ...styles, ...payInfoStyles})(PayInformation);

export default withRouter(({ history }) => {
  // 將 step 重置
  const payType = useSelector(state => state.payType);
  const dispatch = useDispatch();
  if (payType !== '') {
    dispatch(setStep(stepStatus.payInformation));
    return <PayInformationWithStyle />;
  }
  history.push(`/${stepStatus[stepStatus.payType]}`)
  return null;
});
