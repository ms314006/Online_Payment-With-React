import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import OrderContent from '../OrderContent';
import RwdOrderContent from '../OrderContent/RwdOrderContent';
import Steppers from '../Steppers';
import Form from '../Form';
import stepStatus from '../../lib/enum/step';

const BackToStoreButton = withStyles({
  root: {
    marginTop: '24px',
    backgroundColor: '#4B4B4B',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#696969',
    }
  },
})(Button);

const styles = {
  mainBlock: {
    height: '100%',
  },
  leftBlock: {
    paddingTop: '120px',
    height: '100vh',
    width: '20%',
    overflowY: 'auto',
    '@media (max-width: 1024px)': {
      width: '24%',
    },
    '@media (max-width: 768px)': {
      display: 'none',
    }
  },
  rwdOrderContent: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    }
  },
  rightBlock: {
    width: '52%',
    '@media (max-width: 1024px)': {
      width: '56%',
    },
    '@media (max-width: 768px)': {
      width: '100%',
    }
  },
  rightTopBlock: {
    height: '120px',
    display: 'flex',
  },
  rightBottomBlock: {
    height: 'calc(100vh - 120px)',
    backgroundColor: '#FFFFFF',
    overflowY: 'auto',
    boxShadow: '0px 2px 13px 0px rgba(0,0,0,0.08)',
  },
  background: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    width: '100%',
    height: '140px',
    backgroundImage: 'url("./icon/footer-background.svg")',
    backgroundColor: '#DEFFF2',
    '@media (max-width: 768px)': {
      position: 'static',
      bottom: 0,
    }
  },
  footerBackToStore: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    }
  }
};

const Main = (props: any) => {
  const { classes, className } = props;
  const currentStep = useSelector(state => state.currentStep);
  return (
    <Grid container justify="center" className={clsx(classes.mainBlock, className)}>
      <Grid item className={clsx(classes.leftBlock, className)}>
        {currentStep === stepStatus.payVictory ? (
            <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
              <div style={{ padding: '40px 4px 140px 0px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                <div style={{ width: '16px', borderTop: '1px solid #000000', transform: 'rotate(60deg)', }} />
                Finish
                <div style={{ width: '16px', borderTop: '1px solid #000000', transform: 'rotate(300deg)', }} />
              </div>
              <div style={{ height: '280px', width: '32px', backgroundColor: '#F3F3F3', borderRadius: '10px 0 0 10px', }} />
            </div>
          ) : (<>
            <OrderContent />
            <BackToStoreButton>
              返回商店
            </BackToStoreButton>
          </>)
        }
      </Grid>
      <Grid item className={clsx(classes.rightBlock, className)}>
        <div className={clsx(classes.rwdOrderContent, className)}>
          <RwdOrderContent />
        </div>
        <Grid item className={clsx(classes.rightTopBlock, className)}>
          <Steppers />
        </Grid>
        <Grid item className={clsx(classes.rightBottomBlock, className)}>
          <Form />
        </Grid>
      </Grid>
      <div className={clsx(classes.background, className)}>
        {currentStep === stepStatus.payVictory ? null :
          <div className={clsx(classes.footerBackToStore, className)}>
            <BackToStoreButton>
              返回商店
            </BackToStoreButton>
          </div>
        }
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Main);
