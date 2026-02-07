// Delete confirmation modal styles
import '../../styles/DeleteModel.css';

// Delete confirmation modal
export const Deleteform = ({ onConfirm, onCancel }) => {
    return (
        // Modal overlay
        <div className="delete-modal">
            <div className="delete-box">
                <h2 className="delete-title">Delete Expense</h2>

                {/* Confirmation message */}
                <p className="delete-text">
                    Are you sure do you want to delete this expense?
                </p>

                {/* Actions */}
                <div className="delete-buttons">
                    <button className="model-delete-btn" onClick={onConfirm}>
                        Delete
                    </button>
                    <button className="delete-model-cancel-btn" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
