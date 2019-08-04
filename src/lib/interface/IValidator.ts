import { IVerification } from './IVerification';

export interface IValidator {
  addVerificationResult(verification: IVerification): void;
  getErrorNumber(): number;
  getVerificationResult(id: string): boolean;
  getVerificationMessage(id: string): string;
}
