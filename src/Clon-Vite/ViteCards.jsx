export default function ViteCards(props) {
  const titulo = `${props.titleParraf}`;
  const parrafo = `${props.paraff}`;
  const emoji = `${props.icon}`;
  return (
    <article className="Cards">
      <img src={emoji} alt="Icono" />
      <h3>{titulo}</h3>
      <p>{parrafo}</p>
    </article>
  );
}
