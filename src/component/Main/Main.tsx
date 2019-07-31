import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Validator from '../../lib/Validator';
import verificatioType from '../../lib/enum/verificatioType';


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: 200,
    width: 200,
    borderRadius: '50%',
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const Main = () => {
  const classes = useStyles({});
  const [dense, setDense] = useState('');
  const submit = () => {
    const validator = new Validator();
    validator.addValidator(dense, [verificatioType.maxLength, 5], '字串長度不得超過 5')
    validator.addValidator(dense, [verificatioType.minLength, 1], '字串長度不得小於 1')

    // 結果
    console.log(validator.getValidatorResult())
  }
  return (
    <>
      <TextField
        value={dense}
        label="Dense"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        onChange={(e) => { setDense(e.target.value); }}
      />
      <Button
        classes={{
          root: classes.root,
        }}
        variant="contained"
        color="primary"
        onClick={submit}
      >
        Sumit
      </Button>
    </>
  );
};

export default Main;
