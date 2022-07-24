export default function Main(props) {
  return (
    <div id="card">
      <div id="left">
        <img src={`src/images/${props.item.image}`} id="picture" />
      </div>
      <div id="right">
        <p>
          <img src={`src/images/${props.item.arrow}`} id="arrow" />
           {props.item.location}
        </p>
        

        <h1>{props.item.monument}</h1>
        <a href={`${props.item.link}`}>
          <p>Plus d'informations ici</p>
        </a>
        <p>Dates du voyage : {props.item.dates}</p>
        <p>{props.item.informations}</p>
      </div>
    </div>
  )
}
