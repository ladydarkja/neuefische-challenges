import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1340,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 1341,
      name: "🍐 Pear",
      color: "lightgreen",
    },
    {
      id: 1342,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1343,
      name: "🍒 Cherry",
      color: "darkred",
    },
  ];

  return (
    <div>
      {fruits.map((fruit) => (
        <div className="app" key={fruit.id}>
          <Card id={fruit.id} name={fruit.name} color={fruit.color} />
        </div>
      ))}
    </div>
  );
}
