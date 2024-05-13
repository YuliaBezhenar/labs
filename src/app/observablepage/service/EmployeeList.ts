import { Employee } from './Employee';
import { ConfigService } from './config.service';

export class EmployeeList{
    private employeeList = new Array(); //список співробітників
    private searchEmp = new Array(); //масив з результатами пошуку
    searchEmpResult:string[] = []; //відкритий масив з рез.пошуку
    posSub = this.configService.pos$
        .subscribe(() => {
            let pos = this.configService.pos$.value;
            this.search(pos.id);
        });


    constructor(private configService: ConfigService) {
        let employee = new Employee;
        employee.surname = "Лебединський";
        employee.name = "Іван"
        employee.fname = "Олександрович"
        employee.age = 46;
        employee.pos_id = 0;
        this.add(employee);
        let employee1 = new Employee;
        employee1.surname = "Галиницький";
        employee1.name = "Данило"
        employee1.fname = "Романович"
        employee1.age = 32;
        employee1.pos_id = 1;
        this.add(employee1);
        this.search(0);
    }

    add(employee: Employee) {
        this.employeeList.push(employee);
        this.search(employee.pos_id);
    }
    search(id_pos: number) {
        this.searchEmp = this.employeeList.filter((employee) => {
            return employee.pos_id == id_pos;
        })
        this.searchEmpResult = [];
        this.searchEmp.forEach(el => {
            this.searchEmpResult.push("Прізвище: " + el.surname);
            this.searchEmpResult.push("Ім'я: " + el.name);
            this.searchEmpResult.push("По-батькові: " + el.fname);
            this.searchEmpResult.push("Вік: " + el.age);
        })
    }
}