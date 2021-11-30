
function Footer() {
  const style ={
        color: 'Indigo'
      }
    return (
        <footer className='bg-light'>
      <div className='container py-3 mt-5' >
      <div className='row  row-cols-lg-3'>
        <div>
           <h4 className='mb-3' style={style}>Biker'S.</h4>
           <br />
           <i className="bi bi-geo-alt-fill text-primary"> 23514 W Huston Ln</i>
           <br />
            <i className="bi bi-telephone-fill text-success"> +1-614-368-7964</i>
            <br />
            <i className="bi bi-envelope-fill text-danger"> contact@Biker'S.org</i>
            
        </div>
        <div>
          <div>
          <i className="bi bi-facebook me-3 fs-4 text-primary"></i>
          <i className="bi bi-twitter me-3 fs-4 text-info"></i>
          <i className="bi bi-linkedin me-3 fs-4 text-primary"></i>
          <i className="bi bi-youtube fs-4 text-danger"></i>
          <p className='my-4 fw-bold'> Copyright &copy; Biker'S 2022</p>
          </div>
        </div>
        <div>
          <h4 className="fw-bold text-dark">Stay in the loop.</h4>
          <p className="text-muted">The world of Corporate bike is always changing.  Sign up and never miss a beat.</p>
          <input type="text" className="form-control" placeholder="Enter your email"/>
          <button className='btn btn-danger mt-3'>Subscribe</button>
        </div>
      </div>
      </div>
    </footer>
    )
}

export default Footer
