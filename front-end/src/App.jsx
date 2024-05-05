import "./App.css";
import Intro from "/components/intro/Intro";
import Search from "/components/search/Search";
import Goal from "/components/goal/Goal";
import Contact from "/components/contact/Contact";
import ScrollUp from "/components/scrollUp/ScrollUp";

function App() {
  return (
    <>
      <ScrollUp />
      <Intro />
      <Search />
      <Goal />
      <Contact />
    </>
  );
}

export default App;
