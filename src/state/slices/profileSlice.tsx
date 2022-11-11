import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BillingDetailsType,
  CreateProfileDetailsType,
  DrivingLicenceType,
  FarmerType,
  FarmType,
  LandOwnerType,
} from "../../model/interfaces";

const initialState: CreateProfileDetailsType = {
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
  drivingLicence: {
    name: "",
    licenceId: "",
    image: "",
  },
  billing: {},
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    addUserDetails: (state, action: PayloadAction<FarmerType>) => {
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
  },
});

export const {
  addUserDetails,
  addFarmDetails,
  addLandOwner,
  addDrivingLicence,
  addBillingInfo,
} = archiveSlice.actions;

export default archiveSlice.reducer;
