alert("Bem vindo Busca CEP");
$(function(){
    $(".cep").hide();
    
    $(".progreso_barra").hide();
    
});

function consulta_Cep(){
    var cep=document.getElementById("txt_cep").value;
    var url="https://viacep.com.br/ws/"+cep+"/json"
    
    $.ajax({
        url:url,
        type:'Get',
        success:function(response){
            console.log(response);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);

            $("#txt_cep_numero").html("CEP:" +response.cep);
            $(".cep").show();
            
            //document.getElementById("logradouro").innerHTML=response.logradouro;
            //document.getElementById("bairro").innerHTML=response.bairro;
            //document.getElementById("uf").innerHTML=response.uf;
           
        }
    })
}


