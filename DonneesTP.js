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


        $("#valEx1").html(x0-10);
        $("#valEx1b").html(x1+5);
        
        $("#valEx2").html(x0);
        $("#valEx2b").html(x0);
        $("#valEx2c").html(x0);
        $("#valEx2d").html(x0);
        $("#valEx2e").html(x1);
        $("#valEx2f").html(x1);
        $("#valEx2g").html(x1);
        $("#valEx2h").html(x1);

        $("#valEx3").html(x0);
        $("#valEx3b").html(x1);

        $("#valEx4").html(x0);
        $("#valEx4b").html(x1);
        
        $("#valEx5").html(x1/10);
        $("#valEx5b").html(x0);

        $("#valEx6").html(x1);
        $("#valEx6b").html(Math.abs(x0-x1))
        $("#valEx6c").html(x0/(100+x1));
        $("#valEx6d").html(x0/(100+x1));
    });
});