
"use client";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import FooterAddress from "../components/footer/FooterAddress";
import FooterContact from "../components/footer/FooterContact";
import FooterCopyright from "../components/footer/FooterCopyright";
import FooterDescriptionLogo from "../components/footer/FooterDescriptionLogo";
import FooterSocial from "../components/footer/FooterSocial";
import useApiStore from "../lib/store";


// components/Footer.js
const Footer = () => {
	const { data, isLoading, error, fetchData } = useApiStore();
	const footer_about = data?.acf?.footer_about;
	const address = data?.acf?.address;
	const social_media = data?.acf?.social_media;
	const copyright = data?.acf?.copyright;
	const footer_logo = data?.acf?.footer_logo;
    return (
        <div class="container-fluid p-4-10 footer">
		<div class="container">
			<div class="row  pb-5">
				<FooterDescriptionLogo footer_about={footer_about} footer_logo={footer_logo} />
				<FooterAddress address={address} />
				<FooterContact />
				<FooterSocial social_media={social_media}/>
			</div>
			<div class="row">
				<hr class="col-md-12"/>
			</div>
			<FooterCopyright copyright={copyright} />
		</div>
	</div>
    );
};
Footer.PropTypes = {
	data: PropTypes.shape({
	  acf: PropTypes.shape({
		address: PropTypes.string.isRequired,
		// Add more PropTypes for other properties if needed
	  }).isRequired,
	})
};

export default Footer;