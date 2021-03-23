using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace demoApi.Controllers
{
    public class CourseController : ApiController
    {
        public HttpResponseMessage Get()
        {
            using( Employeedb_1Entities1 entity = new Employeedb_1Entities1() )
            {
                return Request.CreateResponse(HttpStatusCode.OK ,  entity.courses.ToList() ) ; 
            }
        }
        public HttpResponseMessage Post( course c )
        {
            try
            {
                using( Employeedb_1Entities1 entity = new Employeedb_1Entities1() )
                {
                    entity.courses.Add(c);
                    entity.SaveChanges(); 
                }
                
                return Request.CreateResponse(HttpStatusCode.OK, c); 
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest,"Not valid operation");
            }
        }
        public HttpResponseMessage Put( course c )
        {
            try
            {

                using (Employeedb_1Entities1 entity = new Employeedb_1Entities1())
                {
                    var curr = entity.courses.FirstOrDefault(e => e.id == c.id);
                    curr.name = c.name;
                    curr.instructor = c.instructor;
                    curr.start_date = c.start_date;
                    curr.end_date = c.end_date;
                    curr.enrollments = c.enrollments;
                    curr.image = c.image;
                    entity.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, c);
                }
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Not valid operation");
            }
        }
        public HttpResponseMessage Delete( int Id )
        {
            using( Employeedb_1Entities1 entity = new Employeedb_1Entities1())
            {
                var curr = entity.courses.FirstOrDefault(e => e.id == Id);
                entity.courses.Remove(curr);
                entity.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, curr);
            }

        }
    }
}
