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
    public class LoginDetailsController : ApiController
    {
        private Employeedb_1Entities1 db = new Employeedb_1Entities1();

        // GET: api/LoginDetails
        public IQueryable<LoginDetail> GetLoginDetails()
        {
            return db.LoginDetails;
        }

        // GET: api/LoginDetails/5
        [ResponseType(typeof(LoginDetail))]
        public IHttpActionResult GetLoginDetail(string id)
        {
            LoginDetail loginDetail = db.LoginDetails.Find(id);
            if (loginDetail == null)
            {
                return NotFound();
            }

            return Ok(loginDetail);
        }

        // PUT: api/LoginDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLoginDetail(string id, LoginDetail loginDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != loginDetail.user_email)
            {
                return BadRequest();
            }

            db.Entry(loginDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginDetailExists(id))
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

        // POST: api/LoginDetails
        [ResponseType(typeof(LoginDetail))]
        public IHttpActionResult PostLoginDetail(LoginDetail loginDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.LoginDetails.Add(loginDetail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (LoginDetailExists(loginDetail.user_email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = loginDetail.user_email }, loginDetail);
        }

        // DELETE: api/LoginDetails/5
        [ResponseType(typeof(LoginDetail))]
        public IHttpActionResult DeleteLoginDetail(string id)
        {
            LoginDetail loginDetail = db.LoginDetails.Find(id);
            if (loginDetail == null)
            {
                return NotFound();
            }

            db.LoginDetails.Remove(loginDetail);
            db.SaveChanges();

            return Ok(loginDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LoginDetailExists(string id)
        {
            return db.LoginDetails.Count(e => e.user_email == id) > 0;
        }
    }
}