import { useState } from "react";
import { useNotesQuery } from "../../hooks/useNotesQuery";
import { useDebounce } from "use-debounce";
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
  const [searchInputDebounced] = useDebounce(searchInput, 500);
  const { data, isPending, isError, error, isSuccess } = useNotesQuery({
    currentPage,
    searchInput: searchInputDebounced,
  });
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleSearchOnChange = (value: string) => {
    setSearchInput(value);
    setPage(1);
  };
  const showNoteList = !isError && data && data?.notes.length > 0;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox onChange={handleSearchOnChange} />
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

      {isPending && <LoaderComponent />}
      {isError && (
        <ErrorComponent>
          <p>{`${error.message}`}</p>
        </ErrorComponent>
      )}
      {showNoteList && isSuccess && <NoteList notes={data.notes} />}
      {isModalOpen && (
        <Modal onBackDropClose={handleModalClose}>
          <NoteForm handleModalClose={handleModalClose} />
        </Modal>
      )}
    </div>
  );
};

export default App;
