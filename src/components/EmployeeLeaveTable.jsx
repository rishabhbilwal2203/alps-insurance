import React, { useEffect, useState } from 'react';
import axios from 'axios';
const EmployeeLeaveTable = ({employees, setEmployees, setIsUpdateOpen, setUpdateForm}) => {

  const handleEdit = (employee) => {
    // console.log(`edit: ${employeeId}`);
    setUpdateForm(employee)
    setIsUpdateOpen(true)
  };

  // Function to handle the delete button click
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/creator/v2.1/data/dev_it/my-first-project/report/All_Leave_Requests/${id}`, {
        headers: {
          Authorization: `Zoho-oauthtoken 1000.26ddbeb0e83757713f7a78e0c4d99b6f.6b9ad4db90e0fd1fdd1dbf6b3d29cbbc`
        }
      });
      console.log('Record deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting record:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th>Employee Id</th>
          <th>Department</th>
          <th>Type of Leave</th>
          <th>Reason</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.ID}>
            {/* <td><input type="checkbox" className="checkbox" value={employee.id} style={styles.checkbox}/></td> */}
            
            <td><button onClick={() => handleDelete(employee.ID)}>delete</button> <button onClick={() => handleEdit(employee)}>edit</button></td>
            <td>{employee.Employee_Id}</td>
            <td>{employee.Department}</td>
            <td>{employee.Type_of_Leave}</td>
            <td>{employee.Reason}</td>
            <td>{employee.Start_Date}</td>
            <td>{employee.End_Date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  checkbox: {
    width: '20px',
    height: '20px',
  },
  thTd: {
    textAlign: 'left',
    padding: '12px',
    borderBottom: '1px solid #e0e0e0',
  },
  th: {
    backgroundColor: '#f8f8f8',
    fontWeight: 'bold',
    color: '#333',
  },
  trHover: {
    backgroundColor: '#f5f5f5',
  },
};

export default EmployeeLeaveTable;


