import { NoteAPI } from "api/note-api";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Header } from "components/Header/Header";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";

import s from "./style.module.css";

export function App() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  async function fetchNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <ButtonPrimary
        className={s.buttonAdd}
        onClick={() => Navigate("/note/new")}
      >
        +
      </ButtonPrimary>
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
    </div>
  );
}

export const ProtectApp = withAuthRequired(App);
//
