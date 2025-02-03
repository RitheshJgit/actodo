function Header(props){
    return(
        <>
        <p className="text-3xl font-medium">Hello {props.data}</p>
        <p>I help you manage your activities</p>
        </>
    )
}

export default Header