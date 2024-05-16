export default function App() {
  const names = ["Robin", "Leo", "Anna"];
  const persons = [
    { name: "Robin", age: 30 },
    { name: "Leo", age: 35 },
    { name: "Anna", age: 40 },
  ];

  // What we from our object array want is :
  /*return (
      <ul>
        <li>Robin</li>
        <li>Leo</li>
        <li>Anna</li>
      </ul>
    );
    */

  // Alright , just note that it is the same as
  // return <ul>{[<li>Robin</li>, <li>Leo</li>, <li>Anna</li>]}</ul>;

  // The old way of creating a JSX array out an objects array
  /*
    function renderPersonsTheOldWay() {
      const personElementList = [];
      for (const person of persons) {
        personElementList.push(<li>{person.name}</li>);
      }
      return <ul>{personElementList}</ul>;
    }
    */

  // return renderPersonsTheOldWay();

  /*
    function renderPersonsTheNewWay() {
      return persons.map((p) => <li>{p.name}</li>);
    }
    return renderPersonsTheNewWay();
    */

  /*
    It takes a function as parameter, this function receive the current item and the currentIndex
  
    function oneYearOldOlder(person, index) {
      person.age++;
      return currentItem;
    }
  
    const olderPersons = persons.map(oneYearOldOlder);
  
    This is equivalent but with the function declared inside the map
  
     const olderPersons = persons.map((person, index) => {
      person.age++;
      return person;
    });
  
    */

  // At each loop step you a free to return whatever you want

  /*
    const weirdArray = persons.map((person, index) => {
      if (index === 0) {
        return "Hello";
      } else if (index === 1) {
        return 15;
      } else {
        return <div>Weird stuff over here</div>;
      }
    });
  
    console.log(weirdArray);
  
    */

  // Finally you can use a shorthand when you want to return
  // something directly without performing anything before the return statement

  /*
    const ageList = persons.map((person) => person.age);
    console.log(ageList);
    */
}
