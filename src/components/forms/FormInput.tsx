"use client";

import { Input, Textarea } from "@nextui-org/react";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute | "textarea";
};

export const FormInput = ({ name, label, type }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="h-20">
      {type !== "textarea" ? (
        <Input
          label={label}
          variant="bordered"
          type={type}
          {...register(name)}
          isInvalid={!!errors[name]}
          errorMessage={errors[name]?.message as string}
        />
      ) : (
        <Textarea
          label={label}
          variant="bordered"
          type={type}
          {...register(name)}
          isInvalid={!!errors[name]}
          errorMessage={errors[name]?.message as string}
          minRows={6}
        />
      )}
    </div>
  );
};
