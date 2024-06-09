import React, {useState, useEffect} from "react";

const TimeWatch = () => {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() =>{
        let intervaIId;
        if(running) {
            intervaIId = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
        }
        return() => clearInterval(intervaIId);
    },(running));

    const handleStart = () => {
        setRunning(true);
    }

    const handleStop = () => {
        setRunning(false);
    }

    const handleReset = () => {
        setCounter(0);
        setRunning(false);
    }
     
    return (
        <div className="container">
            <div className="box">
                <div className="scuad">{counter}</div>
                <div className="scuad"></div>
                <div className="scuad"></div>
           </div>
           <div className="d-grid gap-2 col-10 mx-auto p-5">
                <button className="btn btn-dark bg-black text-white" type="button" onClick={handleStart}>Start</button>
                <button className="btn btn-dark bg-black text-white" type="button" onClick={handleStop}>Stop</button>
                <button className="btn btn-dark bg-black text-white" type="button" onClick={handleReset}>Reset</button>
            </div>
        </div>
        
    )
}
export default TimeWatch;