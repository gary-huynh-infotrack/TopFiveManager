using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TopFiveManager.DataAccess.Models;
using TopFiveManager.DataAccess.Repo;
using System;
using System.Linq;
using Microsoft.AspNetCore.Cors;

namespace TopFiveManager.API.Controllers
{
    [Route("api/[controller]")]
    public class TopFivesController : Controller
    {
        private TopFivesRepo _repo = new TopFivesRepo();

        [EnableCors("MyPolicy")]
        [HttpGet("")]
        public IEnumerable<TopFive> GetAll()
        {
            return _repo.GetAll();
        }
        [EnableCors("MyPolicy")]
        [HttpGet("GetAllWithHierarchies")]
        public IEnumerable<TopFive> GetAllWithHierarchies()
        {
            var allTopFives = _repo.GetAll().ToList();

            if (!allTopFives.Any(t => t.ParentId == null))
            {
                throw new Exception("No root top 5s found");
            }

            foreach (var topFive in allTopFives)
            {
                if (topFive.ParentId == null)
                {
                    continue;
                }

                var parent = allTopFives.FirstOrDefault(f => f.Id == topFive.ParentId);
                if (parent == null)
                {
                    throw new Exception($"Parent doesn't exist for TopFive ID {topFive.Id}");
                }

                parent.Children.Add(topFive);
            }

            return allTopFives.Where(t => t.ParentId == null);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("GetByEmployeeId/{employeeId}")]
        public IEnumerable<TopFive> GetByEmployeeId(int employeeId)
        {
            return _repo.GetByEmployeeId(employeeId, DateTime.Now);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("GetByDepartmentId/{departmentId}")]
        public IEnumerable<TopFive> GetByDepartmentId(int departmentId)
        {
            return _repo.GetByDepartmentId(departmentId, DateTime.Now);
        }
        [EnableCors("MyPolicy")]
        [HttpGet("GetByStatusId/{statusId}")]
        public IEnumerable<TopFive> GetByStatusId(int statusId)
        {
            return _repo.GetByStatusId(statusId, DateTime.Now);
        }
        [EnableCors("MyPolicy")]
        [HttpPost("Update")]
        public TopFive Update(UpdateTopFive topFive)
        {
            return _repo.Update(topFive);
        }
        [EnableCors("MyPolicy")]
        [HttpPost("Create")]
        public TopFive Create(NewTopFive topFive)
        {
            return _repo.Create(topFive);
        }
        [EnableCors("MyPolicy")]
        [HttpPost("UpdateStatus")]
        public TopFive UpdateStatus(int id, int newStatusId)
        {
            return _repo.UpdateStatus(id, newStatusId);
        }
    }
}
