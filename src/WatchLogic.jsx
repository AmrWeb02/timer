import { useState, useRef } from "react"
import TimeFormat from "./TimeFormat.jsx";
import WatchList from "./WatchList.jsx";
function WatchLogic(){
    const [elapsedTime, setElapsedTime] = useState(0);
    const [status, setStatus] = useState(false);
    const [list, setList] = useState([]);
    const startTimeRef = useRef(null);
    const intervalRef = useRef(null);

    const milliSeconds = elapsedTime % 1000;
    const seconds = Math.floor(( elapsedTime / 1000) % 60);
    const minutes = Math.floor(( elapsedTime / (1000*60) ) % 60);
    const hours = Math.floor(( elapsedTime / (1000*60*60) ) % 24);

    function Start(){
        if(!status){
            setStatus(true);
            startTimeRef.current = Date.now() - elapsedTime;
            intervalRef.current = setInterval(() => {
                setElapsedTime( Date.now() - startTimeRef.current);
            }, 10);
        }
    }
    function Pause(){
        if(status){
            setStatus(false);
            clearInterval(intervalRef.current);
        }
    }
    function Reset(){
        clearInterval(intervalRef.current);
        setElapsedTime(0);
        setStatus(false);
        setList([]);
    }
    function Leap(){
        const leapObj = {hours, minutes, seconds, milliSeconds};
        setList([...list, leapObj]);
    }

    return(
        <>
        <TimeFormat hours={hours} minutes={minutes} seconds={seconds} milliSeconds={milliSeconds}/>
        <button onClick={Start}>Start</button>
        <button onClick={Pause}>Pause</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Leap}>Leap</button>
        <WatchList list={list}/>
        &copy; Madbouly
        </>
    )
}
export default WatchLogic
