import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../services/noteService";

export const useNotesMutationDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await deleteNote(id),
    onSuccess: () => {
      console.log("Success");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};
