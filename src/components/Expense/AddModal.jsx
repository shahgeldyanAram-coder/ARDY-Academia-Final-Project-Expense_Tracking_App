import "../../styles/Modal.css";

export const AddModal = ({ form, handleChange, onAdd, errors, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2 className="modal-title">Add Expense</h2>

                <div className="Expense-modal-element">
                    <label>Title</label>
                    <input
                        className="input"
                        value={form.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                    />
                    {errors.title && <p className="error">{errors.title}</p>}
                </div>

                <div className="Expense-modal-element">
                    <label>Price</label>
                    <input
                        type="number"
                        className="input"
                        value={form.price}
                        onChange={(e) => handleChange("price", e.target.value)}
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>

                <div className="Expense-modal-element">
                    <label>Description</label>
                    <textarea
                        className="textarea"
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>

                <div className="modal-buttons">
                    <button onClick={onClose} className="cancel-btn">Cancel</button>
                    <button onClick={onAdd} className="modal-add-btn">Add</button>
                </div>
            </div>
        </div>
    );
};
