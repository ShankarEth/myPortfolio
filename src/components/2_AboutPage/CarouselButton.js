function CarouselButton(props){
    return <button type="button" data-bs-target="#demo" data-bs-slide-to={`${props.number}`}></button>
}
export default CarouselButton;