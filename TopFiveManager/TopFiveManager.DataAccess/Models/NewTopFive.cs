namespace TopFiveManager.DataAccess.Models
{
    public class NewTopFive
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? ParentId { get; set; }
        public int AuthorId { get; set; }
        public int StatusId { get; set; }
        public int? DepartmentId { get; set; }
    }
}
