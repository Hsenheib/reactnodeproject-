import { useEffect, useState } from "react";

const Logs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Load logs from localStorage
        const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
        setLogs(savedLogs);
    }, []);

    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>
            <h2>Logs</h2>
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
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" style={{ textAlign: "center" }}>No logs available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Logs;
