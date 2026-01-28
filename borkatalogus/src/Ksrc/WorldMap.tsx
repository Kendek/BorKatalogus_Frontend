import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import styles from "../Kcss/Map.module.css"

function Chart() {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");


    let chart = root.container.children.push(
        am5map.MapChart.new(root, {})
    );

    let PolygonSeries  = chart.series.push(
        am5map.MapPolygonSeries.new(root,{
            geoJSON: am5geodata_worldLow,
            fill: am5.color("#8B1E3F"),
            stroke : am5.color("#ffffff")
        })
    );

    PolygonSeries.mapPolygons.template.setAll({
        tooltipText : "{name}"
    })
    PolygonSeries.data.setAll([{
        id: "US",
        polygonSettings: {
        fill: am5.color(0xFF3C38)
  }
    }])
 
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" className={styles.ChartDiv} style={{ width: "100vw", height: "80vh" }}></div>
  );
}
export default Chart;