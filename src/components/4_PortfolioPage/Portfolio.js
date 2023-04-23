import PortfolioCard from "./PortcolioCard";
import Component1 from '../1_HomePage/Component1';
import logo from '../10_images/portfolioImage.jpg';
function Portfolio() {
    return (
        <div class="bg-dark">
            <Component1 />
            <h4 class="text-muted text-center ">Showcasing some of my best work</h4>
            <h1 class="text-light text-center">Portfolio</h1>
            <div class="m-3 text-primary">
                <div class="row ms-4">
                    <PortfolioCard link="https://shankarnarayanm.github.io/dummy1/" pic={logo} desc="Product1"/>
                    <PortfolioCard link="https://shankarnarayanm.github.io/demo1/"  pic={logo} desc="Product2"/>
                    <PortfolioCard link="https://shankarnarayanm.github.io/dummy1/" pic={logo} desc="Product3"/>
                    <PortfolioCard link="https://shankarnarayanm.github.io/demo1/" pic={logo} desc="Product4"/>
                    <PortfolioCard link="https://shankarnarayanm.github.io/dummy1/" pic={logo} desc="Product5"/>
                    <PortfolioCard link="https://shankarnarayanm.github.io/demo1/" pic={logo} desc="Product6"/>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;