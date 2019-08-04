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

export const CLEAR_PAY_INFO_DATA = 'CLEAR_PAY_INFO_DATA';

export const clearPayInfoData = () => ({
  type: CLEAR_PAY_INFO_DATA,
});
