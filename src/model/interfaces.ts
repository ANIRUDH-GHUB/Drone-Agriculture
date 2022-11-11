import { EmptyObject } from "@reduxjs/toolkit";
import { Dayjs } from "dayjs";

export interface SignupState {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  showPassword?: boolean;
}
export interface STATE {
  profile: CreateProfileDetailsType;
}
export interface CreateProfileDetailsType {
  userDetails: FarmerType;
  farms: [FarmType] | Array<any>;
  landOwner: LandOwnerType;
  drivingLicence: DrivingLicenceType;
  billing: BillingDetailsType;
}
export interface FarmerType {
  name: string;
  phone: string;
  email: string;
  birthday: any;
  gender: string;
}
export interface FarmType {
  name: string;
  address: string;
  city: string;
  country: string;
  zip: string;
}
export interface LandOwnerType {
  name: string;
  address: string;
  city: string;
  country: string;
  zip: string;
  totalArea: number;
  date: any;
  certificate?: string;
}

export interface DrivingLicenceType {
  name: string;
  licenceId: string;
  image: string;
}

export interface FarmUtilityType {
  agreementId: string;
  date: any;
  image: string;
}
export interface BillingDetailsType {
  name?: string;
  cardNumber?: string;
  expiration?: any;
  cvv?: string;
  phone?: string;
}
