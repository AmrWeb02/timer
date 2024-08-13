import './WatchList.css'
function WatchList(props) {
    //console.log(props.list);
    if(props.list){
        return (
        <>
        <ul>
            {props.list.map( (e,index) => {
                return <li key={index}>
                        {`${String(e.hours).padStart(2,"0")}: ${String(e.minutes).padStart(2,"0")}: ${String(e.seconds).padStart(2,"0")}: ${String(e.milliSeconds).padStart(2,"0")}`}
                       </li>
                    })
            }
        </ul>
        </>
        );
    }
}

export default WatchList;
