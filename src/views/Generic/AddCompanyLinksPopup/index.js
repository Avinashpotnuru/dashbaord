import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FormModal from "../FormModal/index";
import { closeAddCompanyLinkPopup } from "../../../redux/slices/companies";
import { useAddCompanyLinksBySlugMutation } from "../../../redux/apis/restApi";

export default function AddCompanyLinksPopup({ slug }) {
  const dispatch = useDispatch();

  const popupStatus = useSelector(
    (state) => state.companies.addCompanyLinkPopup.status
  );

  const helperData = useSelector(
    (state) => state.companies.addCompanyLinkPopup.helperData
  );

  const inputFields = [
    {
      id: 1,
      type: "text",
      fieldTitle: "URL Link",
      fieldName: "url",
      required: true,
      placeholder: "URL Link",
    },
  ];

  return (
    <FormModal
      isOpen={popupStatus}
      formTitle="Upload URL"
      buttonName="Upload"
      slug={helperData?.slug}
      toggler={() => dispatch(closeAddCompanyLinkPopup())}
      inputFields={inputFields}
      postHook={useAddCompanyLinksBySlugMutation}
      successToast="URL added successfully"
    />
  );
}
