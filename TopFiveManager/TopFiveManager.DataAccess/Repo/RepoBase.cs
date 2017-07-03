using System.Data;
using System.Data.SqlClient;

namespace TopFiveManager.DataAccess.Repo
{
    public abstract class RepoBase
    {
        private string connectionString;

        protected RepoBase()
        {
            connectionString = @"Data Source=AUAWSSQL001T.infotrack.com.au;Initial Catalog=TopFiveManager;Integrated Security=True";
        }
        
        protected IDbConnection Connection => new SqlConnection(connectionString);
    }
}
