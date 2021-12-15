function AppLink(props) {

    return (
        <div className={`appLink-container appLink-${props.appName}`} id={props.appName} onClick={() => props.clickHandler(props.appName)}>
            {console.log("This is from the AppLink Component return statement")}
            <div className='appLink-transparency'>
                <h2 className="appLink-label">{props.appName}</h2>
            </div>
        </div>
    )

}

export default AppLink;