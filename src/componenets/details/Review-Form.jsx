import React from "react";
import { useDetailedViewStore } from "../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addReviewForm } from "../../validation";

export default function ReviewForm() {
  //get state values and functions from different stores
  const { updateForm, addReview } = useDetailedViewStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addReviewForm),
  });

  //onsubmit callback function
  const onContinue = (data) => {
    for (const key in data) {
      updateForm(key, data[key]);
      reset();
    }
    addReview();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onContinue)}>
        <div className="row m-0 px-2 main-text">
          Been on this adventure? Leave a review.
        </div>
        <div className="row m-0">
          {/* review star */}
          <div className="rating justify-content-center">
            <input
              type="radio"
              id="star5"
              {...register("rating")}
              value="5"
              className="star-radio"
            />
            <label
              className="star-label"
              htmlFor="star5"
              title="5 star"
              aria-label="rating"
            >
              <i className="fas fa-star px-3"></i>
            </label>
            <input
              type="radio"
              id="star4"
              {...register("rating")}
              value="4"
              className="star-radio"
            />
            <label
              className="star-label"
              htmlFor="star4"
              title="4 star"
              aria-label="rating"
            >
              <i className="fas fa-star px-3"></i>
            </label>
            <input
              type="radio"
              id="star3"
              {...register("rating")}
              value="3"
              className="star-radio"
            />
            <label
              className="star-label"
              htmlFor="star3"
              title="3 star"
              aria-label="rating"
            >
              <i className="fas fa-star px-3"></i>
            </label>
            <input
              type="radio"
              id="star2"
              {...register("rating")}
              value="2"
              className="star-radio"
            />
            <label
              className="star-label"
              htmlFor="star2"
              title="2 star"
              aria-label="rating"
            >
              <i className="fas fa-star px-3"></i>
            </label>
            <input
              type="radio"
              id="star1"
              {...register("rating")}
              value="1"
              className="star-radio"
            />
            <label
              className="star-label"
              htmlFor="star1"
              title="1 star"
              aria-label="rating"
            >
              <i className="fas fa-star px-3"></i>
            </label>
          </div>
        </div>
        <div className="row m-0 my-3">
          {errors.rating && (
            <p className="form-error">{errors.rating.message}</p>
          )}
          <div className="col-12 col-xl-6">
            <p className="field-heading m-0">name</p>
            <input
              type="text"
              {...register("username")}
              className="filed-input-small"
              placeholder="Name"
            />
            {errors.username && (
              <p className="form-error">{errors.username.message}</p>
            )}
          </div>
          <div className="col-12 col-xl-6">
            <p className="field-heading m-0">email</p>
            <input
              type="text"
              {...register("email")}
              className="filed-input-small"
              placeholder="Name"
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12">
            <textarea
              type="text"
              {...register("reviewText")}
              className="review-text"
              placeholder="Tell us what you think"
            />
          </div>
        </div>
        <div className="row m-0 d-flex justify-content-end submit-review-btn-wrapper">
          <button type="submit" className="btn submit-review-btn">
            Submit Review
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
