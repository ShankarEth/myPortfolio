import logo from '../10_images/logo.png';
function Component1() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="Portfolio/home">
          <img src={logo} alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
          <span class="text-warning ms-2">Shankar</span>
        </a>
        <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="/about" class="nav-link text-light">About</a>
            </li>
            <li class="nav-item">
              <a href="/resume" class="nav-link  text-light">Resume</a>
            </li>
            <li class="nav-item">
              <a href="/portfolio1" class="nav-link text-light">Portfolio</a>
            </li>
            <li class="nav-item">
              <a href="/blog" class="nav-link text-light">Blog</a>
            </li>
            <li class="nav-item">
              <a href="/contact" class="nav-link text-light">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Component1;