import css from "./NoteList.module.css";
import type { Note } from "../../types/note";
interface NoteListProps {
  notes: Note[];
  deleteNoteFn:(id: string)=>void
}
const NoteList = ({ notes , deleteNoteFn}: NoteListProps) => {
  return (
    <ul className={css.list}>
      {notes.map(({ title, id, content, tag }) => (
        <li key={id} className={css.listItem}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.content}>{content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{tag}</span>
            <button className={css.button} onClick={()=> deleteNoteFn(id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default NoteList;
