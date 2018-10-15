//Génération d'un chiffre aléatoire entre 0 et 100
var numberrand = Math.round(Math.random()*100  )
var clicknumber = 0

$('#button1').click(function(){
  var value = Number($('#value').val());
  var regex = /^[0-9]+$/;
  clicknumber += 1

//Boite de dialogue
  if (regex.test(value)){
    if (value <= 100){
        if (value < numberrand) {
    alert('plus')
      } else if (value > numberrand){
    alert('moins')
      } else {
    alert('correct \n' + clicknumber + 'essaie')
  }
  } else {
    alert('il faut un chiffre compris entre 0 et 100')
  }
} else {
  alert('il faut un chiffre positif')
}

})
