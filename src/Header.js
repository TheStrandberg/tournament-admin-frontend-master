function Header({tournaments, update}) {    
    return (
        <header className="wrapper">
            <button onClick={() => update(tournaments)} className="button">Get tournaments!</button>
        </header>
    )
}

export default Header