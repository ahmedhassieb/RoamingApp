﻿using System.Web.Mvc;
using Abp.Web.Mvc.Authorization;

namespace RoamingApp.Web.Controllers
{
    [AbpMvcAuthorize]
    public class HomeController : RoamingAppControllerBase
    {
        public ActionResult Index()
        {
            return View("~/App/Main/views/layout/layout.cshtml"); //Layout of the angular application.
        }
	}
}