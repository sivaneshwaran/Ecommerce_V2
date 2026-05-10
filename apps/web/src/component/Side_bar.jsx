function Side_bar(){
    const listItemStyle = {
        marginTop:"-1px"
    }
    const listItemStyle2 = {
        marginTop:"-2px"
    }
    return(
    <div className="sidebar container-fluid w-25 p-1">
        <ul className="list-group mt-2">
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>One</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Two</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Three</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Four</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Five</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Six</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Seven</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Eight</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Nine</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Ten</li>
            <li className="list-group-item bg-transparent border-1 border-success" style={listItemStyle}>Eleven</li>
        </ul>
    </div>
    )
}

export default Side_bar;