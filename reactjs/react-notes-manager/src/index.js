import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { ProtectApp } from "App";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteBrowse from "pages/NoteBrowse/NoteBrowse";
import Note from "pages/Note/Note";
import NoteCreate from "pages/NoteCreate/NoteCreate";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import SignIn from "pages/SignIn/Signin";
import SignUp from "pages/SignUp/Signup";
import { FirebaseApp } from "services/firebase";
import { PersistGate } from "redux-persist/integration/react";
FirebaseApp.init();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<ProtectApp />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:noteId" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
