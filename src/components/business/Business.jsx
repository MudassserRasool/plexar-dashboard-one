import React from "react";
import "./assets/css/style.css";
import Building from "./assets/images/building.jpg";

const Business = () => {
  return (
    <div className="">
      <div className="container mt-2 " style={{ borderRadius: '10px', boxShadow: 'red' }}>
        <div className="row containerBorderRadius">
          {/* Start left side */}
          <div className="col-md-4 leftCoustomColor d-flex align-items-center">
            <div className="d-flex flex-column mx-md-4 my-2 my-md-0">
              {/* image */}
              <div className="buildingImageBackground mx-auto mx-md-0">
                <img
                  src={Building}
                  alt="contant not load"
                  width={30}
                  height={30}
                  className="img-fluid"
                />
              </div>
              {/* heading */}
              <h1 className="coustomHeadingText" style={{ margin: '12px 0 21px' }}>
                Tell us about your Business
              </h1>
              {/* Para */}
              <p className="coustomParaText" style={{ margin: '2px 0 21px' }}>
                Select your state in which you want to incorporate your new
                Business.
              </p>
            </div>
          </div>
          {/* End left side */}

          {/* Right side */}
          <div className="col-md-7 mx-auto">
       
            <div className="row mt-4 mt-md-0 ">
              <form className="my-md-2 mb-3">
                {/*Start upload file area */}
                <div className="uploadFile ">
                  <label htmlFor="fileInput" className="fileInput">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#aaa"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                      style={{ marginLeft: "8px" }}
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    <span className="text-center logoUpload">Logo</span>
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                {/*End upload file area */}

                {/*Start Bussines Name Input */}
                <div className="form-group inputCoustomBg rounded p-1 mt-4" >
                  <label
                    htmlFor="inputAddress2"
                    className="custom-label"
                    style={{ marginLeft: "11px" }}
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control inputFieldCoustomBg custom-input"
                    id="inputAddress2"
                    placeholder="Enter First Name"
                    style={{ border: "none" }}
                  />
                </div>
                {/*End First Input */}

                {/*Start Flex area of two selector */}
                <div className="d-flex flex-column flex-md-row">
                  {/* Start First Input Selector*/}
                  <div className="form-group inputCoustomBg rounded p-1 w-100 w-md-50 mt-4 me-md-2">
                    <label
                      htmlFor="inputAddress2"
                      className="custom-label"
                      style={{ marginLeft: "11px" }}
                    >
                      Business Type
                    </label>
                    <div className="position-relative">
                      <select
                        className="form-control inputFieldCoustomBg custom-input coustomDrpDownText"
                        id="inputAddress2"
                        style={{ border: "none" }}
                      >
                        <option value="">LLC</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <div className="position-absolute top-0 end-0 h-100 d-flex align-items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="#aaa"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                          style={{ margin: "0 8px" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End First Input Selector*/}
                  {/* Start Second Input Selector*/}
                  <div className="form-group inputCoustomBg rounded p-1 w-100 w-md-50 mt-4">
                    <label
                      htmlFor="inputAddress2"
                      className="custom-label"
                      style={{ marginLeft: "11px" }}
                    >
                      Industry
                    </label>
                    <div className="position-relative">
                      <select
                        className="form-control inputFieldCoustomBg custom-input coustomDrpDownText"
                        id="inputAddress2"
                        style={{ border: "none" }}
                      >
                        <option value="" className="">
                          Education
                        </option>
                        <option value="option1" className="">
                          Option 1
                        </option>
                        <option value="option2" className="">
                          Option 2
                        </option>
                        <option value="option3" className="">
                          Option 3
                        </option>
                      </select>
                      <div className="position-absolute top-0 end-0 h-100 d-flex align-items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="#aaa"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                          style={{ margin: "0 8px" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End Second Input Selector*/}
                </div>

                {/*End Flex area of two selector */}

                {/*Start Adress Input */}
                <div className="form-group inputCoustomBg rounded p-1 mt-4">
                  <label
                    htmlFor="inputAddress2"
                    className="custom-label"
                    style={{ marginLeft: "11px" }}
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control inputFieldCoustomBg custom-input"
                    id="inputAddress2"
                    placeholder="Enter First Name"
                    style={{ border: "none" }}
                  />
                </div>
                {/*End Adress Input */}

                {/*Start Adress Input */}
                <div className="form-group inputCoustomBg rounded p-1 mt-4">
                  <label
                    htmlFor="inputAddress2"
                    className="custom-label"
                    style={{ marginLeft: "11px" }}
                  >
                    Business Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control inputFieldCoustomBg custom-input"
                    id="inputAddress2"
                    placeholder="Type Description Here"
                    style={{ border: "none" }}
                    rows="4"
                  />
                </div>
                {/*End Adress Input */}

                {/*Start Buttons */}

                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <button
                    className="btn  coustomCancelBtnStyle me-md-2 "
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="btn coustomCreateBtnStyle coustomCreateBtnFontStyle"
                    type="button"
                  >
                    Create
                  </button>
                </div>
                {/*End Buttons */}
              </form>
            </div>
            {/*End <Form/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
