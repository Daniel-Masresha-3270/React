
function List(props){

    const itemList = props.items;
    const category = props.category;

    itemList.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
    // itemList.sort((a,b) => b.calories - a.calories);  //numeric
    // const lowCalFruits = itemList.filter(fruit => fruit.calories < 100);

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);
    return(
        <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
        </>
        
    );
}

export default List