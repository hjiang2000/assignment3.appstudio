/*Create a nice looking one-page app that uses controls for ALL input and output. Adjust properties of the form and the controls to make it a nice color, lay things out nicely, etc. 
The user must be able to see a list of all the products the store carries.
The user must be able to enter a product they want to add to their wish list. 
The program saves everything they choose to their wish list. 
Hint: an array?.....
The user must be able to see a list of all the products on their wish list. 
Program code must use array(s), events, event handler code, controls, control and form properties at a minimum. 
No prompts or alerts. */

let toyPrice="$10.00"
let bowlPrice="$14.00"
let treatPrice="$20.00"
let pajamasPrice="$30.00"
let cvBowlPrice="$32.00"
let rhDressPrice="$27.00"
let vhBowPrice="$12.00"
let wLeashPrice="$27.00"
let wishlist=[]

//make this show all the wishlist items
addWishlist.onclick=function(){
newWishItem=inptWishItem.value
wishlist.push(newWishItem)
  console.log(wishlist)
  addWishlist.style.color="#33FFF0"
}


