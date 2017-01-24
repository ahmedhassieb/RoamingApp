using Abp.Authorization;
using RoamingApp.Authorization.Roles;
using RoamingApp.MultiTenancy;
using RoamingApp.Users;

namespace RoamingApp.Authorization
{
    public class PermissionChecker : PermissionChecker<Tenant, Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {

        }
    }
}
