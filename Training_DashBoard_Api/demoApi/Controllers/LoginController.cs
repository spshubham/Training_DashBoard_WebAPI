using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace demoApi.Controllers
{
    public class LoginController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage EmployeeById(int id, string password)
        {
            using (Employeedb_1Entities1 entities = new Employeedb_1Entities1())
            {
                var entity = entities.Registration_Table.FirstOrDefault(e => e.user_id == id && e.password == password);
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee With Id=" + id.ToString() + "Not Found");
                }
                // return entities.Employees.FirstOrDefault(e => e.ID == id);
            }
        }
    }
}
