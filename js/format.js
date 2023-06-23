const cartIcon=document.querySelector(".product-flex");
const hambuger=document.querySelector(".hambuger");
cartIcon.addEventListener("click", cart);
/* const btnQty=Array.from(getElementsByClassName("bty-qty")); */
 var productImage="";
 hambuger.addEventListener("click",()=>{
     $(".searchBar").slideToggle();
     $(".basket").slideToggle();
 })
for(let i=0;i<6;i++){
    let prodName=["Seater cushion","Executive Cushion","Classic chairs","3D soft cushion","flying Seater","Modern Cushion"];
    let price=["150","450","200","350","500","250"];
    let discount=["-5%","-3%","-10%","-4.5%","-8%","-7%"];
    let  slideOption=["bounceInRight","slideInLeft","slideInDown","bounceInUp","rotateIn","bounceInDown"];
    productImage +="<div class='product wow "+slideOption[i]+"' data-wow-duration='5s'>\
    <div class='discount'>"+discount[i]+"</div>\
    <img src='images/ch"+i+".jpg' alt='"+prodName[i]+"' class='img1'>\
    <div class='p-desc prodName'>" +prodName[i]+"</div>\
    <div class='p-desc price'><s style='text-decoration-style:double'>N</s>"+price[i]+"</div>\
    <div class='add-bar'>\
        <span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star-half-alt'></span>\
        <div class='buttons"+i+"' style='display:none' value='Hello"+i+"'>\
            <button type='button' class='btn-qty' id='"+i+"' name='minus"+i+"'>-</button>\
            <input type='text' value='1' id='text-value"+i+"' class='qty-option'>\
            <button type='button' class='btn-qty' id='"+i+"' name='plus"+i+"'>+</button>\
        </div>\
        <button type='button' class='btn-add' id='"+i+"' name='"+i+"' value='"+prodName[i]+"'>Add to Cart</button>\
    </div>\
</div>";
cartIcon.innerHTML=productImage;
}
/**************ADDING ITEM TO LOCAL STORAGE*******************/
function cart(e){
    e.preventDefault();
    const item=e.target;
    if(item.classList[0]==="btn-add"){
       const todo=item.parentElement;
       item.classList.toggle("active");
       let ItemValue=item.value;
       //localStorage.removeItem("stocks",item.value);
       if(item.innerText==="Added"){
            item.innerText="Add to Cart";
            item.style.display="none";
            $(".buttons"+item.id).fadeOut();
            var cartVal= $(".num_c").html();
            if(cartVal!=0){
                var addCart=Number(cartVal)-1;
                $(".num_c").html(" "+addCart);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: "<div class='text-danger'>" +item.value+ " has been removed from your cart <span class='fa fa-trash-alt text-danger'></span></div>",
              });
            }
              if(localStorage.getItem("stocks")=== null){
                stocks=[];
              }
              else{
                stocks=JSON.parse(localStorage.getItem("stocks"));
             }
              const todoIndex=todo.innerText;
              alert(todoIndex);
            //   stocks.splice(stocks.indexOf(todoIndex),1);
            //   localStorage.setItem("stocks",JSON.stringify(stocks));
        }
        else{
            let stocks;
            if(localStorage.getItem("stocks")=== null){
                stocks=[];
            }
            else{
                stocks=JSON.parse(localStorage.getItem("stocks"));
            }
            //stocks.push(ItemValue);
            localStorage.setItem("stocks",JSON.stringify(stocks));

            item.style.display="none";
            $(".buttons"+item.id).fadeIn();
            var cartVal= $(".num_c").html();
            var addCart=Number(cartVal)+1;
            $(".num_c").html(" "+addCart);

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: "<div class='text-success'>" +item.value+ " has been added to your cart successfully <span class='fa fa-check-circle text-success'></span></div>",
              });
        }
    }

    /**********INCREMENTING THE QUANTITY STOCK*************/
    if(item.classList[0]==="btn-qty"){
        const btnName=item.innerText;
        const textVal=$("#text-value"+item.id).val();
        var i=0;
        if(btnName=="+"){
            i++;
            if((textVal<10)){
                var check=Number(textVal)+i;
                $("#text-value"+item.id).val(check);
            }
        }
        else{
            i--;
            if(!(textVal<=1)){
                var check=Number(textVal)+i;
                $("#text-value"+item.id).val(check);
            }
        }
    }
}

/* $(document).ready(function(){
    $('#modal_checkout').modal('show');
}); */

var alerts="<div class='containers'>\
		<div class='row'>\
			<div class='col-md-12'>\
					<div class='modal fade' id='modal_checkout' tabindex='-1' data-backdrop='static' style='margin-top: 10%;'>\
						<div class='modal-dialog' >\
							<div class='modal-content'>\
								<div class='modal-header'>\
									<span class='modal-title'></span>\
								</div>\
								<div class='modal-body'>\
									<h4 class='text-center item_header'>You want to order for the following items</h4>\
									<div id='item-list'></div>\
								</div>\
								<div class='modal-footer'>\
									<button type='button' class='btn btn-warning btn_contn' data-dismiss='modal'>Continue Shopping</button>\
								</div>\
							</div>\
						</div>\
					</div>\
			</div>\
		</div>\
	</div>";
document.getElementById("alertM").innerHTML=alerts;
 const footer="<footer>\
 <div>\
     Copyright &copy;  <span id='datte'></span> &nbsp;&nbsp; <i class='fa fa-heart' style='color:var( --text-danger);'>\
     </i>&nbsp;&nbsp;Whizkingpin Global Softwares Enterprise. All rights reserved.\
 </div>\
 </footer>";
document.getElementById("footer").innerHTML=footer;
/* GET CURRENT DATE YEAR */
const d=new Date(); 
document.getElementById("datte").innerHTML=d.getFullYear();

/* const btnQty=Array.from(getElementsByClassName("bty-qty"));
    btnQty.map(button => {
        button.addEventListener('click',(e)=>{
            alert("clicked");
            alert(e);
            alert(e.target);
            alert(e.target.innerText);
        });
    }); */
