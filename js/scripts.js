$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    let warningLevel = 0
    let healthLevel = 0
    let copingLevel = 0

    $("input:checkbox[name=warning-signs]:checked").each(function(){      
      warningLevel += parseInt($(this).val());      
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function(){      
      healthLevel += parseInt($(this).val());      
    });

    $("input:checkbox[name=coping-methods]:checked").each(function(){      
      copingLevel += parseInt($(this).val());      
    });
    
    console.log(warningLevel)
    console.log(healthLevel)
    console.log(copingLevel)
    //$('#transportation_survey').hide();
  });
});