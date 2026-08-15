import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";

interface SearchBoxProps {
  onChange: (value: string) => void;

}
const SearchBox = ({ onChange }: SearchBoxProps) => {
  const onChangeDebounced = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value.trim());
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
