function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now,a+b);
  return (
    <>
      <h1>Hola Desarrollador son las, {now.toString()}</h1>
      <p>{a} + {b} es igual a {a+b}</p>
    </>
  )
}

export default App
