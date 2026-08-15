import { useState } from "react";
import { useNotesQuery } from "../../hooks/useNotesQuery";
import { useNotesMutation } from "../../hooks/useNotesMutatePost";
import { useNotesMutationDelete } from "../../hooks/useNotesMutationDelete";
import css from "./App.module.css";

import NoteList from "../NoteList/NoteList";
import SearchBox from "../SearchBox/SearchBox";
import Pagination from "../Pagination/Pagination";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const { data, isFetching, isError, error, isSuccess } = useNotesQuery({
    currentPage,
    searchInput,
  });
  const postNote = useNotesMutation();
  const deleteNote = useNotesMutationDelete()
  const showNoteList =
    !isFetching || postNote.isPending && !isError && data && data?.notes.length > 0;

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox setSearchInput={setSearchInput} setPage={setPage} />
        {showNoteList && isSuccess && data.totalPages >= 1 && (
          <Pagination
            totalPages={data.totalPages}
            setPage={setPage}
            currentPage={currentPage}
          />
        )}
        <button className={css.button} onClick={() => setIsModalOpen(true)}>
          Create note +
        </button>
      </header>

      {isFetching && <LoaderComponent />}
      {isError && (
        <ErrorComponent>
          <p>{`${error.message}`}</p>
        </ErrorComponent>
      )}
      {showNoteList && isSuccess && <NoteList notes={data.notes} deleteNoteFn={deleteNote.mutate}/>}
      {isModalOpen && (
        <Modal onBackDropClose={handleModalClose}>
          <NoteForm handleModalClose={handleModalClose} mutateFn={postNote.mutate} />
        </Modal>
      )}
    </div>
  );
};

export default App;
