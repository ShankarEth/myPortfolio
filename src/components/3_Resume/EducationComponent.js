function EducationComponent(props) {
    return (
        <div style={{ borderLeft: "10px solid green", minHeight: "40px", minWidth:"100px", paddingLeft:"20px"}}>
            <h2 class="text-light">{props.education}</h2>
            <h4  class="text-light">{props.year}</h4>
            <p  class="text-light">{props.desc}</p>
        </div>
    );
}
export default EducationComponent;