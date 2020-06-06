$(function(){
    $("button").on("click", function(){
        var url = "https://github.com/SB-74/Start/blob/99f44364831b2f6d1402e37541bc6039a55dda56/Textfile12.txt";
        $("div.main").load(url);
        alert("CLICK");

    });
});
