import { useState } from "react";
import { Addform } from "../../components/Expense/Addform.jsx";
import { ExpenseList } from "../../components/Expense/ExpenseList.jsx";
import { useLocalStorage } from "../../components/hooks/useLocalStorage.js";
import { Deleteform } from "../../components/Expense/Deleteform.jsx";
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

    const resetForm = () => {
        setForm({
            title: "",
            price: "",
            description: "",
        });
    };

    const handleChange = (field, value) => {
        setForm((oldForm) => {
            return {
                ...oldForm,
                [field]: value,
            };
        });

        if (errors[field]) {
            const newErrors = { ...errors };
            delete newErrors[field];
            setErrors(newErrors);
        }
    };

    const handleAdd = () => {
        const newErrors = {};

        if (form.title === "") {
            newErrors.title = "Expense title not entered";
        }

        if (form.price === "") {
            newErrors.price = "Expense price not entered";
        }

        if (form.description === "") {
            newErrors.description = "Description not entered";
        }

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

        setItems((oldItems) => {
            return [...oldItems, newItem];
        });

        resetForm();
        setShowModal(false);
        setErrors({});
    };

    const confirmDelete = (id) => {
        setDeleteId(id);
    };

    const handleConfirmDelete = () => {
        setItems((oldItems) => {
            return oldItems.filter((item) => item.id !== deleteId);
        });

        setDeleteId(null);
    };

    const handleCancelDelete = () => {
        setDeleteId(null);
    };

    const total = items.reduce((sum, item) => {
        return sum + item.price;
    }, 0);


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
                <Addform
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
                <Deleteform
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
};
