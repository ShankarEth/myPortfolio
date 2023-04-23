function Cards(props) {
    return (
        <div class="mx-1 my-3 bg-secondary" style={{ width: "18rem",padding:"10px" }}>
            <i class={`fa-solid fa-2xl ${props.style1}`}></i>
            <div class="mt-3">
                <h5 class="">{props.title}</h5>
                <p class="">{props.desc}</p>
            </div>
        </div>
    );
}
export default Cards;