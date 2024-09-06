// import InsuranceForm from './components/InsuranceForm';
import ModalForm from './components/ModalForm';
import React, { useEffect, useState } from 'react';
// import ParentComponent from './components/ParentComponent';
import axios from 'axios';
import EmployeeLeaveTable from './components/EmployeeLeaveTable';
import UpdateForm from './components/UpdateForm';
function App() {
  const [upDateForm, setUpdateForm] = useState({
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

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  // console.log(import.meta)
  

  const [employees, setEmployees] = useState([]);

useEffect(() => {
  
  async function fetchDataFromZoho() {
    try {
        const response = await axios.get(`/api/creator/v2.1/data/dev_it/my-first-project/report/All_Leave_Requests`, {
          headers: {
              'Authorization': `Zoho-oauthtoken 1000.26ddbeb0e83757713f7a78e0c4d99b6f.6b9ad4db90e0fd1fdd1dbf6b3d29cbbc`,
              'Accept': 'application/json'
          }
      });
        
      const fetchedEmployees = response.data.data;
      setEmployees(fetchedEmployees);
      console.log(employees)
    } catch (error) {
        console.error('Error fetching data from Zoho:', error.response ? error.response.data : error.message);
    }
}

// Call the function
fetchDataFromZoho();
}, []);
  
  return (
    <div className="App">
      {/* <InsuranceForm /> */}
      
      <ModalForm setEmployees={setEmployees} isUpdateOpen={isUpdateOpen} setIsUpdateOpen={setIsUpdateOpen} setUpdateForm={setUpdateForm} upDateForm={upDateForm} />
      {/* <ParentComponent /> */}
      <EmployeeLeaveTable employees={employees} setUpdateForm={setUpdateForm} setIsUpdateOpen={setIsUpdateOpen} setEmployees={setEmployees} />
    </div>
  );
}

export default App;
