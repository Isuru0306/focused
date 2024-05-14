import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteBrowse from "pages/NoteBrowse/NoteBrowse";
import Note from "pages/Note/Note";
import NoteCreate from "pages/NoteCreate/NoteCreate";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import SignIn from "pages/SignIn/Signin";
import SignUp from "pages/SignUp/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<App />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:noteId" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
