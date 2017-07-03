using System;
using System.Collections.Generic;
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

        protected IEnumerable<T> Query<T>(Func<IDbConnection, IEnumerable<T>> query)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                return query(dbConnection);
            }
        }
    }
}
