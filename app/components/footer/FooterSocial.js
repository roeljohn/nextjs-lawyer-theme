const FooterSocial = ({ social_media }) => {
    return (
        <div class="col-md-3">
            <h1>Social</h1>
            <div class="d-flex justify-content-between">
                {social_media && social_media.map((social, index) => (
                     <div key={index} className="pr-3">
                        <a href="#">
                            <i className={social.social_icon}></i>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
  
export default FooterSocial;