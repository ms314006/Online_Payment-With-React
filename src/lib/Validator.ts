import { IValidator } from './interface/IValidator';
import { IVerification } from './interface/IVerification';
import { IVerificationResult } from './interface/IVerificationResult';

class Validator implements IValidator {
  private errorList: IVerificationResult[] = [];

  private getErrorWithId(id: string): IVerificationResult {
    const targetError: IVerificationResult = this.errorList.find(
      (error: IVerificationResult) => error.id === id
    );
    return targetError;
  }

  addVerificationResult = (verification: IVerification): void => {
    const verificationResult = verification.getVerificationResult();
    if (!verificationResult.result) {
      this.errorList.push(verificationResult);
    }
  }

  getErrorNumber = (): number => this.errorList.length;

  getVerificationResult = (id: string): boolean => {
    const targetError = this.getErrorWithId(id);
    return targetError ? targetError.result : true;
  }

  getVerificationMessage = (id: string): string => {
    const targetError = this.getErrorWithId(id);
    return targetError ? targetError.message : '';
  }
}

export default Validator;
