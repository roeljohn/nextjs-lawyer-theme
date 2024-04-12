import HeaderContact from "../components/header/HeaderContact";
import HeaderLogo from "../components/header/HeaderLogo";
import HeaderNavigation from "../components/header/HeaderNavigation";
import useApiStore from "../lib/store";

const Header = () => {
	const { data, menu } = useApiStore();
	const header_logo = data?.acf?.header_logo;
    const header_contact = data?.acf?.header_contact; // Added null check
    const phone = header_contact?.phone; // Added null check
    const phone_link = header_contact?.phone_link; // Added null check
    const phone_icon = header_contact?.phone_icon; // Added null check
    return (
        <div class="container-fluid">
		<nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
			<HeaderLogo header_logo={header_logo} />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
			<div class="navbar-collapse collapse w-100" id="navbarsExample11">
				<HeaderNavigation menu_items={menu} />
				<HeaderContact phone={phone} phone_link={phone_link} phone_icon={phone_icon}/>
			</div>
		</nav>
	</div>
    );
};
  
export default Header;
