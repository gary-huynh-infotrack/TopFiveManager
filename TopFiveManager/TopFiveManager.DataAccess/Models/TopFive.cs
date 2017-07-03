using System;
using System.ComponentModel.DataAnnotations;

namespace TopFiveManager.DataAccess.Models
{
    public class TopFive
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ParentId { get; set; } // not a key yet
        public int ThirdId { get; set; } // not a key yet
        public DateTime CreationDate { get; set; }
        public int AuthorId { get; set; } // not a key yet
        public int StatusId { get; set; } // not a key yet
    }
}
