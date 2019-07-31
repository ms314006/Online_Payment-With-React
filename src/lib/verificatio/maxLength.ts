import { IVerificatio } from '../interface/IVerificatio';

class MaxLength implements IVerificatio {
  checkResult = (targetValue: string, rulesLength: number): boolean => {
    if (targetValue.length > rulesLength) {
      return false;
    }
    return true;
  }
}

export default MaxLength;
