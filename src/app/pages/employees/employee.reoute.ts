import { Routes } from "@angular/router";
import { EmployeesComponent } from "./employees.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

export const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
        {
          path: '',
          pathMatch: 'full',
          title: 'Employee List',
          component: EmployeeListComponent,
        },
        {
          path: 'view/:id',
          title: 'Employee Details',
          component: EmployeeDetailsComponent,
        },
    ]
  },
];