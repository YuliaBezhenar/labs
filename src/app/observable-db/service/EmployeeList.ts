import { Employee } from './Employee';
import { ConfigService } from './config.service';

export class EmployeeList{
    employeeList = new Array(); //список співробітників
    searchEmp = new Array(); //масив з результатами пошуку
    //searchEmpResult:string[] = []; //відкритий масив з рез.пошуку
    posSub = this.configService.pos$
        .subscribe(() => {
            let pos = this.configService.pos$.value;
            this.search(pos.id);
        });


    constructor(private configService: ConfigService) { }

    add(employee: Employee) {
        this.employeeList.push(employee);
        this.search(employee.pos_id);
    }
    search(id_pos: number) {
        this.searchEmp = this.employeeList.filter((employee) => {
            return employee.pos_id == id_pos;
        })
    }
}