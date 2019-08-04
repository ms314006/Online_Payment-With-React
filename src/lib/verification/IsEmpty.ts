import { IVerification } from '../interface/IVerification';
import { IVerificationResult } from '../interface/IVerificationResult';

class IsEmpty implements IVerification {
  private id: string;

  private name: string;

  private value: string;

  constructor(id: string, name: string, value: string) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  getVerificationResult = () :IVerificationResult => {
    let result = true;
    if (this.value === '') {
      result = false;
    }
    return { id: this.id, result, message: `${this.name}不得為空！`, };
  };
}

export default IsEmpty;
