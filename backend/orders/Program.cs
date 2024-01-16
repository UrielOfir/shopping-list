using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add PostgreSQL and DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use CORS policy
app.UseCors();

// Map POST request for creating an order
app.MapPost("/orders", async (Order order, AppDbContext dbContext) =>
{
    dbContext.Orders.Add(order);
    await dbContext.SaveChangesAsync();

    return Results.Created($"/orders/{order.Id}", order);
});

// Map GET request to retrieve an order by ID
app.MapGet("/orders/{id}", async (int id, AppDbContext dbContext) =>
{
    return await dbContext.Orders.FindAsync(id)
        is Order order
            ? Results.Ok(order)
            : Results.NotFound();
});

app.Run();

// Define the model
public class Order
{
    public int Id { get; set; }

    [Required]
    public string CustomerName { get; set; }

    [Required]
    public string Address { get; set; }

    [Required, EmailAddress]
    public string Email { get; set; }

    public string OrderItemsJson { get; set; }
}

// Define the DbContext
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Order> Orders { get; set; }
}
