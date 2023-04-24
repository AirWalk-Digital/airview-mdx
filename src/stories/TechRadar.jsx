import { useScript, useLoadScript } from './utils/useScript';
import { useState, useEffect } from 'react';
import { radar_visualization } from './utils/tech-radar';
import './TechRadar.css';
// import d3 from d3;

const TechRadar = ({ title = 'blank', width = '1450', height = '1000', data_quadrants, data_rings, data_entries, sx = {}, ...props }) => {
  // useScript('https://d3js.org/d3.v4.min.js');
  // const { Radar } = useLoadScript('http://zalando.github.io/tech-radar/release/radar-0.7.js', 'Radar');

  data_quadrants = JSON.parse(data_quadrants);
  data_rings = JSON.parse(data_rings);
  data_entries = JSON.parse(data_entries);
  
  console.log('TechRadar:props: ', props);
  // console.log('TechRadar:data_entries: ', data_entries);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const getFullScreenClass = () => {
    return isFullScreen ? 'tech-radar--fullscreen' : '';
  };

  useEffect(() => {
    console.log('TechRadar: Rendering....')
    console.log('TechRadar:data_entries: ', data_entries);
    const radarData = {
      svg_id: "radar",
      width: 1450,
      height: 1000,
      colors: {
        background: "#fff",
        grid: '#dddde0',
        inactive: "#ddd"
      },
      title: title,
      // date: "2023.02",
      quadrants: data_quadrants,
      rings: data_rings,
      print_layout: true,
      links_in_new_tabs: true,
      // zoomed_quadrant: 0,
      //ENTRIES
      entries: data_entries
      //ENTRIES
    };
    radar_visualization(radarData)

  }, []);

  return (
    <div className={`App ${getFullScreenClass()}`}>
      <button className="fullscreen-button" onClick={toggleFullScreen}>
        {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
      </button>
      <svg id="radar"></svg>
    </div>
  );
  return (
    <svg id="radar"></svg>
  );
};

export { TechRadar };
