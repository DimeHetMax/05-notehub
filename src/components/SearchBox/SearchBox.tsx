import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";

interface SearchBoxProps {
  onChange: (value: string) => void;
}
const SearchBox = ({ onChange }: SearchBoxProps) => {
  const onChangeDebounced = useDebouncedCallback((value: string) => {
    onChange(value);
  }, 500);
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onChangeDebounced(event.target.value.trim())
      }
    />
  );
};
export default SearchBox;
