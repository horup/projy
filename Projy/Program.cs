using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Projy.Model;
using TypeLite;

namespace Projy
{
   public class Program
   {
      public static void Main(string[] args)
      {
         var test = TypeScript.Definitions()
            .For<Event>().WithMemberFormatter((identifier) =>
            identifier.Name.ToString().ToLower())
            .For<Project>().WithMemberFormatter((identifier) =>
            identifier.Name.ToString().ToLower());
         var lol = test.Generate();
         var s = File.CreateText("Model\\index.d.ts");
         s.Write(lol);
         s.Close();

         ProjyContext.InitDemo();
         BuildWebHost(args).Run();
      }

      public static IWebHost BuildWebHost(string[] args) =>
          WebHost.CreateDefaultBuilder(args)
              .UseStartup<Startup>()
              .Build();
   }
}
