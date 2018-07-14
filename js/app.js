var mainContent = document.getElementById('main-content'); // ainda não utilizada

// pegando o elemento HTML do botão de menu e acrescentando o evento de click
var menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', showMenu);

function showMenu() {

  // retorna um array com todos os elementos HTML com classe 'list-button'
  var listButton = document.getElementsByClassName('list-button');

  // percorre o array listButton removendo e acrescentando classes
  // pré-definidas no CSS
  for (i = 0; i < listButton.length; i++) {
   if (listButton[i].classList.contains('hidden')){
     listButton[i].classList.remove('hidden');
     listButton[i].classList.add('show');
   } else {
     listButton[i].classList.remove('show');
     listButton[i].classList.add('hidden');
   }
  }


}
var studentsList = document.getElementById('drop-menu');
dropMenu.addEventListener('change', carregaProgramadoras);

function carregaProgramadoras(){
	var sede = dropMenu.value;
	var listaProgramadoras = document.getElementById('exibe-programadoras');
	listaProgramadoras.innerHTML = '';
	for (turma in data[sede]) {
		for (i in data[sede][turma]['students']) {
			var img = document.createElement('img');
			img.src = data[sede][turma]['students'][i]['photo'];
			listaProgramadoras.appendChild(img);
		}
	}
};


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
