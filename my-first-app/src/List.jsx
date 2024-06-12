import PropTypes from 'prop-types';

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
        <h3 className = "list-category">{category}</h3>
        <ol className = "list-items">{listItems}</ol>
        </>);
}
List.propTypes= {
    category: propTypes.string,
    items: propTypes.shape({ id: propTypes.number, 
                             name: propTypes.string,
                             calories: propTypes.number})
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List