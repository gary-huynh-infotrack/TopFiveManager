using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using TopFiveManager.DataAccess.Models;

namespace TopFiveManager.DataAccess.Repo
{
    public class TopFivesRepo : RepoBase
    {
        public IEnumerable<TopFive> GetByEmployeeId(int employeeId, DateTime date)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                var parameters = new
                {
                    EmployeeId = employeeId,
                    Date = date
                };
                return dbConnection.Query<TopFive>(
                    "TopFives_GetByEmployeeId",
                    parameters,
                    null, 
                    true, 
                    null,
                    CommandType.StoredProcedure);
            }
        }

        public IEnumerable<TopFive> GetByStatusId(int statusId, DateTime date)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                var parameters = new
                {
                    StatusId = statusId,
                    Date = date
                };
                return dbConnection.Query<TopFive>(
                    "TopFives_GetByStatusId",
                    parameters,
                    null,
                    true,
                    null,
                    CommandType.StoredProcedure);
            }
        }

        public IEnumerable<TopFive> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                return dbConnection.Query<TopFive>("SELECT * FROM TopFives");
            }
        }
    }
}
