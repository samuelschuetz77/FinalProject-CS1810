using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
//app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());


string fileName = "UserCredentials.json";
List<UsernamePassword> usersCredentials = new();
if(File.Exists(fileName))
{
    var json = File.ReadAllText(fileName);
    usersCredentials.AddRange(JsonSerializer.Deserialize<List<UsernamePassword>>(json));
}

app.MapGet("/", () => "Hello World!");
app.MapGet("/usercredentials", () => usersCredentials);
app.MapPost("/usercredentials", (UsernamePassword UandP) => 
{
    usersCredentials.Add(UandP);
    var json = JsonSerializer.Serialize(usersCredentials);
    File.WriteAllText(fileName, json); //will create
});


app.Run();

public record UsernamePassword(string email, string password);
