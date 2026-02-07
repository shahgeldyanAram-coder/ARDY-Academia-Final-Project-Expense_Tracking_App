import { useState } from "react";
import { Addform } from "../../components/Expense/Addform.jsx";
import { ExpenseList } from "../../components/Expense/ExpenseList.jsx";
import { useLocalStorage } from "../../components/hooks/useLocalStorage.js";
import { Deleteform } from "../../components/Expense/Deleteform.jsx";
import "../../styles/Home.css";

// Home page component
export const Home = () => {
    // Expenses state, persisted in localStorage
    const [items, setItems] = useLocalStorage("expenses", []);

    // Modal visibility for adding expenses
    const [showModal, setShowModal] = useState(false);

    // ID of expense pending deletion
    const [deleteId, setDeleteId] = useState(null);

    // Form validation errors
    const [errors, setErrors] = useState({});

    // Form state for new expense
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
    });

    // Reset form to initial state
    const resetForm = () => {
        setForm({ title: "", price: "", description: "" });
    };

    // Update form field and clear error if present
    const handleChange = (field, value) => {
        setForm((oldForm) => ({ ...oldForm, [field]: value }));

        if (errors[field]) {
            const newErrors = { ...errors };
            delete newErrors[field];
            setErrors(newErrors);
        }
    };

    // Add new expense
    const handleAdd = () => {
        const newErrors = {};

        // Validate form fields
        if (form.title === "") newErrors.title = "Expense title not entered";
        if (form.price === "") newErrors.price = "Expense price not entered";
        if (form.description === "") newErrors.description = "Description not entered";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newItem = {
            id: Date.now(),
            title: form.title,
            price: Number(form.price),
            description: form.description,
        };

        setItems((oldItems) => [...oldItems, newItem]);
        resetForm();
        setShowModal(false);
        setErrors({});
    };

    // Trigger delete confirmation
    const confirmDelete = (id) => setDeleteId(id);

    // Confirm deletion
    const handleConfirmDelete = () => {
        setItems((oldItems) => oldItems.filter((item) => item.id !== deleteId));
        setDeleteId(null);
    };

    // Cancel deletion
    const handleCancelDelete = () => setDeleteId(null);

    // Total expenses
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container">
            {/* Header and add button */}
            <div className="Expense-Tracker">
                <h1 className="title">Expense Tracker</h1>
                <button onClick={() => setShowModal(true)} className="add-btn">
                    Add
                </button>
            </div>

            {/* Total amount */}
            <div className="total">Total: {total} AMD</div>

            {/* Add expense modal */}
            {showModal && (
                <Addform
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    onAdd={handleAdd}
                    onClose={() => setShowModal(false)}
                />
            )}

            {/* Expenses list */}
            <div className="Expense-list">
                <ExpenseList items={items} onDelete={confirmDelete} />
            </div>

            {/* Delete confirmation modal */}
            {deleteId !== null && (
                <Deleteform
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
};
