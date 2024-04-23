using System;
using Microsoft.Extensions.Configuration;
using MySqlConnector;

namespace ChessTournamentApi 
{
    public class TestDBConnection
    {
        private readonly IConfiguration _configuration;

        
        public TestDBConnection(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void TestDatabaseConnection()
        {
            // 1. Get your connection string:
            string connectionString = _configuration.GetConnectionString("ChessTournamentDatabase");

            // 2. Open and close the connection
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    Console.WriteLine("Database connection successful!");
                }
                catch (MySqlException ex)
                {
                    Console.WriteLine("Database connection failed: " + ex.Message);
                }
            }
        }
    }
}
