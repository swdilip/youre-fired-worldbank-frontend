import Plot from "react-plotly.js";

export default function IndicatorChart(props) {
  return (
    <div>
      <Plot
        data={[
          {
            type: "scatter",
            x: props.years,
            y: props.datapoints,
          },
        ]}
        layout={{
          width: 700,
          height: 500,
          title: `${props.countryName}'s ${props.indicatorChosen}`,
        }}
      />
      <h2>{props.datapoints}</h2>
      <h2>{props.years}</h2>
    </div>
  );
}
