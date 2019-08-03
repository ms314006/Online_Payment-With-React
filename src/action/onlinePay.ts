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
