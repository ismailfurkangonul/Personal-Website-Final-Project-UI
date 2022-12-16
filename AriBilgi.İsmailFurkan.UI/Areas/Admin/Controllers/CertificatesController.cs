using Microsoft.AspNetCore.Mvc;

namespace AriBilgi.İsmailFurkan.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CertificatesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Add()
        {
            return View();
        }
        public IActionResult Edit()
        {
            return View();
        }
    }
}
