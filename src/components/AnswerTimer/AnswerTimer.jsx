import "./AnswerTimer.scss";
import {useEffect,useState,useRef} from "react";

function AnswerTimer({duration,onTimeup}){
    const [counter,setCounter]=useState(0);
    const [progressLoaded,setProgressLoaded]=useState(0);
    const intervalRef=useRef();

    useEffect(()=>{
        intervalRef.current= setInterval(()=>{    //to prevent asyncronour functions from runnig contiuously even if we destroy the code.
            setCounter((cur)=>cur+1);
        },1000);
        return ()=>clearInterval(intervalRef.current);
    },[]);     //this array is left empty because we want  our code to run once.
     
    useEffect(()=>{
        setProgressLoaded(100*(counter/duration));
        if (counter===duration){
            clearInterval(intervalRef.current);

            setTimeout(()=>{
                onTimeup();
            },1000);

        }


    },[counter]);   //we want to run this code everytimethis counter changes
    return(
     <div className="answer-timer-container">
        <div
        style={{
            width: `${progressLoaded}%`,
            backgroundColor:`${
                progressLoaded<40
                ? "lightgreen"
                : progressLoaded<70
                ? "orange"
                :"red"
            }`,
        }}></div>
        <div className="progress"></div>
    </div>
    
    );


}
export default AnswerTimer;
