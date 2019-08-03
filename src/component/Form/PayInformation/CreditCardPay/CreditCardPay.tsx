import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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

const CreditCardPay = (props: any) => {
  const { classes, className } = props;
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);
  return (
    <>
      <div className={clsx(classes.singleDataBlock, className)}>
        <FormControl component="fieldset">
          <RadioGroup value="payoff">
            <div className={clsx(classes.radioInline, className)}>
              <FormControlLabel
                value="payoff"
                control={<CustomRadio />}
                label="一次付款"
              />
              <FormControlLabel
                value="Instalment"
                control={<CustomRadio />}
                label="分期付款"
              />
            </div>
          </RadioGroup>
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
            className={clsx(classes.inputs, className)}
          />
          <div className={clsx(classes.cardTypeIconBlock)}>
            <img
              src="./icon/visa.svg"
              className={clsx(classes.cardIcon, className)}
            />
            <img
              src="./icon/mastercard_active.svg"
              className={clsx(classes.cardIcon, className)}
            />
            <img
              src="./icon/jcb.svg"
              className={clsx(classes.cardIcon, className)}
            />
          </div>
        </div>
      </div>
      <div className={clsx(classes.singleDataBlock, className)}>
        <Typography variant="body1" className={clsx(classes.dataTitle, className)}>
          有效月年：
        </Typography>
        <div className={clsx(classes.cardInfoBlock, className)}>
          <FormControl variant="outlined">
            <InputLabel ref={inputLabel}>
              MM
            </InputLabel>
            <Select
              native
              value=""
              onChange={() => {}}
              input={
                <OutlinedInput name="MM" labelWidth={labelWidth} />
              }
              className={clsx(classes.cardInfoInputs, className)}
            >
              <option value="" />
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
          </FormControl>&nbsp;/&nbsp;
          <FormControl variant="outlined">
            <InputLabel ref={inputLabel}>
              YY
            </InputLabel>
            <Select
              native
              value=""
              onChange={() => {}}
              input={
                <OutlinedInput name="YY" labelWidth={labelWidth} />
              }
              className={clsx(classes.cardInfoInputs, className)}
            >
              <option value="" />
              <option value="20">20</option>
              <option value="21">21</option>
            </Select>
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
            className={clsx(classes.cardInfoInputs, className)}
          />
          <img
            src="./icon/back-three.svg"
            className={clsx(classes.cardIcon, className)}
          />
        </div>
      </div>
    </>
  );
}

export default withStyles({...styles,...payInfoStyles})(CreditCardPay);
