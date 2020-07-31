/*
We could use an object literal to express a contact:
let mike = {name: "Mike Schneider", phone: "310-123-5555"}

Using a Contact class, as the blueprint for the object, 
imposes a structure and conformity. 

*/
class Contact{
  constructor(contactname, phone, email, address){
		this.contactname = contactname;
		this.phone = phone;
		this.email = email;
		this.address = address;
  }
}

/*
We could use a Map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
to store the contact details, using the name as the key and the detail object as the value.

For the sake of practice, we design a ContactMap class to mimic the features of Map,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

This is not meant to be reusable code, but for the understanding of t 3whe features of Object and Map.
*/
class ContactMap{
  details = {}; 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  // The details object's property-value pairs are used to store contactname-detail pairs

  add(name, detail){
    // add a contact detail by the name
    // This mimics Map.set(key, value)
		this.details[name] = detail;
  }

  remove(name){
    //delete the detail by name
    //This mimics Map.delete(key)
		this.details[name] = null;
  }

  count(){
    // count the number of contacts
    // This mimics Map.size.
		
    return Object.keys(this.details).length;
  }

  getDetail(name){
    // given a full name, return the contact detail through a lookup operation
    //This mimics Map.get(key)
		return Object.values(this.details[name]);

  }

  getAll(){
    // return all contact details as an array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
		return Object.values(this.details);
  }
}