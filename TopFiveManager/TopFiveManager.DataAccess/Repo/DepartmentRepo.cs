using Dapper;
using System.Collections.Generic;
using System.Data;
using TopFiveManager.DataAccess.Models;

namespace TopFiveManager.DataAccess.Repo
{
    public class DepartmentRepo : RepoBase
    {
        public IEnumerable<Department> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Department>("SELECT * FROM Departments");
            }
        }
    }
}
