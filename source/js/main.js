document.addEventListener('DOMContentLoaded', function() {

	var burgerButton = document.querySelector('.header__burger'),
		hiddenMenu = document.querySelector('.hidden');

	burgerButton.addEventListener('click', function() {
		hiddenMenu.classList.toggle('hidden-visible');
	});

});