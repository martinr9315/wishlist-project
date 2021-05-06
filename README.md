# wishlist-project
CS35L wishlist project

Just some ideas for how the database will be stored and calculated:

Set of user data: Open hash table associating username string to UserData structure
UserData contains password hash, linked list of pointers to own wishlists, list of groups
Each group is another list of pointers to own wishlists

This makes viewing any user's lists (and groups if that's desirable) really easy since hash table access based on username is very fast

Wishlist data structure is a list of lists, pointed to by userdata structures

Each list is a list of pairs of string (item name) and boolean (whether or not the wish has been granted?), along with an associated username string (maybe have a list name also?)

When an account is created along with a password it's initialized with password hash, and empty wishlist list and group list

Password hash calculation is done client side and hash is sent to server, list editing is done server side and sent to client

Logging in checks if the password hash matches the username, if not, the login attempt is rejected

This means that cracking a password will be equivalent to reversing the hash function which is computationally hard

