using System.Data.Entity;
using System.Reflection;
using Abp.Modules;
using RoamingApp.EntityFramework;

namespace RoamingApp.Migrator
{
    [DependsOn(typeof(RoamingAppDataModule))]
    public class RoamingAppMigratorModule : AbpModule
    {
        public override void PreInitialize()
        {
            Database.SetInitializer<RoamingAppDbContext>(null);

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}