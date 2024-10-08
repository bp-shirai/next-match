"use client";

import { registerUser } from "@app/actions/authActions";
import { FormInput } from "@components/forms/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerSchema } from "@lib/schemas/RegisterSchema";
import { handleFormServerErrors } from "@lib/util";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { FormProvider, useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

export function RegisterForm() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", password: "" },
  });

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = form;

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);

    if (result.status === "success") {
      console.log("User registered successfully!!");
    } else {
      handleFormServerErrors(result, setError);
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
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormInput name="name" label="Name" type="text" />
              <FormInput name="email" label="Email" type="email" />
              <FormInput name="password" label="Password" type="password" />
              {errors.root?.serverError && <p className="text-danger text-sm">{errors.root.serverError.message}</p>}
              <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color="secondary" type="submit">
                Register
              </Button>
            </div>
          </form>
        </FormProvider>
      </CardBody>
    </Card>
  );
}
