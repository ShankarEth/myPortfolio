import Footer from '../../Footer';
import myPic from '../10_images/About_Shankar.png';
import Component1 from '../1_HomePage/Component1';
import Cards from './Cards';
import Carousel from './Carousel';
import PlanCard from './PlanCard';
function About() {
    return (
        <div class="bg-dark">
            <Component1 />
            <div class="container">
                <h5 class="mt-3 text-muted text-center">Get to know me</h5>
                <h1 class="text-light text-center">About me</h1>
                <br />
                <div class="row">
                    <div class="col-12 col-xxl-5 ms-5 my-auto text-center">
                        <img class="ms-2 mt-2" src={myPic} alt="Loading" width="500px" />
                    </div>
                    <div class="col-11 col-xxl-6 mx-auto">
                        <p style={{ fontSize: "30px", fontWeight: "bold" }} class="text-success">Who am I?</p>
                        <h4 style={{ fontSize: "50px" }} class="text-light">I'm Shankar Narayan, Web Developer</h4>
                        <p style={{ fontSize: "20px"}} class="text-muted">I am a Technical trainer working in Bangalore and I have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                        <hr />
                        <div class="row mb-4">
                            <div class="col text-light">
                                Name: Shankar
                            </div>
                            <div class="col text-light">
                                Email: shankar@gmail.com
                            </div>
                        </div>

                        <div class="row mb-4">
                            <div class="col text-light">
                                Age: 28
                            </div>
                            <div class="col text-light">
                                Location: Bangalore
                            </div>
                        </div>

                        <button class="btn btn-lg btn-success">Download CV</button>
                        <span class="mx-3 text-muted" style={{ textDecorationLine: 'line-through', whiteSpace: "pre" }}>           </span>
                        <span>
                            <a href="#twitter" class="mx-2">
                                <i class="fa-brands fa-twitter fa-2xl text-info" ></i>
                            </a>
                            <a href="#twitter" class="mx-2">
                                <i class="fa-brands fa-facebook-f fa-2xl text-primary"></i>
                            </a>
                            <a href="#twitter" class="mx-2">

                                <i class="fa-brands text-info fa-linkedin-in fa-2xl"></i>
                            </a>
                            <a href="#twitter" class="mx-2">
                                <i class="fa-brands text-light fa-square-github fa-2xl"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <br /><br />
                <h4 class="text-muted mx-3">
                    Services I offer to my clients
                </h4>
                <h1 class="text-light mx-3">
                    My Services
                </h1>

                <div class="row mx-3">
                    <div class="col-sm-12 col-md-5 col-lg-4">
                        <Cards style1="fa-gamepad" title="Design Trends" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-4">
                        <Cards style1="fa-mug-saucer" title="PSD Design" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-4">
                        <Cards style1="fa-users" title="Customer Support" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-4">
                        <Cards style1="fa-handshake" title="Web Development" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-4">
                        <Cards style1="fa-arrow-pointer" title="Fully Responsive" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-4">
                        <Cards style1="fa-link" title="Branding" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    </div>
                </div>

                <h4 class="text-muted mx-3">
                    What my clients think about me
                </h4>
                <h1 class="text-light mx-3">Testimonials </h1>

                <Carousel />

                <h4 class="text-muted mx-3">
                    Get started with my services
                </h4>
                <h1 class="text-light mx-3">Choose a Plan </h1>

                <div class="row">
                    <PlanCard title="Standard" price="$19/month" desc1="Mobile App Design" desc2="Responsive Design" desc3="Database Development" desc4="Web Design" desc5="24/7 Support" btn="Get started" />
                    <PlanCard title="Professional" price="$29/month" desc1="Mobile App Design" desc2="Responsive Design" desc3="Database Development" desc4="Web Design" desc5="24/7 Support" btn="Get started" />
                    <PlanCard title="Business" price="$39/month" desc1="Mobile App Design" desc2="Responsive Design" desc3="Database Development" desc4="Web Design" desc5="24/7 Support"  btn="Get started" />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About;