
// Add a library user
function fnAddUser () {
  document.getElementById('err_state').innerHTML = '';
  let userName = document.getElementById('usr_name').value;
  let userLibID = document.getElementById('lib_id').value;

  // Data validation
  if (userName === '') { 
    document.getElementById('err_state').innerHTML = 'Please inform the name of the user to add.';
    return;
  }
  if (userLibID != '') { 
    document.getElementById('err_state').innerHTML = 'You cannot add an existing user';
    return;
  }

  // Generate a user ID
  userLibID = fnGenID ();
  // Insert the new user in the user table
  users.set(userLibID, {ID: userLibID, usrname: userName})
  // Show the user ID generated
  document.getElementById('lib_id').value = userLibID;

}

// List all library users
function fnListUsers () {
  clearList('userlist');
  if ( users.size === 0 ) {
    document.getElementById('err_state').innerHTML = 'No users registred on library.';
    return;
  }
  for (var [key, value] of users) {
    let listItem = document.createElement('li');
    let textnode = document.createTextNode(`${key} - ${value.usrname}`);
    listItem.appendChild(textnode);
    document.getElementById('userlist').appendChild(listItem)
  }
}

// Generate a random ID
function fnGenID () {
  var d = new Date().getTime(); 
  var randID = ( d + Math.random() * 1000000 ) % 1000000 | 0;
  return randID;
}

// event listeners
document.getElementById('btn_lst').addEventListener('click', fnListUsers);
document.getElementById('btn_add').addEventListener('click', fnAddUser);
// document.getElementById('btn_lookup').addEventListener('click', fnGenID);





// 