using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using TopFiveManager.DataAccess.Models;

namespace TopFiveManager.DataAccess.Repo
{
    public class TopFivesRepo : RepoBase
    {
        private string baseQuery =
            @"SELECT
            t.Id,
            t.Name,
            t.Description,
            t.ParentId,
            t.ThirdId,
            th.StartDate 'ThirdStartDate',
            th.EndDate 'ThirdEndDate',
            t.CreationDate,
            t.AuthorId,
            a.FirstName 'AuthorFirstName',
            a.LastName 'AuthorLastName',
            t.StatusId,
            t.DepartmentId,
            d.Name 'Department'
            FROM TopFives t
            join Thirds th on th.Id= t.ThirdId
            join Employees a on a.Id = t.AuthorId
            join Departments d on d.Id = t.DepartmentId
            where t.Id in @Ids";

        public IEnumerable<TopFive> GetByIds(IEnumerable<int> ids)
        {
            return Query(d => d.Query<TopFive>(baseQuery, new { Ids = ids }));
        }

        public IEnumerable<TopFive> GetByEmployeeId(int employeeId, DateTime date)
        {
            var parameters = new
            {
                EmployeeId = employeeId,
                Date = date
            };

            var ids = Query(d => d.Query<int>(
                "TopFives_GetIdsByEmployeeId",
                parameters,
                commandType: CommandType.StoredProcedure));

            return GetByIds(ids);
        }

        public IEnumerable<TopFive> GetByDepartmentId(int departmentId, DateTime date)
        {
            var parameters = new
            {
                DepartmentId = departmentId,
                Date = date
            };

            var ids = Query(d => d.Query<int>(
                "TopFives_GetIdsByDepartmentId",
                parameters,
                commandType: CommandType.StoredProcedure));

            return GetByIds(ids);
        }

        public IEnumerable<TopFive> GetByStatusId(int statusId, DateTime date)
        {
            var parameters = new
            {
                StatusId = statusId,
                Date = date
            };

            var ids = Query(d => d.Query<int>(
                "TopFives_GetIdsByStatusId",
                parameters,
                commandType: CommandType.StoredProcedure));

            return GetByIds(ids);
        }

        public IEnumerable<TopFive> GetAll()
        {
            var ids = Query(d => d.Query<int>("SELECT Id FROM TopFives"));

            return GetByIds(ids);
        }
    }
}
