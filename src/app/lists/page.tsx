import { fetchCurrentUserLikeIds, fetchLikedMembers } from "@app/actions/likeActions";
import { ListTab } from "./ListTab";

export default async function ListsPage({ searchParams }: { searchParams: { type: string } }) {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListTab members={members} likeIds={likeIds} />
    </div>
  );
}
