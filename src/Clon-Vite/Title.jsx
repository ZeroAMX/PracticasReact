export default function TitulePage(props) {
  const titule1 = `${props.titule}`;
  const titule2 = `${props.subitule}`;
  const parrafo_1 = `${props.parrafo}`;

  return (
    <section>
      <h1>{titule1}</h1>
      <h2>{titule2}</h2>
      <p>{parrafo_1}</p>
    </section>
  );
}
