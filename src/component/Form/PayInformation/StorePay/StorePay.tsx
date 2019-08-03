import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import payInfoStyles from '../styles';

const StorePay = (props: any) => {
  const { classes, className } = props;
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
        <FormControl variant="outlined">
          <InputLabel ref={inputLabel} htmlFor="outlined-store-native-simple">
            Store
          </InputLabel>
          <Select
            native
            value=""
            onChange={() => {}}
            input={
              <OutlinedInput name="store" labelWidth={labelWidth} id="outlined-store-native-simple" />
            }
            className={clsx(classes.inputs, className)}
          >
            <option value="" />
            <option value="seven">7-11 便利商店</option>
            <option value="family">全家便利商店</option>
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default withStyles(payInfoStyles)(StorePay);
