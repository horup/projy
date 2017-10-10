using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projy.Model
{
   public class Event
   {
      public int ID { get; set; }
      public string Name { get; set; }
      public DateTime Timestamp { get; set; }
      public string Description { get; set; }
      public Project Project { get; set; }

   }
}
