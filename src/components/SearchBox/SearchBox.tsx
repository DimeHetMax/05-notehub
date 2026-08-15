import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";

interface SearchBoxProps {
  setSearchInput: (search: string) => void;
  setPage: (pageNumber: number) => void;
}
const SearchBox = ({ setSearchInput, setPage }: SearchBoxProps) => {
  const onChangeDebounced = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value.trim());
      setPage(1);
    },
    1000,
  );
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={onChangeDebounced}
    />
  );
};
export default SearchBox;
