import "./CSS/style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Main, Student } from "./Components/Main";
import StudentReview from "./Components/StudentReview";

function App() {
  return (
    <div>
      <Header />
      <div className="container p-4 m-4 bg-dark text-light">
        <Main />
        <Student stuname="Glen Maxwell" exp={2}>
          <StudentReview />
        </Student>
        <Student stuname="Adam Gil" exp={3}>
          <StudentReview />
        </Student>
        <Student stuname="Grame Swann" exp={4}>
          <StudentReview />
        </Student>
      </div>
      <Footer />
    </div>
  );
}

export default App;