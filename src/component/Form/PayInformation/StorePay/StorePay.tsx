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
import { IValidator } from '../../../../lib/interface/IValidator';
import { changePayInfoData, } from '../../../../action/onlinePay';
import payInfoStyles from '../styles';

const StorePay = (props: any) => {
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
          付款超商：
        </Typography>
        <FormControl variant="outlined" error={!validator.getVerificationResult('store')}>
          <InputLabel ref={inputLabel}>
            Store
          </InputLabel>
          <Select
            native
            value={payInformation.store}
            onChange={(event) => {
              dispatch(changePayInfoData({ store: event.target.value, }));
            }}
            input={
              <OutlinedInput labelWidth={labelWidth} />
            }
            className={clsx(classes.inputs, className)}
          >
            <option value="" />
            <option value="seven">7-11 便利商店</option>
            <option value="family">全家便利商店</option>
          </Select>
          <FormHelperText>
            {validator.getVerificationMessage('store')}
          </FormHelperText>
        </FormControl>
      </div>
    </>
  );
}

export default withStyles(payInfoStyles)(StorePay);
