using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TopFiveManager.DataAccess.Models;
using TopFiveManager.DataAccess.Repo;
using Microsoft.AspNetCore.Cors;

namespace TopFiveManager.API.Controllers
{
    [Route("api/[controller]")]
    public class AssignmentsController : Controller
    {
        private EmployeeRepo _employeeRepo = new EmployeeRepo();
        private AssignmentRepo _assignmentRepo = new AssignmentRepo();
        private TopFivesRepo _topFivesRepo = new TopFivesRepo();

        [EnableCors("MyPolicy")]
        [HttpGet("GetAll")]
        public IEnumerable<Employee> GetAll()
        {
            var employees = _employeeRepo.GetAll();

            PopulateAssignments(employees);

            return employees;
        }

        [EnableCors("MyPolicy")]
        [HttpGet("GetByEmployeeId/{employeeId}")]
        public Employee GetByEmployeeId(int employeeId)
        {
            var employees = new List<Employee> { _employeeRepo.GetById(employeeId) };

            PopulateAssignments(employees);

            return employees.FirstOrDefault();
        }

        [EnableCors("MyPolicy")]
        [HttpGet("GetByDepartmentId/{departmentId}")]
        public IEnumerable<Employee> GetByDepartmentId(int departmentId)
        {
            var employees = _employeeRepo.GetByDepartmentId(departmentId);

            PopulateAssignments(employees);

            return employees;
        }

        [EnableCors("MyPolicy")]
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

        [HttpGet("GetAssignedEmployeesByTopFiveId/{topFiveId}")]
        public IEnumerable<Employee> GetAssignedEmployeesByTopFiveId(int topFiveId)
        {
            var assignments = _assignmentRepo.GetByTopFiveId(topFiveId);

            var employees = assignments.Select(a => _employeeRepo.GetById(a.EmployeeId));

            return employees;
        }

        [HttpPost("Assign")]
        public void Assign(int employeeId, int topFiveId)
        {
            _assignmentRepo.Assign(employeeId, topFiveId);
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
