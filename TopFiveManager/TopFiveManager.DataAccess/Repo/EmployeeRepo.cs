using Dapper;
using System.Collections.Generic;
using System.Linq;
using TopFiveManager.DataAccess.Models;

namespace TopFiveManager.DataAccess.Repo
{
    public class EmployeeRepo : RepoBase
    {
        public IEnumerable<Employee> GetAll()
        {
            return Query(d => d.Query<Employee>("SELECT * FROM Employees"));
        }

        public Employee GetById(int id)
        {
            return Query(d => d.Query<Employee>("SELECT * FROM Employees WHERE Id = @Id", new { Id = id })).Single();
        }
    }
}
