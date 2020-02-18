$("ul").on("click", "li", function (e) { 
    e.preventDefault();
    $(this).toggleClass('completed');
});

$("ul").on("click", "span", function (e) { 
    e.preventDefault();
    $(this).parent().fadeOut(500, function(e){  
        $(this).remove();
    });
   e.stopPropagation(); 
});

$("input[type='text']").keypress(function (e) { 
    if (e.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function (e){
    $("input[type='text']").slideToggle("fast");
});