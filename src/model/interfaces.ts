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
  userDetails: UserType;
  farms: [FarmType] | Array<any>;
  landOwner: LandOwnerType;
  drivingLicence: DrivingLicenceType;
  billing: BillingDetailsType;
  pilotCertificate: PilotCertificateType;
}
export interface UserType {
  name: string;
  phone: string;
  email: string;
  birthday: any;
  gender: string;
}
export interface PilotCertificateType extends FarmType {
  certificatinId: string;
  gender: string;
  height: string;
  weight: string;
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

export interface DroneType {
  drone_id: number | string | null;
  drone_maker: string;
  drone_model: string;
  drone_type: string;
  farmer_id: number | string | null;
  land_id: number | string | null;
  mission_id: number | string | null;
  pilot_id: number | string | null;
  service_type: string;
  status: string;
}
