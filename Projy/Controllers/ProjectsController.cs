using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Projy.Model;
using Microsoft.EntityFrameworkCore;

namespace Projy.Controllers
{
   [Route("api/[controller]")]
   public class ProjectsController : Controller
   {
      [HttpGet]
      public IEnumerable<Project> Get()
      {
         using (var context = new ProjyContext())
         {
            return context.Projects.Include(p => p.Events).ToList();
         }
      }
   }
}
