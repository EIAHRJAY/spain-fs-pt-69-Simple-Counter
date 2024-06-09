import React, {useState, useEffect} from "react";

const TimeWatch = () => {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() =>{
        let intervalId;
        if(running) {
            intervalId = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
        }
        return() => clearInterval(intervalId);
    },[running]);

    const handleStart = () => {
        setRunning(true);
    };

    const handleStop = () => {
        setRunning(false);
    };

    const handleReset = () => {
        setCounter(0);
        setRunning(false);
    };

    const formatTime = (value) => {
        return value.toString().padStart(2, 0);
    };

    const hours = formatTime(Math.floor(counter / 3600));
    const minutes = formatTime(Math.floor((counter % 3600) /60));
    const seconds = formatTime(counter % 60);
     
    return (
        <div className="container">
            <div className="box">
                <div className="scuad text-white letter">{hours}</div>
                <div className="scuad text-white letter">{minutes}</div>
                <div className="scuad text-white letter">{seconds}</div>
           </div>
           <div className="d-grid gap-2 col-10 mx-auto p-5">
                <button className="btn btn-dark bg-black text-white" type="button" onClick={handleStart}>Start</button>
                <button className="btn btn-dark bg-black text-white" type="button" onClick={handleStop}>Stop</button>
                <button className="btn btn-dark bg-black text-white" type="button" onClick={handleReset}>Reset</button>
            </div>
        </div>
        
    );
};
export default TimeWatch;