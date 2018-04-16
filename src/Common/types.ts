export enum CompanyStatus {
  active,
  dissolved,
  liquidation,
  receivership,
  administration,
  voluntaryArrangement,
  convertedClosed,
  insolvencyProceedings
}

export interface Address {
  line1: string;
  line2: string;
  careOf: string;
  country: string;
  locality: string;
  poBox: string;
  postCode: string;
  region: string;
}

export interface CompanyDetail {
  name: string;
  companyNumber: string;
  status: CompanyStatus;
  type: string;
  createdDate: Date;
  endDate: Date;
}
