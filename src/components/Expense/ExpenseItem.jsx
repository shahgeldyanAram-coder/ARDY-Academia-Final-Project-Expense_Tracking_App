// Styles for the expense list
import "../../styles/List.css";

// Single expense item component
export const ExpenseItem = ({ item, onDelete }) => {
    return (
        // Container for an expense item
        <div className="item-box">
            {/* Expense title */}
            <span className="list-iteam-title">{item.title}</span>

            {/* Expense price */}
            <span>{item.price} AMD</span>

            {/* Expense description */}
            <span>{item.description}</span>

            {/* Delete button */}
            <button onClick={() => onDelete(item.id)} className="delete-btn">
                Delete
            </button>
        </div>
    );
};
