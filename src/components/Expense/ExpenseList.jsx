import { ExpenseItem } from "./ExpenseItem.jsx";
import "../../styles/List.css";


export const ExpenseList = ({ items, onDelete }) => {
    return (
        <div>
            <div className="list-header">
                <span className="header-iteams-title">Title</span>
                <span className="span">Price</span>
                <span className="span">Description</span>
            </div>
            <hr className="titles-hr" />


            {items.map((item) => (
                <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
            ))}
        </div>
    );
};