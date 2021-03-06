import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import Confirmation from "./Confirmation";
import FormType from "./Form-Type";
import { useFormStore } from "../../store";

function Form5(props) {
  //get state values and functions from different stores
  const formUpdateStatus = useFormStore((state) => state.formUpdateStatus);

  return (
    <React.Fragment>
      <div className="row p-0 m-0">
        <div className="container form-wrapper">
          <div className="container from-content-wrapper">
            <div className="row p-0 m-0">
              {/* Heading */}
              <FormType type={props.type} />
              {/* non-responsive pagination */}
              <div className="row p-0 m-0 pagination">
                <div className="row p-0 m-0"></div>
                <Pagination page={5} />
                <hr className="bg-secondary form-hr" />
              </div>
              <div className="row p-0 m-0">
                {/* Form */}
                <div className="col-12 p-0 d-flex align-items-center justify-content-center confirmation-wrapper">
                  <Confirmation confirmation={formUpdateStatus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form5;
