export const CHANGE_CHOICE_PAY_TYPE = 'CHANGE_CHOICE_PAY_TYPE';

export const changeChoicePayType = (payType: string) => ({
  type: CHANGE_CHOICE_PAY_TYPE,
  payload: {
    payType,
  },
});

export const SET_STEP = 'SET_STEP';

export const setStep = (step: number) => ({
  type: SET_STEP,
  payload: {
    step,
  },
});

export const CHANGE_PAY_INFO_DATA = 'CHANGE_PAY_INFO_DATA';

export const changePayInfoData = (data: any) => ({
  type: CHANGE_PAY_INFO_DATA,
  payload: {
    ...data,
  },
});

export const CLEAN_PAY_INFO_DATA = 'CLEAN_PAY_INFO_DATA';

export const cleanPayInfoData = () => ({
  type: CLEAN_PAY_INFO_DATA,
});
