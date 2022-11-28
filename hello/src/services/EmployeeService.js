import axios from "axios";


const EMPLOYEE_API_BASE_USRL = 'http://localhost:8080/api/employees'


class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_USRL);
    }
}


export default new EmployeeService()