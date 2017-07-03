using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TopFiveManager.DataAccess.Models;
using TopFiveManager.DataAccess.Repo;
using System;

namespace TopFiveManager.API.Controllers
{
    [Route("api/[controller]")]
    public class TopFivesController : Controller
    {
        private TopFivesRepo _repo = new TopFivesRepo();

        [HttpGet("")]
        public IEnumerable<TopFive> GetAll()
        {
            return _repo.GetAll();
        }

        [HttpGet("GetByEmployeeId/{employeeId}")]
        public IEnumerable<TopFive> GetByEmployeeId(int employeeId)
        {
            return _repo.GetByEmployeeId(employeeId, DateTime.Now);
        }


        [HttpGet("GetByStatusId/{statusId}")]
        public IEnumerable<TopFive> GetByStatusId(int statusId)
        {
            return _repo.GetByStatusId(statusId, DateTime.Now);
        }

    }
}
