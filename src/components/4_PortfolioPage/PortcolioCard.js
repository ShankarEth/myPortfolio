import '../../App.css';
function PortfolioCard(props) {
    return (
        <div class="col-xs-12 col-sm-4 col-md-3 col-xxl-3 ms-5 ps-5">
            <a href={`${props.link}`}>
            <p style={{ backgroundImage: `url(${props.pic})`, backgroundRepeat: 'no-repeat', minHeight: '300px', minWidth: '100px' }}></p>
            </a>
        </div>
    );
}
export default PortfolioCard;