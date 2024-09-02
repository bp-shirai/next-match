"use client";

import { RegisterSchema } from "@lib/schemas/RegisterSchema";
import { Input } from "@nextui-org/input";
import { HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  useForm,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormReturn,
  useController,
  UseControllerProps,
  Control,
  useFormContext,
} from "react-hook-form";

type Props = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
};

//export const FormInput = (props: UseControllerProps<RegisterSchema>) => {
//const { field, fieldState } = useController(props);
export const FormInput = ({ name, label, type }: Props) => {
  //  const { field, fieldState } = useController({ control, name });
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="h-20">
      <Input
        label={label}
        variant="bordered"
        type={type}
        {...register(name)}
        isInvalid={!!errors[name]}
        errorMessage={errors[name]?.message as string}
      />
    </div>
  );
};
