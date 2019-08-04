import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { IValidator } from '../../../../lib/interface/IValidator';
import { changePayInfoData, } from '../../../../action/onlinePay';
import payInfoStyles from '../styles';

const styles = {
  atmPayRule: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '8px',
  }
}

const AtmPay = (props: any) => {
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
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          付款銀行：
        </Typography>
        <FormControl variant="outlined" error={!validator.getVerificationResult('bank')}>
          <InputLabel ref={inputLabel}>
            Bank
          </InputLabel>
          <Select
            native
            value={payInformation.bank}
            onChange={(event) => {
              dispatch(changePayInfoData({ bank: event.target.value, }));
            }}
            input={
              <OutlinedInput labelWidth={labelWidth} />
            }
            className={clsx(classes.inputs, className)}
          >
            <option value="" />
            <option value="ctbcbank">中國信託商業銀行</option>
            <option value="cathaybk">國泰世華銀行</option>
          </Select>
          <FormHelperText>
            {validator.getVerificationMessage('bank')}
          </FormHelperText>
        </FormControl>
      </div>
      <div className={clsx(`${classes.atmPayRule}`)}>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          1.
        </Typography>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          請準備晶片經融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。
        </Typography>
      </div>
      <div className={clsx(`${classes.singleDataBlock} ${classes.atmPayRule}`)}>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          2.
        </Typography>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程
        </Typography>
      </div>
    </>
  );
}

export default withStyles({...styles, ...payInfoStyles})(AtmPay);
