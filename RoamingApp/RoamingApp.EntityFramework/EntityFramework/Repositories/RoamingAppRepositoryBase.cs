using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace RoamingApp.EntityFramework.Repositories
{
    public abstract class RoamingAppRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<RoamingAppDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected RoamingAppRepositoryBase(IDbContextProvider<RoamingAppDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class RoamingAppRepositoryBase<TEntity> : RoamingAppRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected RoamingAppRepositoryBase(IDbContextProvider<RoamingAppDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
