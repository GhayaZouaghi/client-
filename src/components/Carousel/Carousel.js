import React from 'react'

import './Carousel.css'

const Carousel = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-8 col-center">
        <h2>Testimonials</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Carousel indicators */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>   
          {/* Wrapper for carousel items */}
          <div className="carousel-inner">
            <div className="item active">
              <div className="img-box"><img src="/examples/images/clients/1.jpg" alt="" /></div>
              <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
              <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
            </div>
            <div className="item">
              <div className="img-box"><img src="/examples/images/clients/2.jpg" alt="" /></div>
              <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
              <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
            </div>
            <div className="item">
              <div className="img-box"><img src="/examples/images/clients/3.jpg" alt="" /></div>
              <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
              <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
            </div>
          </div>
          {/* Carousel controls */}
          <a className="carousel-control left" href="#myCarousel" data-slide="prev">
            <i className="fa fa-angle-left" />
          </a>
          <a className="carousel-control right" href="#myCarousel" data-slide="next">
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </div>
  </div>);
}

export default Carousel