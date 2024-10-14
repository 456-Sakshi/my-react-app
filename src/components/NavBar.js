
function NavBar() {
  return (
    
    <div className="navbar ">
        <nav class="navbar  navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="App.js">TaskRabbit</a>
        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="App.js">Home <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Profile.js">Profile</a>
                </li>
            </ul>
        </div>
    </nav>

    </div>
    
  );
}

export default NavBar;
