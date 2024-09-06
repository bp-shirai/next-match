import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { PiSpinnerGap } from "react-icons/pi";

type Props = {
  selected: boolean;
  loading: boolean;
};

export function StarButton({ selected, loading }: Props) {
  return (
    <div className="relative hover:opacity-80 transition cursor-pointer">
      {!loading ? (
        <>
          <AiOutlineStar size={32} className="fill-neutral-300 absolute" />
          <AiFillStar size={32} className={selected ? "fill-yellow-300" : "fill-neutral-50"} />
        </>
      ) : (
        <>
          <PiSpinnerGap size={32} className="fill-white animate-spin" />
        </>
      )}
    </div>
  );
}
