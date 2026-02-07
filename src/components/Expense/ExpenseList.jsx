// Import child component and styles
import { ExpenseItem } from "./ExpenseItem.jsx";
import "../../styles/List.css";

// Expense list component
export const ExpenseList = ({ items, onDelete }) => {
    return (
        <div>
            {/* List header */}
            <div className="list-header">
                <span className="header-iteams-title">Title</span>
                <span className="span">Price</span>
                <span className="span">Description</span>
            </div>
            <hr className="titles-hr" />

            {/* Render list of expense items */}
            {items.map((item) => (
                <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
            ))}
        </div>
    );
};
