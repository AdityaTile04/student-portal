import React, { useEffect, useState } from "react";

function StudentForm({ onSubmit, editingStudent }) {
    const [rollNo, setRollNo] = useState("");
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    useEffect(() => {
        if (editingStudent) {
            setRollNo(editingStudent.rollNo);
            setName(editingStudent.name);
            setMarks(editingStudent.marks);
        }
    }, [editingStudent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { rollNo, name, marks };
        onSubmit(student);
        setRollNo("");
        setName("");
        setMarks("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-6 pt-4 pb-6 mb-4"
        >
            <div className="flex gap-4 mb-4">
                <input
                    type="number"
                    placeholder="Roll No"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    required
                    className="border rounded px-3 py-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border rounded px-3 py-2 w-full"
                />
                <input
                    type="number"
                    placeholder="Marks"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                    required
                    className="border rounded px-3 py-2 w-full"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
                {editingStudent ? "Update" : "Add"} Student
            </button>
        </form>
    );
}

export default StudentForm;
