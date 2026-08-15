import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../services/noteService";
import type { Note } from "../types/note";


export const useNotesMutation = (handleModalClose: ()=>void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newNote: Pick<Note, "title" | "content" | "tag">) => await createNote(newNote),
    onSuccess: () => {
      console.log("Success");
      handleModalClose()
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};
