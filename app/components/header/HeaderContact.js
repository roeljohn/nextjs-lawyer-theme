const HeaderContact = ({ phone, phone_link, phone_icon }) => {
    return (
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
            <li class="nav-item phone-menu">
                <a class="nav-link" href="#"><i class={phone_icon}></i> {phone}</a>
            </li>
        </ul>
    );
};
  
export default HeaderContact;