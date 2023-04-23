import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import CarouselContent from './CarouselContent.js';
function Carousel() {
    return (
        <div id="demo" class="carousel slide m-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h3 class="text-light">Good job</h3>
                </div>
                <CarouselContent desc="Nice work" />
                <CarouselContent desc="Impressive" />
                <CarouselContent desc="Thanks for support" />
            </div>
            <br/><br/>
            <div class="carousel-indicators mt-4">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            </div>
        </div>
    );
}
export default Carousel;