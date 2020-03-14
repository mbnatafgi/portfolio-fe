import React from 'react';
import './values.css'

const Values = (props) => {
    
    return ( 
        <div className="values-main">
            <div className="header">
                <h2 className="dark">
                    Why Am I a Good Fit?
                </h2>
            </div>
            <div className="chart">
                <svg viewBox='0 0 697 697'>
                        <g transform="translate(348.909 0)">
                            <path d="M150,363.885V15A348.886,348.886,0,0,1,481.811,256.075L150,363.885" transform="translate(-150 -15)" />
                            <text transform="translate(6.797 222.045)" className='dark'><tspan x="0" y="0">Passionate</tspan></text>
                        </g>
                        <g transform="translate(348.909 241.075)">
                            <path d="M150,216.094,481.811,108.283A348.886,348.886,0,0,1,355.07,498.347L150,216.094" transform="translate(-150 -108.283)"/>
                            <text transform="translate(61.797 172.971)" className='light'><tspan x="0" y="0">Committed</tspan></text>
                        </g>
                        <g transform="translate(143.839 348.885)">
                            <path d="M275.719,150l205.07,282.253a348.885,348.885,0,0,1-410.139,0L275.719,150" transform="translate(-70.649 -150)"/>
                            <text transform="translate(51.914 262.16)" className='light'><tspan x="0" y="0">Perseverant</tspan></text>
                        </g>
                        <g transform="translate(0 241.075)">
                            <path d="M363.9,216.094,158.83,498.347A348.885,348.885,0,0,1,32.09,108.283L363.9,216.094" transform="translate(-14.991 -108.283)" />
                            <text transform="translate(31.865 169.622)" className='dark'><tspan x="0" y="0">Intellect</tspan></text>
                        </g>
                        <g transform="translate(17.099)">
                            <path d="M353.417,363.885,21.607,256.075A348.885,348.885,0,0,1,353.417,15V363.885" transform="translate(-21.607 -15)"/>
                            <text transform="translate(34.766 221.697)" className='light'><tspan x="0" y="0">Meticulous</tspan></text>
                        </g>
                </svg>
            </div>

        </div>
     );
    }
    
export default Values;

// import Raphael from 'raphael/raphael';
// import Chart from 'chart.js/dist/Chart';
// import 'chartjs-plugin-labels';
// import {Pie} from 'react-chartjs-2';
// import _variables from '../common/_variables.scss';

// const values = [
//     {title: 'Passionate'},
//     {title: 'Committed'},
//     {title: 'Perseverant'},
//     {title: 'Intellect'},
//     {title: 'Meticulous'},
// ];

// const data = {
// 	// labels: [
// 	// 	'Red',
// 	// 	'Blue',
// 	// 	'Yellow'
// 	// ],
// 	datasets: [{
// 		data: [1, 1, 1, 1, 1],
// 		backgroundColor: [
// 		_variables.colorfulprimary,
// 		_variables.darksecondary,
// 		_variables.darkprimary,
// 		_variables.colorfulsecondary,
// 		_variables.colorfultertiary,
// 		]
//     }],
// };

// const options = {

//     plugins: {
//         labels: {
//           render: function (args) {
//               return values[args.index].title;
//           },
//           fontFamily: _variables.fontfamilysecondary,
//           fontColor: _variables.lightprimary,
//           fontSize: 20,
//           position: 'border',
//         //   textMargin: 10
//         }
//     }
// }

// const Value = (props) => {
    
//     const multiplier = 100;

//     const x = Math.cos(2 * Math.PI * props.percent);
//     const y = Math.sin(2 * Math.PI * props.percent);

//     const x_arc_center = Math.cos(Math.PI * props.percent);
//     const y_arc_center = Math.sin(Math.PI * props.percent);

//     console.log(x, y);
    
//     const title_width = Raphael(0, 0, 0, 0).text(0, 0, props.title).getBBox().width;

//     return(
//         // <div className="value-main">
//             <svg className='pie' viewBox={`${-1.01*multiplier} ${-1.01*multiplier} ${2.01*multiplier} ${2.01*multiplier}`} >
//                 <path style={{...props.style, ...{transform: 'rotate('+ (-90 + props.style.transform) +'deg)'}}} d={`M ${1*multiplier} 0 A ${1*multiplier} ${1*multiplier} 0 ${props.percent>=0.5 ? 1:0} 1 ${x*multiplier} ${y*multiplier} L 0 0`} />
//                 <text style={{transform: `rotate(${-90+props.style.transform}deg)`}} id='ttt' x={`${-title_width + multiplier*x_arc_center/2}`} y={`${multiplier*y_arc_center/2}`} className="title">{props.title}</text>
//             </svg>
//         // </div>
//     )
// }

    
        // const values = [
        //     {title: 'Meticulous'},
        //     {title: 'Passionate'},
        //     {title: 'Committed'},
        //     {title: 'Perseverant'},
        //     {title: 'Intellect'}
        // ];
    
    {/* <div className="chart">
        {values.map(value => <Value percent={1/values.length} key={value.title} {...value} style={{transform: values.indexOf(value)*360/values.length}}/>)}
    </div> */}
    {/* <Value title='Perseverant' percent='0.2'/> */}
    {/* <Pie data={data} options={options} /> */}