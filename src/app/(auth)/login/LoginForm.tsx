"use client";

import { signInUser } from "@app/actions/authActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@lib/schemas/loginSchema";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { HTMLInputTypeAttribute } from "react";
import { FieldError, useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";
import { toast } from "react-toastify";

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  type FormInputProps = {
    label: string;
    type?: HTMLInputTypeAttribute;
    name: keyof LoginSchema;
  };

  const FormInput = ({ label, type, name }: FormInputProps) => {
    return (
      <div className="h-20">
        <Input
          label={label}
          variant="bordered"
          type={type}
          {...register("password")}
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
        />
      </div>
    );
  };

  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);
    if (result.status === "success") {
      router.push("/members");
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <p className="text-neutral-500">Welcome to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="h-20">
              <Input
                label="Email"
                variant="bordered"
                type="email"
                {...register("email")}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
              />
            </div>
            <div className="h-20">
              <Input
                label="Password"
                variant="bordered"
                type="password"
                {...register("password")}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
              />
            </div>
            <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color="secondary" type="submit">
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
