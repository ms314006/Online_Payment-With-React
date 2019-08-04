import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { IValidator } from '../../../../lib/interface/IValidator';
import { changePayInfoData, } from '../../../../action/onlinePay';
import payInfoStyles from '../styles';

const styles = {
  radioInline: {
    display: 'flex',
  },
  cardInfoBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  cardInfoInputs: {
    width: '104px',
  },
  cardIcon: {
    width: '44px',
  },
  cardTypeIconBlock: {
    display: 'flex',
    '@media (max-width: 1024px)': {
      display: 'none',
    }
  }
}

const CustomRadio = withStyles({
  root: {
    '&$checked': {
      color: '#41C897',
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const isCreditCardType = (cardType: string, cardNumber: number) => {
  const getdefinedLengthToStr = (num: number, length: number) => {
    return String(num).slice(0, length);
  }
  switch (cardType) {
    case 'visa':
      return getdefinedLengthToStr(cardNumber, 1) === '4';
    case 'master':
      return getdefinedLengthToStr(cardNumber, 1) === '5' &&
        (
          Number(getdefinedLengthToStr(cardNumber, 2)) >= 51 &&
          Number(getdefinedLengthToStr(cardNumber, 2)) <= 55
        );
    case 'jcb':
      return (getdefinedLengthToStr(cardNumber, 4) === '1800') ||
        (getdefinedLengthToStr(cardNumber, 4) === '2131') ||
        (Number(getdefinedLengthToStr(cardNumber, 3)) >= 300 &&
        Number(getdefinedLengthToStr(cardNumber, 3)) <= 399);
    default:
      throw new Error('Can not check this type.');
  };
};

const CreditCardPay = (props: any) => {
  const { classes, className } = props;
  const payInformation = useSelector(state => state.payInformation);
  const validator: IValidator = useSelector(state => state.validator);
  const dispatch = useDispatch();
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);
  return (
    <>
      <div className={clsx(classes.singleDataBlock, className)}>
        <FormControl component="fieldset">
          <RadioGroup value={payInformation.paymentType}>
            <div className={clsx(classes.radioInline, className)}>
              <FormControlLabel
                value="payoff"
                control={
                  (<CustomRadio
                    onChange={(event) => {
                      dispatch(changePayInfoData({
                        paymentType: event.target.value
                      }))
                    }}
                  />)
                }
                label="一次付款"
              />
              <FormControlLabel
                value="Instalment"
                control={
                  (<CustomRadio
                    onChange={(event) => {
                      dispatch(changePayInfoData({
                        paymentType: event.target.value
                      }))
                    }}
                  />)
                }
                label="分期付款"
              />
            </div>
          </RadioGroup>
          <FormHelperText error={!validator.getVerificationResult('paymentType')}>
            {validator.getVerificationMessage('paymentType')}
          </FormHelperText>
        </FormControl>
      </div>
      <div className={clsx(classes.singleDataBlock, className)}>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          信用卡號：
        </Typography>
        <div className={clsx(classes.cardInfoBlock, className)}>
          <TextField
            label="CardNumber"
            variant="outlined"
            value={payInformation.cardNumber}
            onChange={(event) => {
              dispatch(changePayInfoData({
                cardNumber: event.target.value
              }))
            }}
            error={!validator.getVerificationResult('cardNumber')}
            className={clsx(classes.inputs, className)}
          />
          <div className={clsx(classes.cardTypeIconBlock)}>
            <img
              src={
                `./icon/visa${
                  isCreditCardType('visa', payInformation.cardNumber) ? '_active' : ''
                }.svg`
              }
              className={clsx(classes.cardIcon, className)}
            />
            <img
              src={
                `./icon/master${
                  isCreditCardType('master', payInformation.cardNumber) ? '_active' : ''
                }.svg`
              }
              className={clsx(classes.cardIcon, className)}
            />
            <img
              src={
                `./icon/jcb${
                  isCreditCardType('jcb', payInformation.cardNumber) ? '_active' : ''
                }.svg`
              }
              className={clsx(classes.cardIcon, className)}
            />
          </div>
        </div>
        <FormHelperText error={!validator.getVerificationResult('cardNumber')}>
          {validator.getVerificationMessage('cardNumber')}
        </FormHelperText>
      </div>
      <div className={clsx(classes.singleDataBlock, className)}>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          有效月年：
        </Typography>
        <div className={clsx(classes.cardInfoBlock, className)}>
          <FormControl variant="outlined" error={!validator.getVerificationResult('validMonth')}>
            <InputLabel ref={inputLabel}>
              MM
            </InputLabel>
            <Select
              native
              value={payInformation.validMonth}
              onChange={(event) => {
                dispatch(changePayInfoData({ validMonth: event.target.value, }));
              }}
              input={
                <OutlinedInput name="MM" labelWidth={labelWidth} />
              }
              className={clsx(classes.cardInfoInputs, className)}
            >
              <option value="" />
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
            <FormHelperText>
              {validator.getVerificationMessage('validMonth')}
            </FormHelperText>
          </FormControl>&nbsp;/&nbsp;
          <FormControl variant="outlined" error={!validator.getVerificationResult('validYear')}>
            <InputLabel ref={inputLabel}>
              YY
            </InputLabel>
            <Select
              native
              value={payInformation.validYear}
              onChange={(event) => {
                dispatch(changePayInfoData({ validYear: event.target.value, }));
              }}
              input={
                <OutlinedInput name="YY" labelWidth={labelWidth} />
              }
              className={clsx(classes.cardInfoInputs, className)}
            >
              <option value="" />
              <option value="20">20</option>
              <option value="21">21</option>
            </Select>
            <FormHelperText>
              {validator.getVerificationMessage('validYear')}
            </FormHelperText>
          </FormControl>
        </div>
      </div>
      <div className={clsx(classes.singleDataBlock, className)}>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          背面末三碼：
        </Typography>
        <div className={clsx(classes.cardInfoBlock, className)}>
          <TextField
            label="SelfCode"
            variant="outlined"
            value={payInformation.selfCode}
            onChange={(event) => {
              dispatch(changePayInfoData({
                selfCode: event.target.value
              }))
            }}
            error={!validator.getVerificationResult('selfCode')}
            className={clsx(classes.cardInfoInputs, className)}
          />
          <img
            src="./icon/back-three.svg"
            className={clsx(classes.cardIcon, className)}
          />
        </div>
        <FormHelperText error={!validator.getVerificationResult('selfCode')}>
          {validator.getVerificationMessage('selfCode')}
        </FormHelperText>
      </div>
    </>
  );
}

export default withStyles({...styles,...payInfoStyles})(CreditCardPay);
