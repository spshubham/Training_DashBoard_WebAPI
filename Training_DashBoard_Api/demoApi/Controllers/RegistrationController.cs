using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using demoApi;

namespace demoApi.Controllers
{
    public class RegistrationController : ApiController
    {
        private Employeedb_1Entities1 db = new Employeedb_1Entities1();

        //GET: api/Registration
        public IQueryable<Registration_Table> GetRegistration_Table()
        {
            return db.Registration_Table;
        }

        //[ResponseType(typeof(Registration_Table))]
        //public IHttpActionResult GetRegistration_Table(Registration_Table registration_Table)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    Console.WriteLine("Get calls");
        //    return StatusCode(HttpStatusCode.OK);
        //}

        // GET: api/Registration/5
        [ResponseType(typeof(Registration_Table))]
        public IHttpActionResult GetRegistration_Table(int id)
        {
            Registration_Table registration_Table = db.Registration_Table.Find(id);
            if (registration_Table == null)
            {
                return NotFound();
            }

            return Ok(registration_Table);
        }

        // PUT: api/Registration/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRegistration_Table(int id, Registration_Table registration_Table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != registration_Table.user_id)
            {
                return BadRequest();
            }

            db.Entry(registration_Table).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Registration_TableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Registration
        [ResponseType(typeof(Registration_Table))]
        public IHttpActionResult PostRegistration_Table(Registration_Table registration_Table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Registration_Table.Add(registration_Table);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = registration_Table.user_id }, registration_Table);
        }

        // DELETE: api/Registration/5
        [ResponseType(typeof(Registration_Table))]
        public IHttpActionResult DeleteRegistration_Table(int id)
        {
            Registration_Table registration_Table = db.Registration_Table.Find(id);
            if (registration_Table == null)
            {
                return NotFound();
            }

            db.Registration_Table.Remove(registration_Table);
            db.SaveChanges();

            return Ok(registration_Table);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Registration_TableExists(int id)
        {
            return db.Registration_Table.Count(e => e.user_id == id) > 0;
        }
    }
}