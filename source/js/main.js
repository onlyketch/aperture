document.addEventListener('DOMContentLoaded', function() {

	var burgerButton = document.querySelector('.header__burger'),
		hiddenMenu = document.querySelector('.hidden'),
		hiddenNav = document.querySelectorAll('.hidden__nav');

	burgerButton.addEventListener('click', function() {
		hiddenNav.forEach( function(e) {
			e.classList.toggle('opacity');
		});
		hiddenMenu.classList.toggle('hidden-visible');
	});

});