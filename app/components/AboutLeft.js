import DOMPurify from 'dompurify';


const AboutLeft = ({ link, content, imageId }) => {
    

    return (
            <>
                <div class="col-md-6 mb-5 pr-4">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
                    <a href={link} class="btn brand-btn-primary-outline btn-lg rounded-0">Read More</a>
                </div>
                <div class="col-md-6 mb-5">
                    <img class="img-fluid" src="img/about-1.jpg"/>
                </div>
            </>
    );
};
  
export default AboutLeft;