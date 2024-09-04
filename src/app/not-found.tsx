import { Link } from "@nextui-org/react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="mt-[-50px] flex items-center gap-5 text-neutral-400 sm:mt-[-150px]">
        <span className="text-[100px] sm:text-[200px]">4</span>
        <span className="text-[100px] sm:text-[200px]">0</span>
        <span className="text-[100px] sm:text-[200px]">4</span>
      </div>
      <h2 className="text-xl font-semibold text-black dark:text-white sm:text-3xl">お探しのページは見つかりませんでした</h2>
      <Link href="/" className="text-sm underline transition-colors duration-300 dark:text-white dark:hover:text-slate-300 sm:text-base">
        ホームへ戻る
      </Link>
    </div>
  );
}
