import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo",todo)
  }
  let todos = [
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the mall to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the Ghat",
      desc: "You need to go to the ghat to get this job done4"
    }
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
