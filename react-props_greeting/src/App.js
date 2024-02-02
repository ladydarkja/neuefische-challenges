import "./styles.css";

export default function App() {
  return <Greeting name="Sonja" isCoach={true} />;
}

function Greeting({ name, isCoach }) {
  return (
    <div>
      Hello, {isCoach ? <span>Coach </span> : null}
      {name}!
    </div>
  );
}
