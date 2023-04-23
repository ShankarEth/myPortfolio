import myPic1 from '../10_images/logo.png';
function PlanCard(props) {
    return (
        <div class="card col-3 mx-auto my-3" style={{width: "18rem"}}>
            <img src={myPic1} class="card-img-top img-rounded" alt="..." />
                <div class="card-body">
                    <h3 class="card-title text-center">{props.title}</h3>
                    <h5 class="card-text text-center">{props.price}</h5>
                    <p class="card-text text-center">{props.desc1}</p>
                    <p class="card-text text-center">{props.desc2}</p>
                    <p class="card-text text-center">{props.desc3}</p>
                    <p class="card-text text-center">{props.desc4}</p>
                    <p class="card-text text-center">{props.desc5}</p>
                    <p style={{marginLeft:"65px"}} class="btn btn-primary">{props.btn}</p>
                </div>
        </div>
    );
}
export default PlanCard;