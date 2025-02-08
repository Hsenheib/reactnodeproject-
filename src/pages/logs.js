import { useEffect, useState } from "react";
import './style/logs.css'
const Logs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Load logs from localStorage
        const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
        setLogs(savedLogs);
    }, []);

    const handleEdit = (id) => {
        const updatedLogs = logs.map((log) => {
            if (log.id === id) {
                const newName = prompt("Enter new name:", log.name);
                const newSunday = prompt("Enter Sunday shift:", log.shifts.sunday);
                const newMonday = prompt("Enter Monday shift:", log.shifts.monday);
                const newTuesday = prompt("Enter Tuesday shift:", log.shifts.tuesday);
                const newWednesday = prompt("Enter Wednesday shift:", log.shifts.wednesday);
                const newThursday = prompt("Enter Thursday shift:", log.shifts.thursday);
                const newFriday = prompt("Enter Friday shift:", log.shifts.friday);
                const newSaturday = prompt("Enter Saturday shift:", log.shifts.saturday);

                return {
                    ...log,
                    name: newName !== null ? newName : log.name,
                    shifts: {
                        sunday: newSunday !== null ? newSunday : log.shifts.sunday,
                        monday: newMonday !== null ? newMonday : log.shifts.monday,
                        tuesday: newTuesday !== null ? newTuesday : log.shifts.tuesday,
                        wednesday: newWednesday !== null ? newWednesday : log.shifts.wednesday,
                        thursday: newThursday !== null ? newThursday : log.shifts.thursday,
                        friday: newFriday !== null ? newFriday : log.shifts.friday,
                        saturday: newSaturday !== null ? newSaturday : log.shifts.saturday,
                    },
                };
            }
            return log;
        });
        setLogs(updatedLogs);
        localStorage.setItem("logs", JSON.stringify(updatedLogs));
    };

    const handleDelete = (id) => {
        const updatedLogs = logs.filter((log) => log.id !== id);
        setLogs(updatedLogs);
        localStorage.setItem("logs", JSON.stringify(updatedLogs));
    };

    const handleAdd = () => {
        const newLog = {
            id: logs.length + 1,
            name: "New User",
            shifts: {
                sunday: "-",
                monday: "-",
                tuesday: "-",
                wednesday: "-",
                thursday: "-",
                friday: "-",
                saturday: "-"
            }
        };
        const updatedLogs = [...logs, newLog];
        setLogs(updatedLogs);
        localStorage.setItem("logs", JSON.stringify(updatedLogs));
    };

    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>
            <h2>Logs</h2>
            <button onClick={handleAdd} style={{ marginBottom: "10px" }}>Add Element</button>
            <table border="1" cellPadding="10" cellSpacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.length > 0 ? (
                        logs.map((log) => (
                            <tr key={log.id}>
                                <td>{log.name}</td>
                                <td>{log.id}</td>
                                <td>{log.shifts.sunday}</td>
                                <td>{log.shifts.monday}</td>
                                <td>{log.shifts.tuesday}</td>
                                <td>{log.shifts.wednesday}</td>
                                <td>{log.shifts.thursday}</td>
                                <td>{log.shifts.friday}</td>
                                <td>{log.shifts.saturday}</td>
                                <td>
                                    <button onClick={() => handleEdit(log.id)}>EDIT</button>
                                    <button onClick={() => handleDelete(log.id)} style={{ marginLeft: "5px" }}>DELETE</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" style={{ textAlign: "center" }}>No logs available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Logs;
