import { IVerification } from '../interface/IVerification';
import { IVerificationResult } from '../interface/IVerificationResult';

class IsChecked implements IVerification {
  private id: string;

  private name: string;

  private value: boolean;

  constructor(id: string, name: string, value: boolean) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  getVerificationResult = () :IVerificationResult => {
    const result = this.value;
    return { id: this.id, result, message: `請勾選${this.name}！`, };
  };
}

export default IsChecked;
