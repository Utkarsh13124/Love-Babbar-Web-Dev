import './Item.css'

function Item(props){// recieving props in props parameter
    const itemName = props.name;
    return (
        <div>
            <p className="nirma">{itemName}</p>
            {props.children}{/* props .children se Item tag ke ander wala element print hoga. */}
        </div>
    );
}

// jab bhi koi naya component bnayenge to use export bhi krna padega
export default Item;