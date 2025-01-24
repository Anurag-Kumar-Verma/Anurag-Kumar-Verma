import { NgModule } from "@angular/core";
import { EmployeesComponent } from "./employees.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { RouterModule } from "@angular/router";
import { employeeRoutes } from "./employee.reoute";

@NgModule({
    declarations: [
        EmployeesComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent,
    ],
    imports: [
        RouterModule.forChild(employeeRoutes),
    ]
})
export class EmployeeModule {}