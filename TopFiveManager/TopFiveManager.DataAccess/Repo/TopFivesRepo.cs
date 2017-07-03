using Dapper;
using System.Collections.Generic;
using System.Data;
using TopFiveManager.DataAccess.Models;

namespace TopFiveManager.DataAccess.Repo
{
    public class TopFivesRepo : RepoBase
    {
        public IEnumerable<TopFive> GetByUserId(int employeeId)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                // looks up only by employee id, should also take into account the third
                return dbConnection.Query<TopFive>(
                    "GetTopFivesByEmployeeId", 
                    new { EmployeeId = employeeId }, 
                    null, 
                    true, 
                    null,
                    CommandType.StoredProcedure);
            }
        }
    }
}
