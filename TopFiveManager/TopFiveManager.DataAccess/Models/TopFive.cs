using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TopFiveManager.DataAccess.Models
{
    public class TopFive
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? ParentId { get; set; }

        public int ThirdId { get; set; }
        public DateTime ThirdStartDate { get; set; }
        public DateTime ThirdEndDate { get; set; }

        public DateTime CreationDate { get; set; }

        public int AuthorId { get; set; }
        string AuthorFirstName { get; set; }
        string AuthorLastName { get; set; }

        public int StatusId { get; set; }

        public int? DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public List<TopFive> Children { get; set; }

        public TopFive()
        {
            Children = new List<TopFive>();
        }
    }
}
