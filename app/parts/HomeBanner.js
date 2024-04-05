
const HomeBanner = () => {
    return(
	<div class="container-fluid banner">
		<div class="row h-100">
			<div class="col-md-6 h-100">
			</div>
			<div class="col-md-6 h-100 slider">
				<div class="bd-example">
				  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
					  <div class="carousel-item active">
						  <h1>Lorem Ipsum</h1>
						  <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
						  <button class="btn brand-btn-primary btn-lg rounded-0">Read More</button>
					  </div>
					  <div class="carousel-item">
						  <h1>Lorem Ipsum</h1>
						  <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
						  <button class="btn brand-btn-primary btn-lg rounded-0">Read More</button>
					  </div>
					  <div class="carousel-item">
						  <h1>Lorem Ipsum</h1>
						  <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
						  <button class="btn brand-btn-primary btn-lg rounded-0 ">Read More</button>
					  </div>
					</div>
					<ol class="carousel-indicators">
					  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
					  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					</ol>
				  </div>
				</div>
			</div>
		</div>
	</div>
    );
};
  
export default HomeBanner;