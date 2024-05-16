import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import MainPage from "./Pages/MainPage";

interface UserObject {
  id: number;
  name: string | null;
}

export const AuthContext = createContext<UserObject | null>(null);
export const HandleAuthContext = createContext<Dispatch<
  SetStateAction<UserObject>
> | null>(null);

function PrivateRouter({ children }: { children?: ReactElement }) {
  const user = useContext(AuthContext);

  if (user && user.id !== -1) {
    return <>{children}</>;
  } else {
    alert("Signin, first");
    return <Navigate to="/" />;
  }
}

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
            <Route
              path="/main"
              element={
                <PrivateRouter>
                  <MainPage />
                </PrivateRouter>
              }
            />
          </Routes>
        </Router>
      </HandleAuthContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
