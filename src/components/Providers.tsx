"use client";

import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      <ToastContainer />
      {children}
    </NextUIProvider>
  );
}
