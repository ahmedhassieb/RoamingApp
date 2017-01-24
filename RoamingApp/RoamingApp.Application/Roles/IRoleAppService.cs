using System.Threading.Tasks;
using Abp.Application.Services;
using RoamingApp.Roles.Dto;

namespace RoamingApp.Roles
{
    public interface IRoleAppService : IApplicationService
    {
        Task UpdateRolePermissions(UpdateRolePermissionsInput input);
    }
}
