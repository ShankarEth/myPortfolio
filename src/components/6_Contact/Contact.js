import Component1 from "../1_HomePage/Component1";

function Contact() {
    return (
        <div class="bg-dark" style={{ height: "120vh" }}>
            <Component1 />
            <h3 class="text-light text-center">Feel free to contact me anytimes</h3>
            <h1 class="text-light text-center">Get in Touch</h1>


            <div class="row my-4">
                <div class="col-xxl-7 my-auto">
                    <h2 class="text-light ms-3">Message Me</h2>
                    <form>
                        <div class="row">
                            <div class="col-6 ms-3 my-1">
                                <input class="form-control" placeholder="Name" type="text" />
                            </div>
                            <div class="col-5 my-1">
                                <input class="form-control" placeholder="Email" type="email" />
                            </div>
                            <div class="col-11 ms-3 my-1">
                                <input class="form-control" placeholder="Subject" type="text" />
                            </div>
                            <div class="col-11 ms-3 my-1">
                                <textarea class="form-control" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button class="btn btn-success btn-md ms-3 my-4">Send Message</button>
                    </form>
                </div>

                <div class="col-xxl-4 mx-3">
                    <h3 class="text-light">Contact Info</h3>
                    <p class="text-light">Always available for freelance work if the right project comes along, Feel free to contact me!</p>                    
                    <ContactDetails details="Name" detailsValue="Shankar" />
                    <ContactDetails details="Email" detailsValue="shankar@gmail.com" />
                    <ContactDetails details="Call" detailsValue="9876543210" />
                    <ContactDetails details="Location" detailsValue="Salem,TamilNadu" />
                </div>
            </div>
        </div>
    );
}

export function ContactDetails(props) {
    return (
        <div>
            <h4 class="text-light">{props.details}</h4>
            <p class="text-light">{props.detailsValue}</p>
        </div>
    );
}
export default Contact;