<?php 
    $num = count(glob("images/" . "*"));
    $imgCount= $num;

    for($i=0;$i<$imgCount;$i++){
        $prodName=array("Seater cushion","Executive Cushion","Classic chairs","3D soft cushion","flying Seater","Modern Cushion");
        $price=array("150","450","200","350","500","250");
        $slideOption=array("bounceInRight","slideInLeft","slideInDown","bounceInUp","rotateIn","bounceInDown");
        @$productImage.="<div class='product wow $slideOption[$i]' data-wow-duration='5s'>
        <img src='images/ch$i.jpg' alt='$prodName[$i]' class='img1'>
        <div class='p-desc'> $prodName[$i]</div>
        <div class='p-desc price'><s style='text-decoration-style:double'>N</s>$price[$i]</div>
        <div class='add-bar'>
            <span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>
            <span class='fa fa-star-half-alt'></span>
            <div class='buttons$i' style='display:none' value='Hello$i'>
                <button type='button' class='btn-qty' id='minus$i' name='minus$i' data-id='$i'>-</button>
                <input type='text' value='0' id='text-value$i' class='qty-option'>
                <button type='button' class='btn-qty' id='plus$i' name='plus$i' data-id='$i'>+</button>
            </div>
            <button type='button' class='btn-add' id='$i' name='$i' value='$prodName[$i]'>Add to Cart</button>
        </div>
    </div>";
}
/* <button type='button' class='btn-qty' id='minus$i' name='minus$i' data-id='$i'>-</button>
            <input type='text' value='0' id='text-value$i' class='qty-option'>
            <button type='button' class='btn-qty' id='plus$i' name='plus$i' data-id='$i'>+</button> */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping cart</title>
    <link rel="stylesheet" href="css/style2.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="fontawesome-free/css/all.min.css" type="text/css">
    <link rel="stylesheet" href="css/sweetalert2.css">
    <script src="js/sweetalert2.all.min.js"></script>
    <script src="js/sweetalert.min.js"></script>
    <link rel="stylesheet" href="css/animate.css">
    <link rel="icon" type="image/png" sizes="32x32" href="img/shopping_cart.png">
</head>
<body>
    <div class="container">
        <div class="flex-container">
            <h1>My shopping cart <i class="fa fa-cannabis"></i></h1>
            <div class="basket"><span class="fa fa-search"></span><span class="fa fa-user-cog"></span>
            <i class="fa fa-cart-plus" id="cart-box"><div class="num_c">0</div></i></div>
        </div>
        <div class="summary">Cart Summary</div>
        <div class="sub-total">
            <span>Sub Total</span>
            <span><s style='text-decoration-style:double'>N</s>5000</span>
        </div>
        <div class="product-flex">
            <?php echo $productImage; ?>
        </div>
    </div>
<footer>
    <div>
        Copyright &copy;  <span id="datte"></span> <i class="fa fa-heart" style="color:var( --text-danger);"></i> Whizkingpin Global Softwares Enterprise. All rights reserved.
    </div>
</footer>

<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script> 
<script src="js/cart.js"></script> 
<script src="js/format.js"></script> 
<script src="js/wow.min.js"></script>
<!-- <script type="text/javascript">new WOW().init();</script> -->
<?php include 'js/modals.php'; ?>
<script>const d=new Date(); document.getElementById("datte").innerHTML=d.getFullYear();</script>
</body>
</html>
