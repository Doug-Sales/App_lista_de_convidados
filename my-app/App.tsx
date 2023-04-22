import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";


export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  )
}

/* Por não poder retornar dois elementos de uma vez só, 
é preciso utilizar o fragment (wrapper), regras da sintaxe JSX.
*/