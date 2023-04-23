import Component1 from "../1_HomePage/Component1";
import EducationComponent from "./EducationComponent";
import Range from './Range';
import Video from '../10_images/MotivationalVideo.mp4';
import Footer from "../../Footer";

function Resume() {
    return (
        <div class="bg-dark">
            <Component1 />
            <p class="text-muted text-center">Check out my Resume</p>
            <h1 class="text-light text-center">Resume</h1>
            <div class="row">
                <div class="col-6 ms-5">
                    <h2 class="text-light">Education</h2>
                    <EducationComponent education="EEE" year="2017" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae." />
                    <EducationComponent education="HS" year="2017" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae." />
                    <EducationComponent education="SSLC" year="2017" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae." />
                </div>

                <div class="col-5 ms-5">
                    <h2 class="text-light">Experience</h2>
                    <EducationComponent education="Tech Trainer" year="2023" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae." />
                    <EducationComponent education="Aptitude Trainer" year="2017" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae." />
                    <EducationComponent education="Lab Asst.," year="2017" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae." />
                </div>
            </div>

            <p class="text-muted ms-5">My level of knowledge in some tools</p>
            <h1 class="text-light  ms-5">My Skills</h1>
            <div class="row  ms-4 mb-5">
                <div class="col-6">
                    <Range sub="HTML/CSS" range="70" />
                    <Range sub="JS" range="80" />
                    <Range sub="BS" range="30" />
                </div>
                <div class="col-6">
                    <Range sub="React" range="90" />
                    <Range sub="Express" range="100" />
                    <Range sub="Node" range="35" />
                </div>
            </div>

            <div class="row my-4">
                <div class="col-12 col-xxl-5 mx-auto my-auto">
                    <h3 class="text-light">Take a tour of my office</h3>
                    <p class="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</p>
                </div>
                <div class="col-12 col-xxl-6 mt-5 ps-5 ms-5">
                    <video src={Video} autoPlay muted loop controls height="300">
                    </video>
                </div>
            </div>

            <Footer />
        </div>
    );

}
export default Resume;
