import DOMPurify from 'dompurify';
import useApiStore from '../lib/store';
import AboutLeft from '../components/AboutLeft';

const HomeAbout = ( { pages } ) => {
    const { pageImg, isPageImgLoading, errorPageImg, fetchDataPageImage } = useApiStore();

    const fetchImageUrl = async (pageId) => {

        fetchDataPageImage(`https://api.local/wp-json/wp/v2/media/${pageId}`);
  

    };
    return(
<div class="container about">
<h1 class="text-center p-5" >ABOUT US</h1>
<div class="row">
            {pages && pages.map((page, index) => {
                fetchImageUrl(page.featured_media);
                console.log(pageImg)
                return(
                <>
                {index === 0 ? (
                    <>
                        <div class="col-md-6 mb-5 pl-4">
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
                );
})}


</div>
</div>
    );
};
  
export default HomeAbout;