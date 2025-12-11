import { useState } from "react";
import { AddModal } from "../../components/Expense/AddModal.jsx";
import { ExpenseList } from "../../components/Expense/ExpenseList.jsx";
import { useLocalStorage } from "../../components/hooks/useLocalStorage.js";
import { DeleteModal } from "../../components/Expense/DeleteModel.jsx";
import "../../styles/Home.css";

export const Home = () => {
    const [items, setItems] = useLocalStorage("expenses", []);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
    });

    const resetForm = () =>
        setForm({ title: "", price: "", description: "" });

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));

        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };
    const handleAdd = () => {
        const newErrors = {};
        if (!form.title) newErrors.title = "Expense title not entered";
        if (!form.price) newErrors.price = "Expense price not entered";
        if (!form.description) newErrors.description = "Description not entered";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newItem = {
            id: Date.now(),
            ...form,
            price: Number(form.price),
        };

        setItems(prev => [...prev, newItem]);
        resetForm();
        setShowModal(false);
        setErrors({});
    };

    const confirmDelete = (id) => setDeleteId(id);

    const handleConfirmDelete = () => {
        setItems(prev => prev.filter(item => item.id !== deleteId));
        setDeleteId(null);
    };
    const handleCancelDelete = () => setDeleteId(null);

    const total = items.reduce((s, i) => s + i.price, 0);





    return (
        <div className="container">
            <div className="Expense-Tracker">
                <h1 className="title">Expense Tracker</h1>
                <button onClick={() => setShowModal(true)} className="add-btn">
                    Add
                </button>
            </div>

            <div className="total">Total: {total} AMD</div>

            {showModal && (
                <AddModal
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    onAdd={handleAdd}
                    onClose={() => setShowModal(false)}
                />
            )}

            <div className="Expense-list">
                <ExpenseList items={items} onDelete={confirmDelete} />
            </div>

            {deleteId !== null && (
                <DeleteModal
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
};
