
 $(document).ready(function()
 {
 	var top;
 	var menu_array = Array("item_1", "item_2", "item_3", "item_4", "item_5", "item_6", "item_7",  "item_8");
 	var cont_array = Array("#one","#two","#three","#four","#five","#six","#seven","#eight")
 	$("p").click(function Scroll_To_Selected(){
 		var id = this.id;
 		for (var i = 0; i <= 7; i++) {
 			if(id == menu_array[i])	{	
 				var x = $(cont_array[i]).position();
 				top = x.top;	
 				window.scrollTo(0, top);
 			}
 		}
 		return top;
 	});
     
 	//menu scroll selected:
 	$(".menu_item").click(function Auto_Scroll_Menu(){
 		$(this).addClass("menu_selected");
 		$(".menu_item").not(this).removeClass("menu_selected");
 		var curent_position = $(this).position();
 		var top_cur_pos = $("#menu").scrollTop();
 		if(curent_position.top > 30)
 		{
 			var k =(curent_position.top - 30)+top_cur_pos;
 			$("#menu").scrollTop(k);
 		}
 		else if(curent_position.top < 30){
 			k = top_cur_pos-(30 - curent_position.top);
 			$("#menu").scrollTop(k);
 			$(this).addClass("menu_selected");
 		}	
  	});

 });




 //to menu scroll---set scroll to 0 position
$(document).ready(function(){
                        $("#menu").scrollTop(0);
 });


/*mail button*/
$(document).ready(function(){

	function validateForm() {
    var x = document.forms["mailForm"]["userEmailPartOne"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
$("#goToEmailForm, .emailInfo").click(function OnClickMailButton(){
                        $(".mailForm").css({"display": "block"});
                        $(".form-control").val("");
                        var m = $("#row3").position();
                        window.scrollTo(0, m.top);
});
$("#sendButton").click(function OnClickSendButton(){
                        $(".mailForm").css({"display": "none"});
});
$("#goBackButton").click(function (){
						$(".mailForm").css({"display": "none"});
});
//    $(".form-control").click(function(){
//    $(".form-control").val("");
//});
});
























