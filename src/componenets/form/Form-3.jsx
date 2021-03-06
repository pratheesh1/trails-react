import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import FileUpload from "./File-Upload";
import Cancel from "./Cancel";
import FormType from "./Form-Type";
import { useFormStore } from "../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formPage3 } from "../../validation";

function Form3(props) {
  //get state values and functions from different stores
  const { describeTrail, imageLink, imgTempLink } = useFormStore(
    (state) => state.formData
  );
  const {
    updateForm,
    formNextPage,
    formPreviousPage,
    discardFile,
    addImgLink,
  } = useFormStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formPage3),
  });

  //watch for input value changes and update state
  watch((data) => {
    for (const key in data) {
      updateForm(key, data[key]);
    }
  });

  //create list of images
  const createList = () => {
    return imageLink.map((link, index) => (
      <p className="image-links-list m-0 overflow-hidden fs-6" key={index}>
        Image {index + 1} <i className="fas fa-times text-danger"></i>
      </p>
    ));
  };

  //validate and add image link to state
  //regex for url validation
  const validateLink = (link) => {
    const regex = /(http(s?):)([/|.|\w|\s|-])*\./g;
    if (regex.test(link)) {
      addImgLink(link);
    } else {
      alert("Invalid URL");
    }
  };

  return (
    <React.Fragment>
      <div className="row w-100 p-0 m-0">
        <form onSubmit={handleSubmit(formNextPage)}>
          <div className="container form-wrapper">
            <div className="container from-content-wrapper">
              <div className="row p-0 m-0">
                {/* Heading */}
                <FormType type={props.type} />
                {/* non-responsive pagination */}
                <div className="row p-0 m-0 pagination">
                  <div className="row p-0 m-0"></div>
                  <Pagination page={3} />
                  <hr className="bg-secondary form-hr" />
                </div>
                <div className="row p-0 m-0">
                  {/* Form */}
                  <div className="col-12 p-0">
                    <div className="row p-0 m-0 my-lg-3 form-row">
                      <div className="col-12 my-3 my-lg-0">
                        <p className="field-heading m-0">describe the trail</p>
                        <textarea
                          {...register("describeTrail")}
                          className="filed-input-xlarge"
                          placeholder="Detailed post on the trail"
                          value={describeTrail}
                        />
                        {errors.describeTrail && (
                          <p className="form-error">
                            {errors.describeTrail.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="row p-0 m-0 my-lg-3 form-row">
                      <div className="col-12 my-1 my-lg-0">
                        <div className="row m-0 p-0">
                          <p className="field-heading m-0 p-0 my-lg-2">
                            Upload image
                          </p>
                          <div className="col-12 col-lg-7 p-0 upload-wrapper">
                            {/* File upload */}
                            {imageLink.length === 0 ? (
                              <React.Fragment>
                                <FileUpload />
                              </React.Fragment>
                            ) : (
                              <div className="row m-0 h-100 file-upload d-flex justify-content-center align-items-center">
                                {createList()}
                              </div>
                            )}
                          </div>
                          <div className="col-12 col-lg-5 p-0 d-flex d-lg-block">
                            <div className="col-6 col-lg-12 px-lg-3">
                              <button
                                type="button"
                                className="btn btn-previous btn-choose-file align-middle px-0"
                                data-bs-toggle="modal"
                                data-bs-target="#uploadImgModal"
                              >
                                Choose File
                              </button>
                            </div>
                            <div className="col-6 col-lg-12 px-lg-3 d-flex d-md-block justify-content-end">
                              <button
                                type="button"
                                className="btn my-lg-2 btn-discard align-middle"
                                onClick={() => {
                                  discardFile();
                                }}
                              >
                                Discard Files
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  {/* Buttons */}
                  <div className="col-6 d-flex justify-content-start">
                    <button
                      type="button"
                      className="btn my-2 btn-cancel align-middle"
                      data-bs-toggle="modal"
                      data-bs-target="#cancelModal"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn my-2 btn-previous align-middle"
                      onClick={() => {
                        formPreviousPage();
                      }}
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="btn my-2 btn-continue align-middle"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="uploadImgModal"
        tabIndex="-1"
        aria-labelledby="uploadImgModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title field-heading">Add Image Links</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col-12">
                <p className="field-heading m-0">image link</p>
                <div className="d-flex flex-row">
                  <input
                    type="text"
                    {...register("imgTempLink")}
                    className="filed-input-modal"
                    placeholder="Trail name"
                    value={imgTempLink}
                  />
                  <button
                    type="submit"
                    className="btn btn-add-img align-middle"
                    onClick={() => {
                      validateLink(imgTempLink);
                    }}
                  >
                    Add Image
                  </button>
                </div>
              </div>
              <div className="col-12 my-2">{createList()}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn my-lg-2 btn-discard align-middle"
                onClick={() => {
                  discardFile();
                }}
              >
                Discard Files
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cancel />
    </React.Fragment>
  );
}

export default Form3;
