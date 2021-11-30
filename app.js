$(document).ready(function(){
    var qty = 1;
    var max= 9999;

    $(".noirContainer").click(function(){
        $(".violetContainer").css("border", "none");
        $(this).css({"border": "1px","border-color": "#3c3c3c","border-style": "solid"});
        $(".colorType").text("Noir");
        $(".productFeature1").css({"background":"url(images/noir.jpg)","background-repeat": "no-repeat","background-position": "top",
                                    "background-size": "cover",
                                    "min-height": "100%",
                                    "max-width": "100%"});
    });
    $(".violetContainer").click(function(){
        $(".noirContainer").css("border", "none");
        $(this).css({"border": "1px","border-color": "#3c3c3c","border-style": "solid"});
        $(".colorType").text("Violet");
        $(".productFeature1").css({"background":"url(images/violet.jpg)","background-repeat": "no-repeat","background-position": "top",
                                    "background-size": "cover",
                                    "min-height": "100%",
                                    "max-width": "100%"});
    });

    $(".tpetitContainer").click(function(){
        $(".sizeType").text("T.PETIT");
        $(this).css({"border": "1px","border-color": "#999","border-style": "solid"});
        $(".petitContainer").css("border", "none");
        $(".moyenContainer").css("border", "none");
        $(".grandContainer").css("border", "none");
        $(".tgrandContainer").css("border", "none");
    });
    $(".petitContainer").click(function(){
        $(".sizeType").text("PETIT");
        $(this).css({"border": "1px","border-color": "#999","border-style": "solid"});
        $(".tpetitContainer").css("border", "none");
        $(".moyenContainer").css("border", "none");
        $(".grandContainer").css("border", "none");
        $(".tgrandContainer").css("border", "none");
    });
    $(".moyenContainer").click(function(){
        $(".sizeType").text("MOYEN");
        $(this).css({"border": "1px","border-color": "#999","border-style": "solid"});
        $(".petitContainer").css("border", "none");
        $(".tpetitContainer").css("border", "none");
        $(".grandContainer").css("border", "none");
        $(".tgrandContainer").css("border", "none");
    });
    $(".tgrandContainer").click(function(){
        $(".sizeType").text("T.GRAND");
        $(this).css({"border": "1px","border-color": "#999","border-style": "solid"});
        $(".petitContainer").css("border", "none");
        $(".moyenContainer").css("border", "none");
        $(".grandContainer").css("border", "none");
        $(".tpetitContainer").css("border", "none");
    });
    $(".grandContainer").click(function(){
        $(".sizeType").text("GRAND");
        $(this).css({"border": "1px","border-color": "#999","border-style": "solid"});
        $(".petitContainer").css("border", "none");
        $(".moyenContainer").css("border", "none");
        $(".tpetitContainer").css("border", "none");
        $(".tgrandContainer").css("border", "none");
    });
     
    $(".right").click(function(){
      if(qty<max){
          qty++;
          $(".number").text(qty);
      }
    });

    $(".left").click(function(){
        if(qty!==0){
            qty--;
            $(".number").text(qty);
        }
      });

      $(".addButton").click(function(){
        var color= $(".colorType").html();  
        var size= $(".sizeType").html();
        
        if(size==='Sélectionner' || qty===0 ){
            alert("Erreur! Veuillez remplir tous les champs svp!!!!");
        }else{
            console.log("Doudoune "+color+", de taille "+size+"E et de quantité égale à "+qty);
        }
        
      });
  });
