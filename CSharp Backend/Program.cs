using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());


string fileName = "UserCredentials.json";
string filename2 = "PlayersRegistered.json";
List<UsernamePassword> usersCredentials = new();
List<PlayerInformation> PlayersInfo = new();



if(File.Exists(fileName))
{
    var json = File.ReadAllText(fileName);
    usersCredentials.AddRange(JsonSerializer.Deserialize<List<UsernamePassword>>(json));
}
if(File.Exists(filename2))
{
    var json = File.ReadAllText(filename2);
    PlayersInfo.AddRange(JsonSerializer.Deserialize<List<PlayerInformation>>(json));
}



app.MapGet("/", () => "Hello World!");
app.MapGet("/usercredentials", () => usersCredentials);
app.MapPost("/usercredentials", (UsernamePassword UandP) => 
{
    usersCredentials.Add(UandP);
    var json = JsonSerializer.Serialize(usersCredentials);
    File.WriteAllText(fileName, json); //will create
});
app.MapDelete("/usercredentials", () => 
{
    usersCredentials.Clear(); 
    File.Delete(fileName); 
    return Results.Ok("Credentials Cleared!"); 
});

//Player Registration Info
app.MapGet("/registeredplayers", () => PlayersInfo);
app.MapPost("/registeredplayers", (PlayerInformation playinfo)=> {
    PlayersInfo.Add(playinfo);
    var json2 = JsonSerializer.Serialize(PlayersInfo);
    File.WriteAllText(filename2, json2);
});






app.Run();


public record PlayerInformation(string firstname, string lastname, string college, string section, int elo, string bi, int biround );
public record UsernamePassword(string email, string password);
