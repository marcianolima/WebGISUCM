<?php
//  session_start();
    ini_set('include_path', '/var/www/html/usuarios');
    include_once "../../usuarios/config/core.php";
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <!-- meta http-equiv="X-UA-Compatible" content="IE=edge" -->
    <title>UFPR CampusMap</title>
    <!-- habilitando o dimensionamento responsivo -->
    <!-- meta content="width=device-width, initial-scale=1.0" name="viewport" / -->
    <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">

    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />

    <!-- Numero institucional UFPR 428-->
    <meta property="creator.productor" content="http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/428">

    <?php include ('css_required.php'); ?>

</head>
<body>
<?php include ('js_required.php'); ?>
<?php include ('js_plugins.php'); ?>
<?php include ('modals.php'); ?>
<?php include ('header.php'); ?>
<?php include ('sidebar.php'); ?>
<?php include ('js_scripts.php'); ?>
<?php include ('footer.php'); ?>

</body>
</html>