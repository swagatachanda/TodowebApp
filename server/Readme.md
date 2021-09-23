##Api Listing

post: api/user/new - for signup of an user

post: api/user/login - for user login

get: api/user/logout - for user logout

post: note/new - for creating a note

patch: note/update/:listid - for updating a note

get: note/all/:userid - for getting all the notes of a user

get: note/getlist/:listid - for getting a particular list

delete: note/delete/:listid - for deleting a particular list

get: api/user/:userid - for getting user details

post: note/upload/:listid - for uploading images

delete: note/deletephoto/:name - for deleting images

patch: api/user/login/forgetpassword - for changing password

post: api/user/forgetpassword - for sending code in mail

post: api/user/matchpass/@:emailid - for validating passcode

