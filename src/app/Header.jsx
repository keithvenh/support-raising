function Header(props) {
    return(
        <header>
            <div className='logo'></div>
            <nav>
                <ul className='nav'>
                    <li className='navLink' onClick={() => props.clickHandler('home')}>Home</li>
                    <li className='navLink' onClick={() => props.clickHandler('contacts')}>Contacts</li>
                    <li className='navLink' onClick={() => props.clickHandler('finances')}>Finances</li>
                    <li className='navLink' onClick={() => props.clickHandler('tasks')}>Tasks</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;