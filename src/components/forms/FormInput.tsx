"use client";

import { Input } from "@nextui-org/input";
import { HTMLInputTypeAttribute } from "react";
import { FieldError, FieldValues, useForm, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export type FormInputProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  //name: keyof T;
  error?: FieldError;
};

export const FormInput = ({ label, type, error }: FormInputProps) => {
  return (
    <div className="h-20">
      <Input label={label} variant="bordered" type={type} isInvalid={!!error} errorMessage={error?.message} />
    </div>
  );
};
