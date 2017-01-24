using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using RoamingApp.MultiTenancy.Dto;

namespace RoamingApp.MultiTenancy
{
    public interface ITenantAppService : IApplicationService
    {
        ListResultDto<TenantListDto> GetTenants();

        Task CreateTenant(CreateTenantInput input);
    }
}
