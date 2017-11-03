$(function(){
  //var number définit avant la fonction click() renvoie que les chiffres entiers avec Math.round()
  var number = Math.round((Math.random() * 100));
  //On définit une variable qui permettra de connaitre le nombre de tentative effectuée
  var add = 0;
  $('#bouton').click(function() {
    //Lors de chaque clique, on ajoute +1 à la variable add
    add++;
    //On sélectionne l'input #texte
    var value = $('#texte').val();
    //On utilise les conditions
    if(value < number){
      alert('Le chiffre est plus grand');
    }
    else if (value > number) {
      alert('Le chiffre est plus petit');
    }
    else if (value == number) {
      alert('C\'est exacte. Vous avez fait ' + add + ' tentative(s).');
    }
  });
});
