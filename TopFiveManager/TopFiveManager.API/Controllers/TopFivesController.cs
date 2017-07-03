using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TopFiveManager.DataAccess.Models;
using TopFiveManager.DataAccess.Repo;

namespace TopFiveManager.API.Controllers
{
    [Route("api/[controller]")]
    public class TopFivesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("GetMyTopFives/{employeeId}")]
        public IEnumerable<TopFive> GetMyTopFives(int employeeId)
        {
            return new TopFivesRepo().GetByUserId(employeeId);
        }
    }
}
