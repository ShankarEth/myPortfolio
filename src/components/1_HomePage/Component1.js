import { Link } from 'react-router-dom';
import logo from '../10_images/logo.png';
function Component1() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/myPortfolio">
          <img src={logo} alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
          <span class="text-warning ms-2">Shankar</span>
        </Link>
        <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/about" class="nav-link text-light">About</Link>
            </li>
            <li class="nav-item">
            <Link to="/resume" class="nav-link  text-light">Resume</Link>
            </li>
            <li class="nav-item">
            <Link to="/portfolio1" class="nav-link text-light">Portfolio</Link>
            </li>
            <li class="nav-item">
            <Link to="/blog" class="nav-link text-light">Blog</Link>
            </li>
            <li class="nav-item">
            <Link to="/contact" class="nav-link text-light">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Component1;