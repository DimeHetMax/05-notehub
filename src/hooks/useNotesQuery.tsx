import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchNotes } from "../services/noteService";

interface useNotesQueryProps {
  currentPage: number;
  searchInput: string;
}
export const useNotesQuery = ({
  currentPage,
  searchInput,
}: useNotesQueryProps) => {
  return useQuery({
    queryKey: ["notes", currentPage, searchInput],
    queryFn: () => fetchNotes(currentPage, searchInput),
    placeholderData: keepPreviousData,
  });
};
