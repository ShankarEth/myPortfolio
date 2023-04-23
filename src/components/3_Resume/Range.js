import '../../App.css';
function Range({sub,range}) {
return (
    <div class="mx-4">
        <p class="text-light">{sub}<span class="ms-5">{range}%</span></p>
        <div class="mb-3" style={{ minWidth: '100px',minHeight:'10px',background: `linear-gradient(to right,green ${range}%,red ${100-range}%)`}}></div>
    </div>
);
}
export default Range;