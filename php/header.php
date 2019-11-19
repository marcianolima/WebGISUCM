<!--==========================
      Barra Institucional
    ============================-->
<section id="topbar">
    <div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;" class="fixed-top">
        <ul id="menu-barra-temp" style="list-style:none">
            <li style="display:inline; float:left; padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED">
                <a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a>
            </li>
        </ul>
    </div>
</section>
<!-- Navbar  ff6600 -->
<nav class="navbar navbar-expand-lg navbar-dark border-bottom sticky-top" style="margin-top: 0px; background:#07457E; font-family: Arial, Helvetica, sans-serif; font-size: 18px; padding: 4px;">

    <!-- Logo IMG -->
    <a class="navbar-brand" href="#">
        <img src="../src/img/logo_UCM_2019.png" width="53" height="42" alt="">
    </a>

    <!-- Logo Texto Completo -->
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 scrollto d-none d-sm-block">
        <li class="nav-item active">
            <a class="nav-link" href="#">
                <span class="font-weight-bold"><strong>UFPR </span><span style="color: #DDB581;">CampusMap</span></strong>
            </a>
        </li>
    </ul>

    <!-- Logo Texto Mobile -->
    <ul class="navbar-nav mr-auto mt-1 mt-lg-1 scrollto d-block d-sm-none">
        <li class="nav-item active" style="font-size: 24px;">
            <a class="nav-link" href="#">
                <span class="font-weight-bold"><strong>U</span><span style="color: #DDB581;">CM</span></strong>
            </a>
        </li>
    </ul>

    <button class="btn btn-info" id="menu-toggle" style="background: #0b6dc6";>Apps</button>


    <!-- Parte toogler -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>


    <!-- Escolha Campus -->
    <div class="navbar-collapse collapse in" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

            <!-- Level one dropdown -->
            <li class="nav-item dropdown" id="liCampus">
                <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle active">Campus</a>
                <ul aria-labelledby="dropdownMenu1" class="dropdown-menu border-0 shadow">

                    <!-- Level two dropdown CURITIBA-->
                    <li class="dropdown-submenu">
                        <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">UFPR Curitiba</a>
                        <ul aria-labelledby="dropdownMenu2" class="dropdown-menu border-0 shadow">
                            <li><a tabindex="-1" href="#" class="dropdown-item" data-value="1">Cabral</a></li>
                            <li><a href="#" class="dropdown-item" data-value="2">Centro Politécnico</a></li>
                            <li><a href="#" class="dropdown-item" data-value="3">Jardim Botânico</a></li>
                            <li><a href="#" class="dropdown-item" data-value="4">Juvevê</a></li>
                        </ul>
                    </li>
                    <!-- End Level two -->

                    <li class="dropdown-divider"></li>
                    <!-- Level two dropdown LITORAL-->
                    <li class="dropdown-submenu">
                        <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle disabled">UFPR Litoral</a>
                        <ul aria-labelledby="dropdownMenu2" class="dropdown-menu border-0 shadow">
                            <li>
                                <a tabindex="-1" href="#" class="dropdown-item">Level 2</a>
                            </li>
                            <li><a href="#" class="dropdown-item">level 2</a></li>
                            <li><a href="#" class="dropdown-item">level 2</a></li>
                        </ul>
                    </li>
                    <!-- End Level two -->

                    <li class="dropdown-divider"></li>
                    <!-- Level two dropdown NORTE-->
                    <li class="dropdown-submenu">
                        <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle disabled">UFPR Norte</a>
                        <ul aria-labelledby="dropdownMenu2" class="dropdown-menu border-0 shadow">
                            <li>
                                <a tabindex="-1" href="#" class="dropdown-item">Level 2</a>
                            </li>
                            <li><a href="#" class="dropdown-item">level 2</a></li>
                            <li><a href="#" class="dropdown-item">level 2</a></li>
                        </ul>
                    </li>
                    <!-- End Level two -->

                    <li class="dropdown-divider"></li>
                    <!-- Level two dropdown SUL-->
                    <li class="dropdown-submenu">
                        <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle disabled">UFPR Sul</a>
                        <ul aria-labelledby="dropdownMenu2" class="dropdown-menu border-0 shadow">
                            <li>
                                <a tabindex="-1" href="#" class="dropdown-item">Level 2</a>
                            </li>
                            <li><a href="#" class="dropdown-item">level 2</a></li>
                            <li><a href="#" class="dropdown-item">level 2</a></li>
                        </ul>
                    </li>
                    <!-- End Level two -->
                </ul>
            </li>
            <!-- End Level one -->
        </ul>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">




            <!-- Barra de pesquisa -->
            <form class="form-inline">
                <input class="form-control mr-sm-2 leaflet-control-geocoder" type="search" placeholder="Procurar..." aria-label="Search">
                <button class="btn btn-outline-info my-2 my-sm-0 leaflet-control-geocoder" style="background-color: white;">
                        <i class="fa fa-search text-dark" aria-hidden="true"></i>
                     </button>
            </form>

            <!-- Menu usuario -->


            <?php
                if(isset($_SESSION['logged_in']) && $_SESSION['logged_in']==true && $_SESSION['access_level']=='Customer'){
            ?>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Usuário
                      </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Login</a>


                        <a class="dropdown-item" href="#">Ajuda</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href='<?php echo $home_url ."logout.php"; ?>'>Sair</a>
                    </div>
                </li>


                <?php 
                } else { 
            ?>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Usuário
                          </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href='<?php echo $home_url . "login.php"; ?>'>Login</a>


                        <a class="dropdown-item" href="" data-toggle="modal" data-target="#modalLoginForm">Ajuda</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item disabled" href="#">Sair</a>
                    </div>
                </li>

                <?php
                }
            ?>

        </ul>



    </div>
    <!-- Fim da parte Toogle -->




</nav>