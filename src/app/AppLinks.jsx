function AppLink(props) {

    return (
        <div className={`appLink-container appLink-${props.appName}`} id={props.appName}>
            <h2 className="appLink-label">{props.appName}</h2>
        </div>
    )

}

export default AppLink;