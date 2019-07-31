import { IVerificatio } from './interface/IVerificatio';
import { IValidatorResult } from './interface/IValidatorResult';
import MaxLength from './verificatio/maxLength';
import MinLength from './verificatio/minLength';
import verificatioType from './enum/verificatioType';

interface validatorParams {
  targetValue: any,
  rules: any[],
  errorMessage: string,
}

class Validator {
  validatorResult: IValidatorResult[] = [];

  addValidator = (targetValue: any, rules: any[], errorMessage: string): void => {
    const getVerificatioTypeWithRules = () => rules[0];
    const getVerificatioRule = () => rules[1];
    const getVerificatio = (type: verificatioType): IVerificatio => {
      switch (type) {
        case verificatioType.maxLength:
          return new MaxLength();
        case verificatioType.minLength:
          return new MinLength();
        default:
          throw new Error('No have correspond');
      }
    };
    const verificatio: IVerificatio = getVerificatio(getVerificatioTypeWithRules());

    this.validatorResult.push({
      result: verificatio.checkResult(targetValue, getVerificatioRule()),
      errorMessage,
    });
  }

  getValidatorResult = (): IValidatorResult[] => this.validatorResult;
}

export default Validator;
