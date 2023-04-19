import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  technician: { status: false, helperData: null },

  technicianFilter: { status: false, helperData: null },

  purchaseRequestFilter: { status: false, helperData: null },

  taskPending: { status: false, helperData: null },

  taskCompleted: { status: false, helperData: null },

  materialReceived: { status: false, helperData: null },

  allVehicle: { status: false, helperData: null },

  onGoing: { status: false, helperData: null },

  pendingViewDetails: { status: false, helperData: null },

  filterDate: { status: false, helperData: null },

  driverUploadedData: { status: false, helperData: null },

  assignReportDetails: { status: false, helperData: null },

  shiftVehicle: { status: false, helperData: null },

  raiseIssueSlip: { status: false, helperData: null },

  riseMainPagePopUp: { status: false, helperData: null },

  risePR: { status: false, helperData: null },

  nonInventoryItems: { status: false, helperData: null },

  addItemPopUp: { status: false, helperData: null },

  serviceIssueSlip: { status: false, helperData: null },

  serviceViewDetails: { status: false, helperData: null },
};

const popupSlice = createSlice({
  name: `popup`,

  initialState: initialState,

  reducers: {
    openTechnicianPopUp(state, action) {
      state.technician.status = true;
      state.technician.helperData = action.payload;
    },

    closeTechnicianPopUp(state, action) {
      state.technician.status = false;
      state.technician.helperData = null;
    },

    openTechnicianFilterPopUp(state, action) {
      state.technicianFilter.status = true;
      state.technicianFilter.helperData = action.payload;
    },

    closeTechnicianFilterPopUp(state, action) {
      state.technicianFilter.status = false;
      state.technicianFilter.helperData = null;
    },

    openPurchaseFilterPopUp(state, action) {
      state.purchaseRequestFilter.status = true;
      state.purchaseRequestFilter.helperData = action.payload;
    },

    closePurchaseFilterPopUp(state, action) {
      state.purchaseRequestFilter.status = false;
      state.purchaseRequestFilter.helperData = null;
    },

    openPendingFilterPopUp(state, action) {
      state.taskPending.status = true;
      state.taskPending.helperData = action.payload;
    },

    closePendingFilterPopUp(state, action) {
      state.taskPending.status = false;
      state.taskPending.helperData = null;
    },

    openCompletedFilterPopUp(state, action) {
      state.taskCompleted.status = true;
      state.taskCompleted.helperData = action.payload;
    },

    closeCompletedFilterPopUp(state, action) {
      state.taskCompleted.status = false;
      state.taskCompleted.helperData = null;
    },

    openAllVehicleFilterPopUp(state, action) {
      state.allVehicle.status = true;
      state.allVehicle.helperData = action.payload;
    },

    closeAllVehicleFilterPopUp(state, action) {
      state.allVehicle.status = false;
      state.allVehicle.helperData = null;
    },

    openOngoingFilterPopUp(state, action) {
      state.onGoing.status = true;
      state.onGoing.helperData = action.payload;
    },
    closeOngoingFilterPopUp(state, action) {
      state.onGoing.status = false;
      state.onGoing.helperData = null;
    },
    openPendingViewDetails(state, action) {
      state.pendingViewDetails.status = true;
      state.pendingViewDetails.helperData = action.payload;
    },
    closePendingViewDetails(state, action) {
      state.pendingViewDetails.status = false;
      state.pendingViewDetails.helperData = null;
    },
    openUserDateFilterViewDetails(state, action) {
      state.filterDate.status = true;
      state.filterDate.helperData = action.payload;
    },
    closesUserDateFilterViewDetails(state, action) {
      state.filterDate.status = false;
      state.filterDate.helperData = null;
    },
    openDriverUploadedData(state, action) {
      state.driverUploadedData.status = true;
      state.driverUploadedData.helperData = action.payload;
    },
    closeDriverUploadedData(state, action) {
      state.driverUploadedData.status = false;
      state.driverUploadedData.helperData = null;
    },
    openAssignReportDetails(state, action) {
      state.assignReportDetails.status = true;
      state.assignReportDetails.helperData = action.payload;
    },
    closeAssignReportDetails(state, action) {
      state.assignReportDetails.status = false;
      state.assignReportDetails.helperData = null;
    },
    openShiftVehiclePopup(state, action) {
      state.shiftVehicle.status = true;
      state.shiftVehicle.helperData = action.payload;
    },
    closeShiftVehiclePopup(state, action) {
      state.shiftVehicle.status = false;
      state.shiftVehicle.helperData = null;
    },

    openRaiseIssueSlipPopup(state, action) {
      state.raiseIssueSlip.status = true;
      state.raiseIssueSlip.helperData = action.payload;
    },
    closeRaiseIssueSlipPopup(state, action) {
      state.raiseIssueSlip.status = false;
      state.raiseIssueSlip.helperData = null;
    },

    openRaisePR(state, action) {
      state.risePR.status = true;
      state.risePR.payload = action.payload;
    },
    closeRaisePR(state, action) {
      state.risePR.status = false;
      state.risePR.payload = null;
    },

    openNonInventoryItemsPopup(state, action) {
      state.nonInventoryItems.status = true;
      state.nonInventoryItems.payload = action.payload;
    },
    closeNonInventoryItemsPopup(state, action) {
      state.nonInventoryItems.status = false;
      state.nonInventoryItems.payload = null;
    },

    openRiseMainPagePopUp(state, action) {
      state.riseMainPagePopUp.status = true;
      state.riseMainPagePopUp.payload = action.payload;
    },
    closeRiseMainPagePopUp(state, action) {
      state.riseMainPagePopUp.status = false;
      state.riseMainPagePopUp.payload = null;
    },
    openAddItemPopUp(state, action) {
      state.addItemPopUp.status = true;
      state.addItemPopUp.payload = action.payload;
    },
    closeAddItemPopUp(state, action) {
      state.addItemPopUp.status = false;
      state.addItemPopUp.payload = null;
    },
    openMaterialReceivedPopUp(state, action) {
      state.materialReceived.status = true;
      state.materialReceived.payload = action.payload;
    },
    closeMaterialReceivedPopUp(state, action) {
      state.materialReceived.status = false;
      state.materialReceived.payload = null;
    },
    openServiceIssueSlipPopUp(state, action) {
      state.serviceIssueSlip.status = true;
      state.serviceIssueSlip.payload = action.payload;
    },
    closeServiceIssueSlipPopup(state, action) {
      state.serviceIssueSlip.status = false;
      state.serviceIssueSlip.payload = null;
    },
    openServiceViewDetailsPopUp(state, action) {
      state.serviceViewDetails.status = true;
      state.serviceViewDetails.payload = action.payload;
    },
    closeServiceViewDetailsPopup(state, action) {
      state.serviceViewDetails.status = false;
      state.serviceViewDetails.payload = null;
    },
  },
});

export const {
  openTechnicianPopUp,
  closeTechnicianPopUp,
  openTechnicianFilterPopUp,
  closeTechnicianFilterPopUp,
  openPurchaseFilterPopUp,
  closePurchaseFilterPopUp,
  closePendingFilterPopUp,
  openPendingFilterPopUp,
  openCompletedFilterPopUp,
  closeCompletedFilterPopUp,
  openAllVehicleFilterPopUp,
  closeAllVehicleFilterPopUp,
  closeOngoingFilterPopUp,
  openOngoingFilterPopUp,
  openPendingViewDetails,
  closePendingViewDetails,
  openUserDateFilterViewDetails,
  closesUserDateFilterViewDetails,
  openDriverUploadedData,
  closeDriverUploadedData,
  openAssignReportDetails,
  closeAssignReportDetails,
  openShiftVehiclePopup,
  closeShiftVehiclePopup,
  openRaiseIssueSlipPopup,
  closeRaiseIssueSlipPopup,
  openRiseMainPagePopUp,
  closeRiseMainPagePopUp,
  openRaisePR,
  closeRaisePR,
  openNonInventoryItemsPopup,
  closeNonInventoryItemsPopup,
  openAddItemPopUp,
  closeAddItemPopUp,
  openMaterialReceivedPopUp,
  closeMaterialReceivedPopUp,
  openServiceIssueSlipPopUp,
  closeServiceIssueSlipPopup,
  openServiceViewDetailsPopUp,
  closeServiceViewDetailsPopup,
} = popupSlice.actions;

export default popupSlice.reducer;
