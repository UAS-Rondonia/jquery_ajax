function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    console.log(url);
   
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + cep);
            $(".cep").show();
            $(".barra-progresso").hide();

            /* Este Javascript não funcionou
            document.getElementById("logradouro").innerHTML = reponse.logradouro;
            document.getElementById("bairro").innerHTML = reponse.bairro;
            document.getElementById("localidade").innerHTML = reponse.localidade;
            document.getElementById("uf").innerHTML = reponse.uf;
            */
            //alert(response.logradouro)
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})