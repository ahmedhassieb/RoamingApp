using Abp.Web.Mvc.Views;

namespace RoamingApp.Web.Views
{
    public abstract class RoamingAppWebViewPageBase : RoamingAppWebViewPageBase<dynamic>
    {

    }

    public abstract class RoamingAppWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected RoamingAppWebViewPageBase()
        {
            LocalizationSourceName = RoamingAppConsts.LocalizationSourceName;
        }
    }
}