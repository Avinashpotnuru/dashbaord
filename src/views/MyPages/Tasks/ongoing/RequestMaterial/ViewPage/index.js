import { ArrowLeft, X } from "react-feather";

import { useDispatch } from "react-redux";

import { closeRiseMainPagePopUp } from "../../../../../../redux/slices/popup";

import image from "../../../../../../assets/images/srkimages/Rectangle 962.jpg";

const ViewPage = ({ changeHandler }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ backgroundColor: "white", position: "relative" }}>
        <X
          onClick={() => dispatch(closeRiseMainPagePopUp())}
          style={{
            padding: "4px",
            backgroundColor: "white",
            position: "absolute",
            left: "100%",
            bottom: "2px",
            borderRadius: "4px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
      </div>
      <div className="d-flex">
        <ArrowLeft onClick={() => dispatch(closeRiseMainPagePopUp())} />
        <h3 className="m-auto">View Page</h3>
      </div>
      <div className="mx-2 my-5">
        <img className="w-100" src={image} alt="img" />
      </div>
    </div>
  );
};

export default ViewPage;
