using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TopFiveManager.DataAccess.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public List<TopFive> TopFives { get; set; }

        public Employee()
        {
            TopFives = new List<TopFive>();
        }
    }
}
