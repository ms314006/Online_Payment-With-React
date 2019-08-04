import { IVerification } from '../interface/IVerification';
import { IVerificationResult } from '../interface/IVerificationResult';

class IsRuleLength implements IVerification {
  private id: string;

  private name: string;

  private value: string;

  private lengthLimit: number

  constructor(id: string, name: string, value: string, lengthLimit: number) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.lengthLimit = lengthLimit;
  }

  getVerificationResult = () :IVerificationResult => {
    let result = true;
    if (this.value.length !== this.lengthLimit) {
      result = false;
    }
    return { id: this.id, result, message: `${this.name}長度必須為${this.lengthLimit}碼！`, };
  };
}

export default IsRuleLength;
