let mnuUser = false;

document.getElementById('btn_lib_usr').addEventListener('click', showManagerUser);

function showManagerUser () {
	if (mnuUser === false) {
		mnuUser = true;
		document.getElementById('mng_users').style.display = "block";
	}
	else {
		mnuUser = false;
		document.getElementById('mng_users').style.display = "none";
	}
}

let mnuBooks = false;

document.getElementById('btn_lib_books').addEventListener('click', showManagerBooks);

function showManagerBooks () {
	if (mnuBooks === false) {
		mnuBooks = true;
		document.getElementById('mng_lib_books').style.display = "block";
	}
	else {
		mnuBooks = false;
		document.getElementById('mng_lib_books').style.display = "none";
	}
}
