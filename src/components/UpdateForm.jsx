import React from "react";
import axios from "axios";

const UpdateForm = ({ setEmployees, upDateForm, setUpdateForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...upDateForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure the form data
    const {
      id,
      insuranceType,
      department,
      typeOfLeave,
      startDate,
      endDate,
      carNumber,
      insuranceCompany,
      premium,
      grossPremium,
      reason,
    } = upDateForm;

    // Prepare the data to be updated
    const updatedData = {
      insuranceType,
      department,
      typeOfLeave,
      startDate,
      endDate,
      carNumber,
      insuranceCompany,
      premium,
      grossPremium,
      reason,
    };

    // Call the updateRecord function
    updateRecord(id, updatedData);

    // Reset the form fields after submission
    handleReset();
  };

  const updateRecord = async (id, updatedData) => {
    try {
      const response = await axios.patch(
        `/api/creator/v2.1/data/dev_it/my-first-project/report/All_Leave_Requests/${id}`,
        {
          data: [updatedData], // Zoho API requires data to be wrapped in an array
        },
        {
          headers: {
            "Authorization": `Zoho-oauthtoken 1000.26ddbeb0e83757713f7a78e0c4d99b6f.6b9ad4db90e0fd1fdd1dbf6b3d29cbbc`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Record updated successfully:", response.data);
    } catch (error) {
      console.error(
        "Error updating record:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleReset = () => {
    setUpdateForm({
      id: "",
      insuranceType: "",
      department: "",
      typeOfLeave: "",
      startDate: "05-Sep-2024",
      endDate: "",
      carNumber: "",
      insuranceCompany: "",
      premium: "",
      grossPremium: "",
      reason: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <label htmlFor="Employee_Id" style={styles.label}>
            Employee Id
          </label>
          <input
            type="text"
            id="Employee_Id"
            name="Employee_Id"
            value={upDateForm.Employee_Id}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Insurance_Type" style={styles.label}>
            Insurance Type
          </label>
          <select
            id="Insurance_Type"
            name="Insurance_Type"
            value={upDateForm.Insurance_Type}
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
          <label htmlFor="Department" style={styles.label}>
            Department
          </label>
          <select
            id="Department"
            name="Department"
            value={upDateForm.Department}
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
          <label htmlFor="Type_Of_Leave" style={styles.label}>
            Type of Leave
          </label>
          <select
            id="Type_Of_Leave"
            name="Type_of_Leave"
            value={upDateForm.Type_of_Leave}
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
          <label htmlFor="startDate" style={styles.label}>
            Start Date *
          </label>
          <input
            type="text"
            id="Start_Date"
            name="Start_Date"
            value={upDateForm.Start_Date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="End_Date" style={styles.label}>
            End Date *
          </label>
          <input
            type="text"
            id="End_Date"
            name="End_Date"
            placeholder="dd-MMM-yyyy"
            value={upDateForm.End_Date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Car_Number" style={styles.label}>
            Car Number
          </label>
          <input
            type="text"
            id="Car_Number"
            name="Car_Number"
            value={upDateForm.Car_Number}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Insurance_Company" style={styles.label}>
            Insurance Company
          </label>
          <select
            id="Insurance_Company"
            name="Insurance_Company"
            value={upDateForm.Insurance_Company}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-Select-</option>

            {/* Add more options here */}
          </select>
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Premium" style={styles.label}>
            Premium
          </label>
          <input
            type="text"
            id="Premium"
            name="Premium"
            placeholder="#######"
            value={upDateForm.Premium}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Gross_Premium" style={styles.label}>
            Gross Premium
          </label>
          <input
            type="text"
            id="Gross_Premium"
            name="Gross_Premium"
            placeholder="#######"
            value={upDateForm.Gross_Premium}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.gridItem}>
          <label htmlFor="Reason" style={styles.label}>
            Reason
          </label>
          <input
            type="text"
            id="Reason"
            name="Reason"
            value={upDateForm.reason}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.buttonGroup}>
        <input type="submit" value="edit" style={styles.submitButton} />
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

export default UpdateForm;
