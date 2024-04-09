
const FooterDescriptionLogo = ({ footer_about, footer_logo }) => {
    return (
        <div class="col-md-3">
            <img class="img-fluid d-block mx-auto logo" src={footer_logo}/>
            <p>{footer_about}</p>
        </div>
    );
};
  
export default FooterDescriptionLogo;