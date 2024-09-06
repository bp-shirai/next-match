import { getAuthUserId } from "@app/actions/authActions";
import { getMemberByUserId, getMemberPhotosByUserId } from "@app/actions/memberActions";
import { DeleteButton } from "@components/DeleteButton";
import { StarButton } from "@components/StarButton";
import { CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { MemberPhotoUpload } from "./MemberPhotoUpload";
import { ImageUploadButton } from "@components/ImageUploadButton";
import { MemberImage } from "@components/MemberImage";
import { MemberPhotos } from "@components/MemberPhotos";

export default async function PhotosPage() {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="text-2xl font-semibold text-secondary">Update Photos</div>
        <ImageUploadButton />
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="">
          <MemberPhotos photos={photos} editing={true} mainImageUrl={member?.image} />
        </div>
      </CardBody>
    </>
  );
}
