$(document).ready(function(){
    $("#sujet").hide();

    $(".valNom").click(function(){
        var nom = document.getElementById("leNom").value;
        var x0 = Math.floor(Math.random() * 21) + 10;
        var x1 = Math.floor(Math.random() * 21) + 10;
        var x2 = Math.floor(Math.random() * 21) + 10;
        $("#valxi").html(
        "Bonjour " + nom + ", voici votre sujet personnalisé à résoudre sous Jupyter notebook. " +
        "<br>Vous deposerez ensuite votre notebook rempli sous SAVOIR au format pdf (utilisez File/Print Preview)."
        );
        $("#sujet").show();


        $("#valEx1").html(x0);
        
        $("#valEx2").html(x1);

        $("#valEx3").html(x2);

        $("#valEx4").html(x0);
        $("#valEx4b").html(x1);
        $("#valEx4c").html(x0);
        $("#valEx4d").html(x0);
        $("#valEx4e").html(x0);
        $("#valEx4f").html(x0);

        $("#valEx5").html(x0);
        $("#valEx5b").html(2*x1);

        $("#valEx6").html(7+x0);
        $("#valEx6").html(7+x0);
        $("#valEx6b").html(x1/2);
        $("#valEx6c").html((x0-x1)/5);

        $("#valEx7").html(x0);
        $("#valEx7b").html(x1);

        $("#valEx8").html(x0);
        $("#valEx8b").html(x1);
        $("#valEx8c").html(x1+0.5);
        $("#valEx8d").html(6*x0);
        $("#valEx8e").html(5/(2*x0));
    });
});