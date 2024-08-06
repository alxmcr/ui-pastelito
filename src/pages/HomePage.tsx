import Box from "../components/Box/Box";
import Card from "../components/Card/Card";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">UI Pastelito</h1>
      <Box>hola!</Box>
      <Card btnText="Submit" />
    </main>
  );
}
