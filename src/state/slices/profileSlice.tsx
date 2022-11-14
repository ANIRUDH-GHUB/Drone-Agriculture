import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BillingDetailsType,
  CreateProfileDetailsType,
  DrivingLicenceType,
  UserType,
  FarmType,
  LandOwnerType,
  PilotCertificateType,
} from "../../model/interfaces";

export const initialProfileState: CreateProfileDetailsType = {
  userDetails: {
    name: "",
    phone: "",
    email: "",
    birthday: null,
    gender: "",
  },
  farms: [],
  landOwner: {
    name: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    totalArea: 0,
    date: null,
  },
  pilotCertificate: {
    name: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    gender: "",
    certificatinId: "",
    height: "",
    weight: "",
  },
  drivingLicence: {
    name: "",
    licenceId: "",
    image: "",
  },
  billing: {},
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState: initialProfileState,
  reducers: {
    addUserDetails: (state, action: PayloadAction<UserType>) => {
      state.userDetails = action.payload;
    },
    addFarmDetails: (state, action: PayloadAction<FarmType>) => {
      state.farms = [action.payload];
    },
    addLandOwner: (state, action: PayloadAction<LandOwnerType>) => {
      state.landOwner = action.payload;
    },
    addDrivingLicence: (state, action: PayloadAction<DrivingLicenceType>) => {
      state.drivingLicence = action.payload;
    },
    addBillingInfo: (state, action: PayloadAction<BillingDetailsType>) => {
      state.billing = action.payload;
    },
    addPilotCertificateInfo: (
      state,
      action: PayloadAction<PilotCertificateType>
    ) => {
      state.pilotCertificate = action.payload;
    },
  },
});

export const {
  addUserDetails,
  addFarmDetails,
  addLandOwner,
  addDrivingLicence,
  addBillingInfo,
  addPilotCertificateInfo,
} = archiveSlice.actions;

export default archiveSlice.reducer;
