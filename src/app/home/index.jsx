import AppLink from '../AppLinks';

function Home(props) {
    return(
        <div className='page home page-home'>
            {console.log("This is from the Home Component return statement")}
            <h1>Home</h1>

            <div className='appLinks-container'>
                <AppLink appName='contacts' clickHandler={props.appChanger}/>
                <AppLink appName='finances' clickHandler={props.appChanger}/>
                <AppLink appName='tasks' clickHandler={props.appChanger}/>
            </div>
        </div>
    )
}

export default Home;