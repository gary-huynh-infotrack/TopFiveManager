using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TopFiveManager.DataAccess.Models;
using TopFiveManager.DataAccess.Repo;

namespace TopFiveManager.API.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private EmployeeRepo _repo = new EmployeeRepo();

        [HttpGet("GetAll")]
        public IEnumerable<Employee> GetAll()
        {
            return _repo.GetAll();
        }

        [HttpGet("GetById/{id}")]
        public Employee GetById(int id)
        {
            return _repo.GetById(id);
        }
    }
}
