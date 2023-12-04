import React from "react";
import "./styles.css";

export const FormInput = ({
  label,
  type,
  placeholder,
  register,
  rules,
  errors,
}) => {
  return (
    <>
      <label htmlFor={label} className="label">
        {label}:
      </label>
      {type === "textarea" ? (
        <textarea
          className={`input textarea  ${
            errors && errors[label.toLowerCase()] ? "errorStyles" : ""
          }`}
          id={label}
          name={label.toLowerCase()}
          placeholder={placeholder}
          {...register(label.toLowerCase(), rules)}
        />
      ) : (
        <input
          className={`input ${
            errors && errors[label.toLowerCase()] ? "errorStyles" : ""
          }`}
          id={label}
          name={label.toLowerCase()}
          type={type || "text"}
          placeholder={placeholder}
          {...register(label.toLowerCase(), rules)}
        />
      )}
      {errors && errors[label.toLowerCase()] && (
        <p className="err ">{errors[label.toLowerCase()].message}</p>
      )}
    </>
  );
};
