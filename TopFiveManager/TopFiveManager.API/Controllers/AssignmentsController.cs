using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TopFiveManager.DataAccess.Models;
using TopFiveManager.DataAccess.Repo;

namespace TopFiveManager.API.Controllers
{
    [Route("api/[controller]")]
    public class AssignmentsController : Controller
    {
        private EmployeeRepo _employeeRepo = new EmployeeRepo();
        private AssignmentRepo _assignmentRepo = new AssignmentRepo();
        private TopFivesRepo _topFivesRepo = new TopFivesRepo();

        [HttpGet("GetAll")]
        public IEnumerable<Employee> GetAll()
        {
            var employees = _employeeRepo.GetAll();

            PopulateAssignments(employees);

            return employees;
        }

        [HttpGet("GetByEmployeeId/{employeeId}")]
        public Employee GetByEmployeeId(int employeeId)
        {
            var employees = new List<Employee> { _employeeRepo.GetById(employeeId) };

            PopulateAssignments(employees);

            return employees.FirstOrDefault();
        }

        [HttpGet("GetByDepartmentId/{departmentId}")]
        public IEnumerable<Employee> GetByDepartmentId(int departmentId)
        {
            var employees = _employeeRepo.GetByDepartmentId(departmentId);

            PopulateAssignments(employees);

            return employees;
        }

        [HttpGet("GetByTopFiveStatusId/{topFiveStatusId}")]
        public IEnumerable<Employee> GetByTopFiveStatusId(int topFiveStatusId)
        {
            var employees = _employeeRepo.GetAll();

            PopulateAssignments(employees);

            foreach(var employee in employees)
            {
                employee.TopFives = employee.TopFives.Where(t => t.StatusId == topFiveStatusId).ToList();
            }

            employees = employees.Where(e => e.TopFives.Any());

            return employees;
        }

        private void PopulateAssignments(IEnumerable<Employee> employees)
        {
            foreach (var employee in employees)
            {
                var assignments = _assignmentRepo.GetByEmployeeId(employee.Id);
                var topFives = _topFivesRepo.GetByIds(assignments.Select(a => a.TopFiveId));

                employee.TopFives = topFives.ToList();
            }
        }
    }
}
