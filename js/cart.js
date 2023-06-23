$(function(){
    /* Button for adding cart */
    $(document).on("click",".btn-add",function(){
        var btnID=$(this).attr("value");
        var btnID1=$(this).attr("id");
       //document.getElementById(btnID1).classList.toggle('active');
       var btn_text=$("#"+btnID1).html();
       if(btn_text=="Add to Cart"){
            $("#"+btnID1).css('backgroundColor','#009933');
           $(".buttons"+btnID1).css("display","block");
           var aleat=$(".buttons"+btnID1).attr("value");
            var cartVal= $(".num_c").html();
            var addCart=Number(cartVal)+1;
            $(".num_c").html(" "+addCart);
            $("#"+btnID1).fadeOut();
            $("#item-list").append('<ul id="list'+addCart+'" class="list"><li>'+btnID+''+
            '<span id='+addCart+' class="fa fa-times-circle text-danger rm_item"></span></li></ul>')
            /* Swal.fire({
                title: '',
                icon:'success',
                html:
                '<div class=text_message><b>This Item ' +btnID+ ' has been added to your cart</b></div>',
                showCloseButton: true,
                confirmButtonText:
                '<a href=javascript:void(0); class=btn_continue>Continue shopping</a>',
                confirmButtonColor:'#dc3545',
            }) */
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: "<div class='text-success'>" +btnID+ " has been added to your cart successfully <span class='fa fa-check-circle text-success'></span></div>",
              });
       }
       else{
            //document.getElementById(btnID1).innerHTML='Add Item';
            $("#"+btnID1).css('backgroundColor','#ec5a2f');
            var cartVal= $(".num_c").html();
            if(cartVal!=0){
                var addCart=Number(cartVal)-1;
                $(".num_c").html(" "+addCart);
                $("#list"+addCart).remove();
                const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: "<div class='text-danger'>" +btnID+ " has been removed from your cart <span class='fa fa-trash-alt text-danger'></span></div>",
              });
            }
       }
    })
   /*  $(document).on('click','.rm_item',function(){
        var cartVal= $(".num_c").html();
        if(cartVal!=0){
            var addCart=Number(cartVal)-1;
            $(".num_c").html(" "+addCart);
            var item_ID=$(this).attr("id");
            $("#list"+item_ID).remove();
            document.getElementById("add-item"+item_ID).innerHTML='Add Item';
            $("#add-item"+item_ID).css('backgroundColor','#ec5a2f');
        }
        if(cartVal==1){
            $("#item-list").html("No item available for checkout !!! Kindly select a product to continue shopping");
            $(".btn_contn").html("Close");
            $(".item_header").fadeOut();
            $("btn_contn").css('backgroundColor','#009933');
        }
    }) */
    /* Button for incrementing or decreasing the quantity of item */
    $(document).on('click','.btn-qty',function(){
        var qty_btn=$(this).attr("id");
        var btn_sign=$("#"+qty_btn).html();
        var btn_id=$(this).attr("data-id");
        var textVal=$("#text-value"+btn_id).attr("id");
        var i=0;
        if(btn_sign=="+"){
            i++;
            var text_val=$("#"+textVal).val();
            if((text_val<10)){
                var check=Number(text_val)+i;
                $("#"+textVal).val(check);
            }
        }
        else{
            var text_val=$("#"+textVal).val();
            if(!(text_val<=0)){
                i--;
                var check=Number(text_val)+i;
                $("#"+textVal).val(check);
            }
        } 
    })
    /*******************************Modal Checkout**************************************/
    //const modal_check=document.querySelector("#checkouts");
    const modal_check=document.getElementById("cart-box");
    modal_check.addEventListener('click',function(){
        $('#modal_checkout').modal('show');
    });

});
