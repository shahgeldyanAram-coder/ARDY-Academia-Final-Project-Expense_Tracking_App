import '../../styles/DeleteModel.css';

export const DeleteModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="delete-modal">
            <div className="delete-box">
                <h2 className="delete-title">Delete Expense</h2>
                <p className="delete-text">Are you sure do you want to delete this expense?</p>
                <div className="delete-buttons">
                    <button className="model-delete-btn" onClick={onConfirm}>Delete</button>
                    <button className="delete-model-cancel-btn" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};
