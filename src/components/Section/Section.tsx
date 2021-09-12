import Arrival from 'components/Arrival/Arrival';

export default function Section(props) {
  return (
    <section className="space-y-2">
      <h2 className="pl-3 text-base font-semibold tracking-tight">
        {props.direction}
      </h2>
      <ul className="rounded bg-background-primary">
        {props.data.map((details, index, arr) => (
          <Arrival
            key={details.rn}
            variant="upcoming"
            data={details}
            index={index}
            length={arr.length}
          />
        ))}
        {/* <Arrival variant="upcoming" />
        <Arrival variant="upcoming" /> */}
        {/* <Arrival variant="upcoming" lastChild /> */}
      </ul>
    </section>
  );
}
