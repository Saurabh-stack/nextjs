import { FormikErrors } from "formik/dist/types";
import React from "react";

interface textboxProps {
  type: "text" | "number" | "email" | "password";
  name: string;
  label?: string;
  errorMessage?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined
    | React.ReactNode;
  disable?: boolean;
  autoComplete?: boolean;
  value: string | undefined;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
const TextInput: React.FC<textboxProps> = ({
  label,
  name,
  value,
  suffix,
  prefix,
  errorMessage,
  disable,
  type,
  autoComplete,
  ...rest
}) => {
  return (
    <div className="relative mb-10">
      <div className="flex items-center">
        {label && (
          <label
            htmlFor={label}
            className="pr-5 uppercase font-normal h-8 text-sm translate-y-1/4"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          disabled={disable}
          autoComplete="false"
          value={value}
          {...rest}
          className={`block w-full font-normal h-8 text-sm px-2 transition duration-300 shadow-sm focus:outline-none rounded bg-gray-700 ring-gray-400 ring-1 text-text_light focust:ring-signature_green border-none
              ${suffix && "pr-6 pb-6"}
              ${prefix && "pl-6"}
              ${disable && "!cursor-not-allowed"}
              `}
        />
        {suffix && (
          <span className="absolute right-2 top-1/2 -translate-y-1/4">
            {suffix}
          </span>
        )}
        {prefix && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2">
            {prefix}
          </span>
        )}
      </div>
      {errorMessage && (
        <div className="absolute mt-2 w-full text-sm text-green-600 font-medium">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default TextInput;
