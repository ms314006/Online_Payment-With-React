import { IVerification } from '../interface/IVerification';
import { IVerificationResult } from '../interface/IVerificationResult';

class IsNumber implements IVerification {
  private id: string;

  private name: string;

  private value: string;

  constructor(id: string, name: string, value: string) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  getVerificationResult = () :IVerificationResult => {
    const numberRule = /^[\d]+$/;
    const result = numberRule.test(this.value);
    return { id: this.id, result, message: `${this.name}格式錯誤！`, };
  };
}

export default IsNumber;
