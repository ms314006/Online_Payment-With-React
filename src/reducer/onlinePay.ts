import * as actions from '../action/onlinePay';
import { IValidator } from '../lib/interface/IValidator';
import Validator from '../lib/Validator';
import IsEmpty from '../lib/verification/IsEmpty';
import IsChecked from '../lib/verification/IsChecked';
import IsEmail from '../lib/verification/IsEmail';
import IsRuleLength from '../lib/verification/IsRuleLength';
import stepStatus from '../lib/enum/step';

const getCorrespondDataColumn = (payType: string, payInformation: any) => {
  const dataColumn: any = { };
  let correspondColumn: string[] = [];
  switch (payType) {
    case 'creditCard':
    case 'unionPay':
      correspondColumn = ['paymentType', 'cardNumber', 'selfCode', 'validMonth', 'validYear'];
      break;
    case 'storePay':
      correspondColumn = ['store'];
      break;
    case 'webAtm':
    case 'atm':
      correspondColumn = ['bank'];
      break;
    default:
      throw new Error('Can not get correspond data column');
  }
  correspondColumn.forEach((column) => {
    if (Object.keys(payInformation).indexOf(column) === -1) {
      dataColumn[column] = '';
    } else {
      dataColumn[column] = payInformation[column];
    }
  });
  return dataColumn;
};

const verificationData = (payType:string, payInformation:any, validator: IValidator) => {
  validator.addVerificationResult(new IsEmpty('email', 'Email', payInformation.email));
  validator.addVerificationResult(new IsEmail('email', 'Email', payInformation.email));
  validator.addVerificationResult(new IsChecked('payRule', '確認「訂單」與「付款」資訊', payInformation.payRule));
  switch (payType) {
    case 'creditCard':
    case 'unionPay':
      validator.addVerificationResult(new IsEmpty('paymentType', '付款方式', payInformation.paymentType));
      validator.addVerificationResult(new IsEmpty('cardNumber', '卡號', payInformation.cardNumber));
      validator.addVerificationResult(new IsRuleLength('cardNumber', '卡號', payInformation.cardNumber, 12));
      validator.addVerificationResult(new IsEmpty('selfCode', '安全碼', payInformation.selfCode));
      validator.addVerificationResult(new IsRuleLength('selfCode', '安全碼', payInformation.selfCode, 3));
      validator.addVerificationResult(new IsEmpty('validMonth', '有效月', payInformation.validMonth));
      validator.addVerificationResult(new IsEmpty('validYear', '有效年', payInformation.validYear));
      break;
    case 'storePay':
      validator.addVerificationResult(new IsEmpty('store', '付款商店', payInformation.store));
      break;
    case 'webAtm':
    case 'atm':
      validator.addVerificationResult(new IsEmpty('bank', '銀行', payInformation.bank));
      break;
    default:
      throw new Error('No have pay type can calidator!');
  }
};

interface IState {
  currentStep: stepStatus;
  payType: string;
  payInformation: any;
  validator: IValidator;
}

const initState: IState = {
  currentStep: stepStatus.payType,
  payType: '',
  payInformation: {
    email: '',
    payRule: false,
  },
  validator: new Validator(),
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case actions.CHANGE_CHOICE_PAY_TYPE:
      return {
        ...state,
        payType: action.payload.payType,
        payInformation: {
          email: '',
          payRule: false,
        },
        validator: new Validator(),
      };
    case actions.SET_STEP: {
      const workState = {
        ...state,
        currentStep: action.payload.step,
      };
      switch (action.payload.step) {
        case stepStatus.payType:
          break;
        case stepStatus.payInformation:
          workState.payInformation = {
            ...state.payInformation,
            ...getCorrespondDataColumn(state.payType, state.payInformation),
          };
          break;
        case stepStatus.payVictory: {
          const validator = new Validator();
          verificationData(state.payType, state.payInformation, validator);
          if (validator.getErrorNumber() !== 0) {
            return { ...state, validator, };
          }
          break;
        }
        default:
          throw new Error('No have correspond step action');
      }
      return { ...workState, };
    }
    case actions.CHANGE_PAY_INFO_DATA:
      return {
        ...state,
        payInformation: {
          ...state.payInformation,
          ...action.payload,
        },
      };
    case actions.CLEAR_PAY_INFO_DATA:
      return {
        ...state,
        ...initState,
      };
    default:
      return state;
  }
};

export default reducer;
