import * as actions from '../action/onlinePay';
import stepStatus from '../lib/enum/step';

const initState = {
  currentStep: stepStatus.payType,
  payType: '',
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.CHANGE_CHOICE_PAY_TYPE:
      return {
        ...state,
        payType: action.payload.payType,
      };
    case actions.SET_STEP:
      return {
        ...state,
        currentStep: action.payload.step,
      };
    default:
      return state;
  }
};

export default reducer;
