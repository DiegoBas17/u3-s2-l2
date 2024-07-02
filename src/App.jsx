import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
/* import AllTheBooks from "./component/AllTheBooks"; */
import MyFooter from "./component/MyFooter";
import MyNav from "./component/MyNav";
import Welcome from "./component/Welcome";
import BookList from "./component/BookList";
/* *************** */
import scifi from "./books/scifi.json";
import fantasy from "./books/fantasy.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import history from "./books/history.json";

const App = () => {
  /* state = {
    libriDaVisualizzare: fantasy,
  }; */

  const [libriDaVisualizzare, setLibriDaVisualizzare] = useState(fantasy);

  const changeCategory = (category) => {
    switch (category) {
      case "Fantasy":
        setLibriDaVisualizzare(fantasy);
        break;
      case "History":
        setLibriDaVisualizzare(history);
        break;
      case "Horror":
        setLibriDaVisualizzare(horror);
        break;
      case "Romance":
        setLibriDaVisualizzare(romance);
        break;
      case "Scifi":
        setLibriDaVisualizzare(scifi);
        break;
      default:
        setLibriDaVisualizzare(fantasy);
        break;
    }
  };

  return (
    <div>
      <MyNav changeCategory={changeCategory} />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList libriDaVisualizzare={libriDaVisualizzare} />
      <MyFooter />
    </div>
  );
};

export default App;
