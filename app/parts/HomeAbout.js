import DOMPurify from 'dompurify';

const HomeAbout = ( { pages } ) => {
    return(
<div class="container about">
<h1 class="text-center p-5" >ABOUT US</h1>
<div class="row">
            {pages && pages.map((page, index) => (
                <>
                {index === 0 ? (
                    
                    <>
                        <div class="col-md-6 mb-5 pr-4">
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.content.rendered) }} />
                            <a href={page.link} class="btn brand-btn-primary-outline btn-lg rounded-0">Read More</a>
                        </div>
                        <div class="col-md-6 mb-5">
                            <img class="img-fluid" src="img/about-1.jpg"/>
                        </div>
                    </>
                 ) : (
                    <>
                        <div class="col-md-6 mb-5">
                            <img class="img-fluid" src="img/about-1.jpg"/>
                        </div>
                        <div class="col-md-6 mb-5 pl-4">
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.content.rendered) }} />
                            <a href={page.link} class="btn brand-btn-primary-outline btn-lg rounded-0">Read More</a>
                        </div>
                    </>
                )}
                </>
            ))}


</div>
</div>
    );
};
  
export default HomeAbout;