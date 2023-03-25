import "./App.css";
import { app } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

function App() {
  const putdata = () => {
    set(ref(db, 'users/new', {
      id: 1,
      name: "Shubair",
      age: 21
    }))
  }

  return <h1>Firebase React App.</h1>;
}

export default App;
