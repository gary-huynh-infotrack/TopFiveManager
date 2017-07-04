using Dapper;
using System.Collections.Generic;
using System.Linq;
using TopFiveManager.DataAccess.Models;

namespace TopFiveManager.DataAccess.Repo
{
    public class AssignmentRepo : RepoBase
    {
        public IEnumerable<Assignment> GetByEmployeeId(int id)
        {
            return Query(d => d.Query<Assignment>(
@"select * 
from topfivesemployees
where employeeid = @Id", new { Id = id }));
        }
    }
}
