

const Header = () => {

    return (
        <div class="container-fluid">
		<nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
			<a href="https://roeljohn.github.io/lawyer-psd-html/" class="navbar-brand d-flex w-50 mr-auto"><img class="logo" src="img/logo.png"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
			<div class="navbar-collapse collapse w-100" id="navbarsExample11">
				<ul class="navbar-nav w-100 justify-content-center">
					<li class="nav-item">
						<a class="nav-link" href="https://roeljohn.github.io/lawyer-psd-html/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://roeljohn.github.io/lawyer-psd-html/about">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://roeljohn.github.io/lawyer-psd-html/services">Services</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://roeljohn.github.io/lawyer-psd-html/blog">Blog</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://roeljohn.github.io/lawyer-psd-html/contact">Contact</a>
					</li>
				</ul>
				<ul class="nav navbar-nav ml-auto w-100 justify-content-end">
					<li class="nav-item phone-menu">
						<a class="nav-link" href="#"><i class="fas fa-phone-alt"></i> 123.456.7890</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
    );
};
  
export default Header;
