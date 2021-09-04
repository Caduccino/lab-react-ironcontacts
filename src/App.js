import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

let selectedContacts = []

function firstContactSelection(array, newArray) {
  for (let i = 0; i < 5; i++){
    newArray.push(array[0]);
    array.splice(0,1);
  }
}

firstContactSelection(contacts, selectedContacts)

let contactsTable = selectedContacts.map((element) => {
  return (
    <tr key={element.id}>
      <td><img src={element.pictureUrl} className="picture"/></td>
      <td><p>{element.name}</p></td>
      <td><p>{element.popularity}</p></td>
    </tr>
  )
})

function randomizer(array, newArray) {
  let randomNumber = Math.floor(Math.random() * (array.length));
  newArray.push(array[randomNumber]);
  array.splice(randomNumber, 1);
  console.log(newArray)
}

function App() {
  console.log(selectedContacts)
  return (
    <div>
    <h1>IronContacts</h1>
    <table>
      <thead>
        <tr>
          <td><h2>Picture</h2></td>
          <td><h2>Name</h2></td>
          <td><h2>Popularity</h2></td>
        </tr>
      </thead>
      <tbody>
        {contactsTable}
      </tbody>
    </table>
    <button onClick={() => randomizer(contacts, selectedContacts)}>Add Random Contact</button>
    </div>
  );
}

export default App;
