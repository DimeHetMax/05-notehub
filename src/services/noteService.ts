import { API } from "./baseAPI";
import type { Note } from "../types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  currentPage: number,
  search: string,
): Promise<FetchNotesResponse> => {
  const response = await API.get<FetchNotesResponse>("/notes", {
    params: {
      search,
      page: currentPage,
      perPage: 12,
    },
  });
  return response.data;
};

export const createNote = async (body: Pick<Note, "title" | "content" | "tag">) => {
  const response = await API.post<Note>("/notes", body);
  console.log(response.data);
};

export const deleteNote = async(id: string) => {
 const response = await API.delete(`/notes/${id}`);
 console.log(response.data);
};
