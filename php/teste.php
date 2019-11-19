<?php
phpinfo();
?>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark border-bottom sticky-top" style="margin-top: 0px; background:#0f21c5">

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="navbar-brand" href="#">
            <!-- img src="\\img\logo_UCM_2019.png" alt="" -->
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="#">UFPR CampusMap <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
            <button class="btn btn-primary" id="menu-toggle">Apps</button>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
             </button>
        <div class="navbar-collapse collapse in" id="navbarSupportedContent">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Campus
                      </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">UFPR Curitiba</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">UFPR Litoral</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">UFPR Sul</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">UFPR Norte</a>
                </div>
            </li>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link ml-auto" href="#">Usuário <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </ul>
</nav>