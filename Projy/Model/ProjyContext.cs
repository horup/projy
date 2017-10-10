using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projy.Model
{
   public class ProjyContext : DbContext
   {
      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
      {
         optionsBuilder.UseInMemoryDatabase("Projy");
      }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
         modelBuilder.Entity<Project>()
            .HasMany(c => c.Events)
            .WithOne(e => e.Project);
      }

      public DbSet<Project> Projects { get; set; }
      public DbSet<Event> Events { get; set; }

      public static void InitDemo()
      {
         using (var c = new ProjyContext())
         {
            {
               var proj = new Project();
               c.Projects.Add(proj);
               proj.Name = "FOX 3.5.0";
               {
                  var e = new Event();
                  e.Name = "Final Release";
                  e.Timestamp = DateTime.UtcNow.AddMonths(3);
                  e.Project = proj;
                  c.Events.Add(e);
               }
               { 
                  var e = new Event();
                  e.Name = "House Testing";
                  e.Timestamp = DateTime.UtcNow.AddMonths(2);
                  e.Project = proj;
                  c.Events.Add(e);

               }
               {
                  var e = new Event();
                  e.Name = "System Testing";
                  e.Timestamp = DateTime.UtcNow.AddMonths(1);
                  e.Project = proj;
                  c.Events.Add(e);
               }
               {
                  var e = new Event();
                  e.Name = "Implementation Finished";
                  e.Timestamp = DateTime.UtcNow.AddMonths(-1);
                  e.Project = proj;
                  c.Events.Add(e);
               }
            }

            {
               var proj = new Project();
               c.Projects.Add(proj);
               proj.Name = "ProGrow 1.1";
               {
                  var e = new Event();
                  e.Name = "Innovent Visit";
                  e.Timestamp = DateTime.Parse("2017-9-1");
                  e.Project = proj;
                  c.Events.Add(e);
               }
               {
                  var e = new Event();
                  e.Name = "Release";
                  e.Timestamp = DateTime.Parse("2018-9-1");
                  e.Project = proj;
                  c.Events.Add(e);

               }
            }

            c.SaveChanges();
         }
      }
   }
}
