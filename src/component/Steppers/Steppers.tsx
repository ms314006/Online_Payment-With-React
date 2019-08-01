import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#8DEFCB',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#8DEFCB',
    },
  },
  disabled: {
    '& $line': {
      borderColor: '#eaeaf0',
    },
  },
  line: {
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);


const styles = {
  steppersWidth: {
    width: '68%',
    margin: 'auto',
  },
  icon: {
    color: "#8DEFCB !important"
  },
  line: {
    borderTopWidth: 3,
    borderRadius: 1,
  },
};

function getSteps() {
  return ['', '', ''];
}

const Steppers = (props: any) => {
  const { classes, className } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function isStepOptional(step) {
    return step === 1;
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={clsx(classes.steppersWidth, className)}>
      <Stepper activeStep={activeStep} className={classes.line} connector={<QontoConnector />}>
        {steps.map((label, index) => {
          return (
            <Step key={label} >
              <StepLabel
                StepIconProps={{
                  classes: {
                    active: classes.icon,
                    completed: classes.icon,
                  }
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

export default withStyles(styles)(Steppers);
