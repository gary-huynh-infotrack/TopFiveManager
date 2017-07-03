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
            var parameters = new
            {
                EmployeeId = employeeId,
                Date = date
            };
            return Query(d => d.Query<TopFive>(
                "TopFives_GetByEmployeeId",
                parameters,
                commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TopFive> GetByDepartmentId(int departmentId, DateTime date)
        {
            var parameters = new
            {
                DepartmentId = departmentId,
                Date = date
            };
            return Query(d => d.Query<TopFive>(
                "TopFives_GetByDepartmentId",
                parameters,
                commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TopFive> GetByStatusId(int statusId, DateTime date)
        {
            var parameters = new
            {
                StatusId = statusId,
                Date = date
            };
            return Query(d => d.Query<TopFive>(
                "TopFives_GetByStatusId",
                parameters,
                commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TopFive> GetAll()
        {
            return Query(d => d.Query<TopFive>("SELECT * FROM TopFives"));
        }
    }
}
