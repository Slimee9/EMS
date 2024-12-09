 const employees = [ 
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Employee Records",
          "taskDescription": "Update all employee records in the HR system.",
          "taskDate": "2024-10-18",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Complete Performance Reviews",
          "taskDescription": "Submit performance reviews for all team members.",
          "taskDate": "2024-09-15",
          "category": "Management"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Budget Report",
          "taskDescription": "Prepare a monthly budget report for the finance team.",
          "taskDate": "2024-10-20",
          "category": "Finance"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Vihan",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Website UI",
          "taskDescription": "Create the UI design for the new website project.",
          "taskDate": "2024-11-01",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client Meeting",
          "taskDescription": "Attend client meeting to discuss project requirements.",
          "taskDate": "2024-09-20",
          "category": "Client"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Fix Security Bugs",
          "taskDescription": "Fix all security bugs identified in the audit.",
          "taskDate": "2024-09-25",
          "category": "Development"
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 3,
      "firstName": "Ishaan",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Blog Post",
          "taskDescription": "Write a blog post about the latest product release.",
          "taskDate": "2024-10-21",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Email Campaign",
          "taskDescription": "Set up the new email campaign for customer outreach.",
          "taskDate": "2024-10-25",
          "category": "Marketing"
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstName": "Diya",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Update System Infrastructure",
          "taskDescription": "Plan and implement system infrastructure updates.",
          "taskDate": "2024-10-30",
          "category": "IT"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Monitor Network Security",
          "taskDescription": "Review network logs for any suspicious activity.",
          "taskDate": "2024-10-05",
          "category": "Security"
        }
      ],
      "taskSummary": {
        "active": 1,
        "newTask": 0,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstName": "Arjun",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Sales Report",
          "taskDescription": "Gather data and prepare the monthly sales report.",
          "taskDate": "2024-10-22",
          "category": "Sales"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Contact Leads",
          "taskDescription": "Reach out to potential customers from the lead list.",
          "taskDate": "2024-10-19",
          "category": "Sales"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update CRM",
          "taskDescription": "Update customer information in the CRM system.",
          "taskDate": "2024-09-28",
          "category": "Sales"
        }
      ],
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    }
  ];
   
const admin = [{
      "id": 1,
      "firstName": "Admin",
      "email": "admin@me.com",
      "password": "123"
    }];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return{employees,admin}
  //  console.log(employees,admin)
}
