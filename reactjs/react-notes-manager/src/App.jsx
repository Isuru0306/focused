import { NoteAPI } from "api/note-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";

export function App() {
  const dispatch = useDispatch();

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
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
    </div>
  );
}