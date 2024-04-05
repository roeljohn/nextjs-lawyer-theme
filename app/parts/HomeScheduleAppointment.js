const HomeScheduleAppointment = () => {
    return(
        <div class="container-fluid">
		<div class="row">
			<div class="col-md-6 appointment p-4-10 brand-bg">
				<h1>Schedule Appointment</h1>
				<div class="row">
					<div class="col-md-6 mb-3">
						<input type="text" class="form-control form-control-lg rounded-0" placeholder="YOUR NAME" id="email" />
					</div>
					<div class="col-md-6 mb-3">
						<input type="text" class="form-control form-control-lg rounded-0" placeholder="YOUR PHONE" id="email" />
					</div>
					<div class="col-md-6 mb-3">
						<input type="text" class="form-control form-control-lg rounded-0" placeholder="YOUR EMAIL" id="email" />
					</div>
					<div class="col-md-6 mb-3">
						<input type="text" class="form-control form-control-lg rounded-0" placeholder="YOUR LOCATION" id="email" />
					</div>
					<div class="col-md-6 mb-3">
						
					</div>
					<div class="col-md-6 mb-3">
						<input type="button" class="btn brand-btn-primary-light btn-block btn-lg rounded-0" value="Input Button"/>
					</div>
				</div>
			</div>
			<div class="col-md-6 p-4-10 featured-content">
				<h1 class="font-italic">“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”</h1>
				<p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
				<button class="btn brand-btn-primary-outline btn-lg rounded-0">Read More</button>
			</div>
		</div>
	</div>
    );
};
  
export default HomeScheduleAppointment;