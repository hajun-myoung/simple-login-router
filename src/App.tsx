import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface UserObject {
  id: number;
  name: string | null;
}

export const AuthContext = createContext<UserObject | null>(null);
export const HandleAuthContext = createContext<Dispatch<
  SetStateAction<UserObject>
> | null>(null);

function App() {
  const [user, setUser] = useState<UserObject>({
    id: -1,
    name: null,
  });

  return (
    <AuthContext.Provider value={user}>
      <HandleAuthContext.Provider value={setUser}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </HandleAuthContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
