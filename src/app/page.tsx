import { Button } from "@nextui-org/button";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home Page!</h1>
      <Button color="primary" variant="bordered" startContent={<FaRegSmile size={20} />}>
        Click me
      </Button>
    </div>
  );
}
