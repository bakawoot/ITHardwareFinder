<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proci</title>
    <link rel="stylesheet" type="text/css" href="../include/style.css" />
</head>
<body>
    <style>
	       <?php include 'include/style.css';?>
    </style>
    

    <?php include 'navbar.php';?>
    <div class="tartalom_formazas">
        <div class="kereso">
        <?php include 'products.php';?>
        <?php include 'sidebar.php';?>
        <?php include 'content.php';?>
        </div>
    </div>
<?php include 'footer.php';?>

<script src="include/sidebar.js"></script>

</body>
</html>
