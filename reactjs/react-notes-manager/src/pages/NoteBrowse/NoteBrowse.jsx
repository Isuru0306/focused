import { NoteList } from "components/NoteList/NoteList";
import SearchBar from "components/SearchBar/SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NoteBrowse() {
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    const containsContent = note.content
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    return containsTitle || containsContent;
  });

  return (
    <div>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar
            onTextChange={setSearchTerm}
            placeholder="Search your notes..."
          />
        </div>
      </div>
      {noteList.length === 0 && (
        <div className="d-flex justify-content-center">
          No notes, do you you want to create one? &nbsp;
          <Link to="/note/new">Create one</Link>
        </div>
      )}
      <NoteList noteList={filteredNoteList} />
    </div>
  );
}
