"use client";

import { addImage } from "@app/actions/userActions";
import { CldUploadButton, CldUploadWidget, CloudinaryUploadWidgetError, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { Result } from "postcss";
import { HiPhoto } from "react-icons/hi2";
import { toast } from "react-toastify";

type Props = {
  onUploadImage: (result: CloudinaryUploadWidgetResults) => void;
};

export function ImageUploadButton() {
  const router = useRouter();

  const onAddImage = async (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info === "object") {
      await addImage(result.info.secure_url, result.info.public_id);
      router.refresh();
    } else {
      toast.error("Problem adding image");
    }
  };

  const onErrorHandler = (error: CloudinaryUploadWidgetError) => {
    if (typeof error === "object" && error?.statusText) {
      console.error(error.statusText);
      toast.error(error.statusText);
    } else {
      console.error(error);
      toast.error("Problem upload image");
    }
  };

  return (
    /*   <CldUploadButton
      options={{ maxFiles: 1 }}
      onSuccess={onUploadImage}
      signatureEndpoint="/api/sign-image"
      uploadPreset="nm-demo"
      className="flex items-center gap-2 bg-secondary text-white rounded-lg py-2 px-4 hover:bg-secondary/70">
      <HiPhoto size={28} />
      Upload new image
    </CldUploadButton> */

    <CldUploadWidget
      options={{ maxFiles: 1 }}
      signatureEndpoint="/api/sign-image"
      uploadPreset="nm-demo"
      onSuccess={onAddImage}
      onError={onErrorHandler}
      onQueuesEnd={(result, { widget }) => widget.close()}>
      {({ open }) => {
        return (
          <button
            className={`flex items-center gap-2 border-2 border-secondary text-secondary rounded-lg py-2 px-4 hover:bg-secondary/10`}
            onClick={() => open()}>
            <HiPhoto size={28} />
            Upload new Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
