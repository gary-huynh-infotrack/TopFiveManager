using Dapper;
using System.Collections.Generic;
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

        public void Assign(int employeeId, int topFiveId)
        {
            var parameters = new
            {
                EmployeeId = employeeId,
                TopFiveId  = topFiveId
            };

            Query(d => d.Query<int>(
@"insert into 
topfivesemployees(topfiveid, employeeid, assignmentstatus) 
values (@TopFiveId, @EmployeeId, 1);", parameters));
        }
    }
}
