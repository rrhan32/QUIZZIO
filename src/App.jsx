import './App.css'
import {jsQuizz} from "./constant"
import  Quiz from "./components/Quiz/Quiz"

function App() {
  return (
    <div>
    <Quiz questions={jsQuizz.questions}></Quiz>
    </div>
  )
};
export default App;
