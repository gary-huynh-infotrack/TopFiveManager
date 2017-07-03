using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TopFiveManager.DataAccess.Models;
using TopFiveManager.DataAccess.Repo;
using System;
using System.Linq;

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

        [HttpGet("GetAllWithHierarchies")]
        public IEnumerable<TopFive> GetAllWithHierarchies()
        {
            var allTopFives = _repo.GetAll().ToList();

            if (!allTopFives.Any(t=>t.ParentId == null))
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

        [HttpGet("GetByEmployeeId/{employeeId}")]
        public IEnumerable<TopFive> GetByEmployeeId(int employeeId)
        {
            return _repo.GetByEmployeeId(employeeId, DateTime.Now);
        }

        [HttpGet("GetByDepartmentId/{departmentId}")]
        public IEnumerable<TopFive> GetByDepartmentId(int departmentId)
        {
            return _repo.GetByDepartmentId(departmentId, DateTime.Now);
        }

        [HttpGet("GetByStatusId/{statusId}")]
        public IEnumerable<TopFive> GetByStatusId(int statusId)
        {
            return _repo.GetByStatusId(statusId, DateTime.Now);
        }

        [HttpPost("Update")]
        public TopFive Update(NewTopFive topFive)
        {
            return _repo.Update(topFive);
        }

        [HttpPost("Create")]
        public TopFive Create(NewTopFive topFive)
        {
            return _repo.Create(topFive);
        }
    }
}
