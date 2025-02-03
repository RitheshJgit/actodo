function Card(props){
    return(
        <>
        <div className="p-5 text-center flex-grow border rounded-md " style={{backgroundColor:props.color}}>
          <p className="text-xl">{props.title}</p>
          <p>{props.subtitle}</p>
        </div>
        </>
    )

}

export default Card;