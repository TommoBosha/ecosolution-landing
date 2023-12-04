import React from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import "./styles.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        className="form-container"
        target="_blank"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          label="* Full Name"
          placeholder="John Rosie"
          register={register}
          rules={{
            required: "This field is required",
            pattern: {
              value: /^\w+\s\w+$/gm,
              message: "Wrong Fullname",
            },
          }}
          errors={errors}
        />

        <FormInput
          label="* Email"
          type="email"
          placeholder="johnrosie@gmail.com"
          register={register}
          rules={{
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
              message: "Wrong Email",
            },
          }}
          errors={errors}
        />

        <FormInput
          label="* Phone"
          type="tel"
          placeholder="380961234567"
          register={register}
          rules={{
            required: "This field is required",
            pattern: {
              value: /^\+?(38)?(\d{10,11})$/,
              message: "Wrong Phone",
            },
          }}
          errors={errors}
        />

        <FormInput
          label="Message"
          type="textarea"
          placeholder="Your message"
          register={register}
          rules={{
            maxLength: {
              value: 2000,
              message: "Max length is 2000 characters",
            },
          }}
          errors={errors}
        />

        <div className="form-btn-wrp">
          <button className="form-btn" type="submit">
            <p className="form-btn-text">Send</p>
            <div className="form-svg-wrp">
              <svg className="form-svg">
                <use xlinkHref="/images/icons.svg#icon-arrow-right" />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </>
  );
}
