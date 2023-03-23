$(document).ready(function() {
    $.get('api/getsortielum', function(data) {
      if (data.IsOn) {
        $('#lumiere').text('Etat : '+data.IsOn +  ' La lumière est allumée.');
        $("#boutton_lum").text('Eteindre')
  
      } else {
        $('#lumiere').text('Etat : '+data.IsOn +  ' La lumière est éteinte.');
        $("#boutton_lum").text('Allumer')
      }
    });
  });
  

setInterval(function(){

    $(document).ready(function(){

$.get('/api/getsortietemp0', function(data) {
	$('#tempactuelle_salon').text('Température actuelle(salon) : ' + data.Temperature_actuelle + ' °C')})

$.get('/api/getsortietemp1', function(data) {
	$('#tempactuelle_chambre').text('Température actuelle(chambre) : ' + data.Temperature_actuelle + ' °C')})

$.get('/api/getcommandetemp0', function(data) {
	$('#consignetemp_salon').text('Température consigne actuelle(salon) : ' + data.Temperature_commandée + ' °C')})

$.get('/api/getcommandetemp1', function(data) {
	$('#consignetemp_chambre').text('Température consigne actuelle(chambre) :  ' + data.Temperature_commandée + ' °C')})
})

},10000)

setInterval(function(){

    $(document).ready(function(){
    $.get('/api/getcommandevolet', function(data) {
        $('#commande_volet').text('Commande actuelle : ' + data.Volet_commande )})
    
    $.get('/api/getsortievolet', function(data) {
        $('#ouverture_volet').text('Ouverture : ' + data.Ouverture_actuelle +" "+data.message )})
    })
    
    },1000)

    
$(document).ready(function() {
    $("#boutton_lum").on('click', function() {
        

        $.get('api/getsortielum', function(data) {
        if(data.IsOn)
        {
            $.get('api/setentreelum0', function(data) {
            $('#lumiere').text('Etat : '+data.Is_On +  ' La lumière est éteinte.');
            alert(data.message)


            })
        }else 
        {
        
            $.get('api/setentreelum1', function(data) {
            $('#lumiere').text('Etat : '+data.Is_On +  ' La lumière est allumée.');
            alert(data.message)


            })
        
        }
    });
})})

$(document).ready(function() {
    $("#boutton_chambre").on('click', function() {
        var valeur = $('#temp_souhaitée_chambre').val()
        $.get('api/setentreetemp1,'+valeur, function(data) {
            alert(data.message)
            $('#consignetemp_chambre').text('Température consigne actuelle(chambre) :  ' + data.Temperature_commandée + ' °C')
            $('#temp_souhaitée_chambre').val('')

        })
    });
})

$(document).ready(function() {
    $("#boutton_salon").on('click', function() {
        var valeur = $('#temp_souhaitée_salon').val()
        $.get('api/setentreetemp0,'+valeur, function(data) {
            alert(data.message)
            $('#consignetemp_salon').text('Température consigne actuelle(salon) :  ' + data.Temperature_commandée + ' °C')
            $('#temp_souhaitée_salon').val('')

        })
    });
})

$(document).ready(function() {
    $("#boutton_volet_o").on('click', function() {
        $.get('api/setentreevolet1', function(data) {
            alert(data.message)
                $('#commande_volet').text('Commande actuelle : ' + data.Volet_commande )})

        })
    });

$(document).ready(function() {
    $("#boutton_volet_f").on('click', function() {
        $.get('api/setentreevolet0', function(data) {
            alert(data.message)
                $('#commande_volet').text('Commande actuelle : ' + data.Volet_commande )})

        })
    });
