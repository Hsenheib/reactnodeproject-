import { useState, useEffect } from "react";

const RequestShift = () => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        shifts: {
            sunday: '',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
        }
    });

    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Load existing logs from localStorage on component mount
        const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
        setLogs(savedLogs);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, 
        });
    };

    const handleShiftChange = (day, value) => {
        setFormData((prevData) => ({
            ...prevData,
            shifts: {
                ...prevData.shifts,
                [day]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.id) {
            setMessage("Please fill in all fields before submitting.");
            return;
        }

        const allDaysSelected = Object.values(formData.shifts).every(shift => shift !== '');
        if (!allDaysSelected) {
            setMessage("Please select a shift for each day of the week.");
            return;
        }

        const newLog = {
            id: Date.now(), // Unique ID for logs
            ...formData,
        };

        const updatedLogs = [...logs, newLog];
        setLogs(updatedLogs);
        localStorage.setItem("logs", JSON.stringify(updatedLogs));

        setMessage(`Form submitted successfully! Name: ${formData.name}, ID: ${formData.id}`);
        console.log("Final Form Data:", formData);
    };

    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const shiftOptions = ["morning", "evening", "night"];

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                ID:
                <input type="text" name="id" value={formData.id} onChange={handleChange} />
            </label>
            <br />

            <h3>Choose Your Shifts:</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {daysOfWeek.map((day) => (
                    <div key={day} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <strong style={{ width: "80px", textTransform: "capitalize" }}>{day}:</strong>
                        {shiftOptions.map((shift) => (
                            <label key={`${day}-${shift}`} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <input
                                    type="radio"
                                    name={day}
                                    value={shift}
                                    checked={formData.shifts[day] === shift}
                                    onChange={() => handleShiftChange(day, shift)}
                                />
                                {shift}
                            </label>
                        ))}
                    </div>
                ))}
            </div>

            <br />
            <button type="submit">Submit</button>

            {message && (
                <div style={{
                    marginTop: "15px", padding: "10px",
                    backgroundColor: message.includes("successfully") ? "#d4edda" : "#f8d7da",
                    color: message.includes("successfully") ? "#155724" : "#721c24",
                    border: `1px solid ${message.includes("successfully") ? "#c3e6cb" : "#f5c6cb"}`,
                    borderRadius: "4px"
                }}>
                    {message}
                </div>
            )}
        </form>
    );
};

export default RequestShift;
