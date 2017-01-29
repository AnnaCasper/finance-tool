import { Asset } from './asset';
import { Debt } from './debt';

export class Networth {
    checking: number;
    savings: number;
    ownHome: boolean;
    homeValue: number;
    ownCar: boolean;
    carValue: number;
    haveRetirmentAccounts: boolean;
    retirmentAccountsValues: Asset[];
    haveOtherInvestments: boolean;
    otherInvestmentsValues: Asset[];
    haveAdditionalAsset: boolean;
    additionalAssetsValues: Asset[];
    totalAssets: number;
    haveCreditCards: boolean;
    ceditCardsValues: Debt[];
    haveCarLoan: boolean;
    carLoansValues: Debt[];
    haveHomeLoan: boolean;
    homeLoansValues: Debt[];
    haveMedicalBills: boolean;
    medicalBillsValues: Debt[];
    haveSchoolLoans: boolean;
    schoolLoansValues: Debt[]
    totalDebt: number;
    networth: number;
}