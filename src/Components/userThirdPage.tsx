import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DepartmentData {
  department: string;
  sub_departments: string[];
}

const ThirdPage: React.FC = () => {
  // Hardcoded JSON data as required
  const departmentData: DepartmentData[] = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  const [expandedDeptId, setExpandedDeptId] = useState<number | false>(false);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);

  const handleAccordionChange = (deptId: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedDeptId(isExpanded ? deptId : false);
  };

  const handleDepartmentSelection = (department: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    // Toggle the department selection
    setSelectedDepartments((prevSelected) =>
      isChecked ? [...prevSelected, department] : prevSelected.filter((dept) => dept !== department)
    );

    // Toggle all sub-departments selection if the department is selected
    if (isChecked) {
      const subDepartments = departmentData.find((dept) => dept.department === department)?.sub_departments || [];
      setSelectedSubDepartments((prevSelected) => [...prevSelected, ...subDepartments]);
    } else {
      setSelectedSubDepartments((prevSelected) =>
        prevSelected.filter((subDept) => !departmentData.find((dept) => dept.department === department)?.sub_departments.includes(subDept))
      );
    }
  };

  const handleSubDepartmentSelection = (subDepartment: string, department: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;

    // Toggle the sub-department selection
    setSelectedSubDepartments((prevSelected) =>
      isChecked ? [...prevSelected, subDepartment] : prevSelected.filter((subDept) => subDept !== subDepartment)
    );

    // If sub-department is selected, also select the parent department
    if (isChecked && !selectedDepartments.includes(department)) {
      setSelectedDepartments((prevSelected) => [...prevSelected, department]);
    } else if (!isChecked && selectedDepartments.includes(department)) {
      setSelectedDepartments((prevSelected) => prevSelected.filter((dept) => dept !== department));
    }
  };

  return (
    <div>
      <h1>Third Page</h1>
      <div>
        <h2>List of Departments</h2>
        {departmentData.map((deptData) => (
          <Accordion
            key={deptData.department}
            // expanded={expandedDeptId === deptData.department}
            // onChange={handleAccordionChange(deptData.department)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Checkbox
                checked={selectedDepartments.includes(deptData.department)}
                onChange={handleDepartmentSelection(deptData.department)}
              />
              <Typography>{deptData.department}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {deptData.sub_departments.map((subDept) => (
                  <li key={subDept}>
                    <Checkbox
                      checked={selectedSubDepartments.includes(subDept)}
                      onChange={handleSubDepartmentSelection(subDept, deptData.department)}
                    />
                    {subDept}
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div>
        <h2>Selected Departments</h2>
        <ul>
          {selectedDepartments.map((dept) => (
            <li key={dept}>{dept}</li>
          ))}
        </ul>
        <h2>Selected Sub-Departments</h2>
        <ul>
          {selectedSubDepartments.map((subDept) => (
            <li key={subDept}>{subDept}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThirdPage;
