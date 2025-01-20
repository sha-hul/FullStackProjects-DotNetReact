using Microsoft.AspNetCore.Identity;

namespace RedMangoAPI.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
