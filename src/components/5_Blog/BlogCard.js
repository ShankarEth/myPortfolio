
function BlogCard(props) {
    return (
        <div class="col-md-5 col-xxl-4 mx-auto">
            <div class="mb-4">
                <img src={props.logo} width="450px" alt="..." />
                <p class="badge bg-success" style={{marginBottom:"-2px",maxWidth: "10em" }}>{props.date}</p>
            </div>
            <div class="bg-dark">
                <h5 class="text-light">{props.title}</h5>
                <p class="text-light">{props.desc}</p>
            </div>
        </div>
    );
}
export default BlogCard;