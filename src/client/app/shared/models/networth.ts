import { Asset } from './asset';
import { Debt } from './debt';

export class Networth {
    checking: number;
    savings: number;
    ownHome: boolean;
    homeValues: Asset[];
    ownCar: boolean;
    carValues: Asset[];
    haveRetirmentAccounts: boolean;
    retirmentAccountsValues: Asset[];
    haveOtherInvestments: boolean;
    otherInvestmentsValues: Asset[];
    haveAdditionalAsset: boolean;
    additionalAssetsValues: Asset[];
    totalAssets: number;
    haveCreditCards: boolean;
    creditCardsValues: Debt[];
    haveCarLoan: boolean;
    carLoansValues: Debt[];
    haveHomeLoan: boolean;
    homeLoansValues: Debt[];
    haveSchoolLoans: boolean;
    schoolLoansValues: Debt[];
    haveAdditionalDebt: boolean;
    additionalDebtsValues: Debt[];
    totalDebt: number;
    networth: number;
}
