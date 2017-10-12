using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projy.Model
{
   public class Project
   {
      public int ID { get; set; }
      public string Name { get; set; }

      public ICollection<Event> Events { get; set; }

      public string Color { get; set; }
   }
}
