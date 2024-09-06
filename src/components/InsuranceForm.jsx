import React, { useState } from "react";
import axios from "axios";
const InsuranceForm = ({setEmployees}) => {
  const [formData, setFormData] = useState({
    ID: "",
    Insurance_Type: "",
    Department: "",
    Type_of_Leave: "",
    Start_Date: "05-Sep-2024",
    End_Date: "",
    Car_Number: "",
    Insurance_Company: "",
    Premium: "",
    Gross_Premium: "",
    Reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      // Make a POST request to Zoho
      const response = await axios.post(`/api/creator/v2.1/data/dev_it/my-first-project/form/Approval_Request`, {data: formData}, {
        headers: {
          'Authorization': `Zoho-oauthtoken 1000.26ddbeb0e83757713f7a78e0c4d99b6f.6b9ad4db90e0fd1fdd1dbf6b3d29cbbc`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      // Assuming the response confirms successful submission
      if (response.status === 201) {
        // Add the new entry to the employees state
        setEmployees((prevEmployees) => [...prevEmployees, formData]);
        // Optionally, reset the form data
        handleReset();
      }
    } catch (error) {
      console.error('Error submitting data to Zoho:', error.response ? error.response.data : error.message);
    }
  
    // console.log(formData);
    // Add form submission logic here
  };

  const handleReset = () => {
    setFormData({
      Employee_ID: "",
      Insurance_Type: "",
      Department: "",
      Type_of_Leave: "",
      Start_Date: "05-Sep-2024",
      End_Date: "",
      Car_Number: "",
      Insurance_Company: "",
      Premium: "",
      Gross_Premium: "",
      Reason: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <label htmlFor="id" style={styles.label}>Employee Id</label>
          <input
            type="text"
            id="Employee_Id"
            name="Employee_Id"
            value={formData.Employee_ID}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="insuranceType" style={styles.label}>Insurance Type</label>
          <select
            id="Insurance_Type"
            name="Insurance_Type"
            value={formData.Insurance_Type}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-Select-</option>
            <option value="health">Health</option>
            <option value="motor">Motor</option>
            <option value="travel">Travel</option>
            <option value="fire">Fire</option>
            <option value="cyber">Cyber</option>
            {/* Add more options here */}
          </select>
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="department" style={styles.label}>Department</label>
          <select
            id="Department"
            name="Department"
            value={formData.Department}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-Select-</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="operations">Operations</option>
            <option value="finance">Finance</option>
            <option value="packaging">Packaging</option>
            <option value="others">Others</option>
            {/* Add more options here */}
          </select>
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Type_of_Leave" style={styles.label}>Type of Leave</label>
          <select
            id="Type_of_Leave"
            name="Type_of_Leave"
            value={formData.Type_of_Leave}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-Select-</option>
            <option value="sickLeave">Sick Leave</option>
            <option value="casualLeave">Casual Leave</option>
            <option value="publicHoliday">Public Holiday</option>
            <option value="other">other</option>
            {/* Add more options here */}
          </select>
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Start_Date" style={styles.label}>Start Date *</label>
          <input
            type="text"
            id="Start_Date"
            name="Start_Date"
            value={formData.Start_Date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="End_Date" style={styles.label}>End Date *</label>
          <input
            type="text"
            id="End_Date"
            name="End_Date"
            placeholder="dd-MMM-yyyy"
            value={formData.End_Date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Car_Number" style={styles.label}>Car Number</label>
          <input
            type="text"
            id="Car_Number"
            name="Car_Number"
            value={formData.Car_Number}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Insurance_Company" style={styles.label}>Insurance Company</label>
          <select
            id="Insurance_Company"
            name="Insurance_Company"
            value={formData.Insurance_Company}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-Select-</option>
            
            {/* Add more options here */}
          </select>
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Premium" style={styles.label}>Premium</label>
          <input
            type="text"
            id="Premium"
            name="Premium"
            placeholder="#######"
            value={formData.Premium}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Gross_Premium" style={styles.label}>Gross Premium</label>
          <input
            type="text"
            id="Gross_Premium"
            name="Gross_Premium"
            placeholder="#######"
            value={formData.Gross_Premium}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Reason" style={styles.label}>Reason</label>
          <input
            type="text"
            id="Reason"
            name="Reason"
            value={formData.Reason}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.buttonGroup}>
        <input type="submit" value="Submit" style={styles.submitButton} />
        <input
          type="reset"
          value="Reset"
          onClick={handleReset}
          style={styles.resetButton}
        />
      </div>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },
  gridItem: {
    width: "100%",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  submitButton: {
    backgroundColor: "#6366f1",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  resetButton: {
    backgroundColor: "#e5e7eb",
    color: "#374151",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default InsuranceForm;
