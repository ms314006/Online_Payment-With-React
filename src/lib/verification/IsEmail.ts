import { IVerification } from '../interface/IVerification';
import { IVerificationResult } from '../interface/IVerificationResult';

class IsEmail implements IVerification {
  private id: string;

  private name: string;

  private value: string;

  constructor(id: string, name: string, value: string) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  getVerificationResult = () :IVerificationResult => {
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    let result = true;

    if (this.value.search(emailRule) === -1) {
      result = false;
    }

    return { id: this.id, result, message: `${this.name}格式錯誤！`, };
  };
}

export default IsEmail;
