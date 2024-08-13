
function Price({oldPrice, newPrice}) {
    let stylesOld = {
        textDecoration: "line-through",
    }
    let styleNew = {
        fontWeight: "bold",
    }

    let styleBG = {
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        height: "40px"
    }
    return (
        <div style={styleBG}>
            <span style={styleNew}>{newPrice}</span>  
            &nbsp; &nbsp; &nbsp; &nbsp;         
            <span style={stylesOld}>{oldPrice}</span>                     
        </div>
    )
}


export default Price;