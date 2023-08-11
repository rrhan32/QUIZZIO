import {useState} from "react";
const Quiz=({questions})=>{
        const [currentQuestion,setCurrentQuestion]=useState(0);
        const [answerIdx,setAnswerIdx]=useState(null);
        const [answer,setAnswer]=useState(null);
        const {question, choices , correctAnswer}= questions[currentQuestion];

        const onAnswerClick=(answer,index)=>{
            console.log("function called");
            setAnswerIdx(index);
            if (correctAnswer===answer){
                setAnswer(true);
            }
                else 
                {
                    setAnswer(false);
                }

        };
         return(
         <div className="quiz-container">
            <>
                 <span className="active-question-no">{currentQuestion+1}</span>;
                 <span className="total-question">/{questions.length}</span>;
                 <h2>{question}</h2>
                 <ul>
                    {choices.map((choice, index) => (
                        <li onClick={() => onAnswerClick(answer, index)} key={answer} className={answerIdx === index ? 'selected-answer' : null}>
                            {choice}
                        </li>
                      ))}
                </ul>
                

            </>
         </div>
         );
    };
export default Quiz;