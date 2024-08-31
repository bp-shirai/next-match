"use client";

import { registerUser } from "@app/actions/authActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerSchema } from "@lib/schemas/RegisterSchema";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { HTMLInputTypeAttribute } from "react";
import { FieldError, useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", password: "" },
  });

  type FormInputProps<T> = {
    label: string;
    type?: HTMLInputTypeAttribute;
    name: keyof T;
    error?: FieldError;
  };

  const FormInput = ({ label, type, name, error }: FormInputProps<RegisterSchema>) => {
    return (
      <div className="h-20">
        <Input label={label} variant="bordered" type={type} {...register(name)} isInvalid={!!error} errorMessage={error?.message} />
      </div>
    );
  };

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);

    if (result.status === "success") {
      console.log("User registered successfully!!");
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach(e => {
          const fieldName = e.path.join(".") as "email" | "name" | "password";
          setError(fieldName, { message: e.message });
        });
      } else {
        setError("root.serverError", { message: result.error });
      }
    }
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Register</h1>
          </div>
          <p className="text-neutral-500">Welcome to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormInput label="Name" type="text" name="name" error={errors.name} />
            <FormInput label="Email" type="email" name="email" error={errors.email} />
            <FormInput label="Password" type="password" name="password" error={errors.password} />
            {errors.root?.serverError && <p className="text-danger text-sm">{errors.root.serverError.message}</p>}
            <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color="secondary" type="submit">
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
