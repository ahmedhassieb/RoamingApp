using System.Reflection;
using Abp.AutoMapper;
using Abp.Modules;

namespace RoamingApp
{
    [DependsOn(typeof(RoamingAppCoreModule), typeof(AbpAutoMapperModule))]
    public class RoamingAppApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Modules.AbpAutoMapper().Configurators.Add(mapper =>
            {
                //Add your custom AutoMapper mappings here...
                //mapper.CreateMap<,>()
            });
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}
