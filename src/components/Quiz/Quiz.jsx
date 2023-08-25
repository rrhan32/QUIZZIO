import {useState} from "react";
import {resultInitialState} from "../../constant.js"
import AnswerTimer from "../AnswerTimer/AnswerTimer";
// import TemporaryDrawer from "./Drawer.jsx"
const Quiz=({questions})=>{
        const [currentQuestion,setCurrentQuestion]=useState(0);
        const [answerIdx,setAnswerIdx]=useState(null);
        const [answer,setAnswer]=useState(null);
        const {question, choices , correctAnswer}= questions[currentQuestion];
        const [showAnswerTimer,setShowAnswerTimer]=useState(true);
    
        const [result,setResult]=useState(resultInitialState);
        const [showResult,setShowResult]=useState(false);
        const onAnswerClick=(answer,index)=>{
            // console.log("function called");
            setAnswerIdx(index);
            if (correctAnswer===answer){
                setAnswer(true);
            }
                else 
                {
                    setAnswer(false);
                }

        };
        const onClickNext=(finalAnswer)=>{
            setAnswerIdx(null);
            setShowAnswerTimer(false);
            setResult((prev)=>
                finalAnswer
                ?{
                    ...prev,
                    score:prev.score+5,
                    correctAnswers:prev.correctAnswers+1

                } :{
                    ...prev,
                    wrongAnswers:prev.wrongAnswers+1,
                }
            );
            if (currentQuestion!==questions.length-1){
                setCurrentQuestion((prev)=>prev+1);
            } else{
                setCurrentQuestion(0);
                setShowResult(true);
            }
              setTimeout(()=>{
                setShowAnswerTimer(true);
              })
            };
            const onTryAgain=()=>{
                setResult(resultInitialState);
                setShowResult(false);

            };

            const handleTimeup=()=>{
                setAnswer(false);
                onClickNext(false);
            }
         return(
           
         <div className="quiz-container">
             {/* <TemporaryDrawer/> */}
            {!showResult ?(
            <>
                 {showAnswerTimer && <AnswerTimer duration={5} onTimeup={handleTimeup}/>}
                 <span className="active-question-no">{currentQuestion+1}</span>
                 <span className="total-question">/{questions.length}</span>
                 <h2>{question}</h2>
                 <ul>
                    {choices.map((choice, index) => (
                        <li onClick={() => onAnswerClick(choice, index)} key={choice} className={answerIdx === index ? 'selected-answer' : null}>
                            {choice}
                        </li>
                      ))}
                </ul>
                <div className="footer">
                    <button  onClick={()=>onClickNext(answer)} disabled={answerIdx===null}>
                        {currentQuestion===questions.length-1?"Finish":"Next"}
                    </button>
                </div>
            </>):(
                <div className="result">
                <h3>Result</h3>
                <p>
                    Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                    Total score : <span>{result.score}</span>
                </p>
                <p>
                    Correct Answers : <span>{result.correctAnswers}</span>
                </p>
                <p>
                    Wrong Answers : <span>{result.wrongAnswers}</span>
                </p>
                <button onClick={onTryAgain}>TRY AGAIN !</button>
                </div>

            )
        }
         </div>
         );
    };
export default Quiz;