import React from "react";
import './style/logs.css'; 

function logs() {
  return (
    <div>
  <h2>Logs</h2>
  <p><strong>Worker Name:</strong> hsen heeb</p>
  <p><strong>Worker ID:</strong> 21133748</p>

  <h3>Selected Days & Shifts:</h3>
  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>Shift</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Sunday:</strong></td>
        <td>לילה</td>
      </tr>
      <tr>
        <td><strong>Monday:</strong></td>
        <td>ערב</td>
      </tr>
      <tr>
        <td><strong>Tuesday:</strong></td>
        <td>ערב</td>
      </tr>
      <tr>
        <td><strong>Wednesday:</strong></td>
        <td>No shifts selected</td>
      </tr>
      <tr>
        <td><strong>Thursday:</strong></td>
        <td>לילה</td>
      </tr>
      <tr>
        <td><strong>Friday:</strong></td>
        <td>No shifts selected</td>
      </tr>
      <tr>
        <td><strong>Saturday:</strong></td>
        <td>No shifts selected</td>
      </tr>
    </tbody>
  </table>
</div>

  );
};

export default logs;