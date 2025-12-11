import "../../styles/List.css";


export const ExpenseItem = ({ item, onDelete }) => {
    return (
        <div className="item-box">
            <span className="list-iteam-title">{item.title}</span>
            <span>{item.price} AMD</span>
            <span>{item.description}</span>
            <button onClick={() => onDelete(item.id)} className="delete-btn">
                Delete
            </button>
        </div>
    );
};