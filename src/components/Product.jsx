import Price from "./Price";
function Product({title, idx}) {
    let oldPrice = ["12,999", "11,999", "10,999", "9,999"];
    let newPrice = ["8,999", "9,199", "5,000", "8999"];
    let desc = [["8,000 DPI", "5 Programm Buttons"], ["Intuitive Surface", "Designed For iPad Pro"], ["Designed For iPad Pro","Intuitive Surface"], ["Wireless", "Optical Orientation"]];
    
    const styles = {
       border: '1px solid rgba(1, 1, 1, 0.05)',
        borderRadius: "14px",
        marginBottom: "15px",
        marginLeft: "15px",
        width: "300px",
        height: "170px"
    };

    return (
        <div style={styles}>
            <h4>{title}</h4>
            <p>{desc[idx][0]}</p>
            <p>{desc[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}


export default Product;