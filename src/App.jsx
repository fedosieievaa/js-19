import './App.css';
import Contact from './components/Contact';
import ReactDOM from "react-dom";
import { useState } from 'react';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

function Contacts() {
    const [searchItem, setSearchItem] = useState("");

    function handleSearchChange(event){
        setSearchItem(event.target.value);
    }

    return (
      <div className="container">
        <input className="search" type="search" onChange={handleSearchChange}/>
      { contacts.filter((contacts) => {
          if(contacts.lastName.toLowerCase().includes(searchItem.toLowerCase())){
            return contacts;
          }
          if(contacts.firstName.toLowerCase().includes(searchItem.toLowerCase())){
            return contacts;
          }
          if(contacts.phone.includes(searchItem)){
            return contacts;
          }
        }).map((contacts) => <Contact contact={contacts}/>) }
      </div>
    );
  }
  
ReactDOM.render(<Contacts/>, document.getElementById('root'));

export default Contacts;