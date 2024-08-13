function TimeFormat(props){
    return(
        <>
        <h1>{`${String(props.hours).padStart(2,"0")}: ${String(props.minutes).padStart(2,"0")}: ${String(props.seconds).padStart(2,"0")}: ${String(props.milliSeconds).padStart(2,"0")}`}</h1>
        </>
    )
}
export default TimeFormat