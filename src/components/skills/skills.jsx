import React from 'react';
import './skills.css';

const Polygon = (props) => {
    return (
        <path className='polygon' d="M137.664,0A15,15,0,0,1,150.6,7.4l39.94,68a15,15,0,0,1,0,15.194l-39.94,68a15,15,0,0,1-12.934,7.4H57.336A15,15,0,0,1,44.4,158.6l-39.94-68a15,15,0,0,1,0-15.194L44.4,7.4A15,15,0,0,1,57.336,0Z"/>
    );
}

const QualityCode = (props) => {
    return ( 
        <svg viewBox='0 0 195 166'>
            <Polygon/>
            <g className='icon' transform="translate(44.476 36)">
                <g>
                    <g transform="translate(21.305 32.608)">
                        <path d="M155.569,238.6v6.519L132.4,235.07V229.5l23.169-10.042v6.564l-16.144,6.22Z" transform="translate(-132.4 -214.641)" />
                        <path d="M244.334,205.512l-6.451,26.557q-.322,1.311-.563,2.073a2.506,2.506,0,0,1-.736,1.184,2.145,2.145,0,0,1-1.441.426q-2.346,0-2.348-2.026a18.056,18.056,0,0,1,.46-2.649l6.426-26.557a11.873,11.873,0,0,1,.967-2.9,1.907,1.907,0,0,1,1.8-.783,2.533,2.533,0,0,1,1.761.553,1.949,1.949,0,0,1,.611,1.52A12.79,12.79,0,0,1,244.334,205.512Z" transform="translate(-206.838 -200.837)" />
                        <path d="M313.157,235.334l-23.169,10.089V238.9l16.192-6.356-16.192-6.266v-6.472l23.169,10Z" transform="translate(-249.243 -214.905)" />
                    </g>
                    <path d="M150.132,74.719H56.391A6.392,6.392,0,0,0,50,81.111v80.958a6.393,6.393,0,0,0,6.391,6.391h93.741a6.392,6.392,0,0,0,6.391-6.391V81.111A6.391,6.391,0,0,0,150.132,74.719ZM134.154,78.98a4.261,4.261,0,1,1-4.261,4.261A4.266,4.266,0,0,1,134.154,78.98Zm-11.717,0a4.261,4.261,0,1,1-4.261,4.261A4.265,4.265,0,0,1,122.436,78.98Zm27.7,83.089H56.391V91.763h93.741v70.306ZM145.871,87.5a4.261,4.261,0,1,1,4.261-4.261A4.266,4.266,0,0,1,145.871,87.5Z" transform="translate(-50 -74.719)" />
                </g>
            </g>
        </svg>
     );
}

const Docs = (props) => {
    return ( 
        <svg viewBox='0 0 195 166'>
            <Polygon/>
            <path className='icon' d="M62.476,1.97a3.029,3.029,0,0,0-.326.081H17.12A9.121,9.121,0,0,0,8,11.09V111.247a10.754,10.754,0,0,0,10.749,10.667h67.1a10.754,10.754,0,0,0,10.749-10.667V36.414a2.651,2.651,0,0,0,0-1.058v-.733a2.578,2.578,0,0,0-.733-1.873L65.9,2.784a2.579,2.579,0,0,0-1.873-.733h-.814A2.531,2.531,0,0,0,62.476,1.97ZM17.12,7.263H60.114V29a9.552,9.552,0,0,0,9.527,9.527H91.382v72.716a5.468,5.468,0,0,1-5.537,5.456h-67.1a5.468,5.468,0,0,1-5.537-5.456V11.09A3.828,3.828,0,0,1,17.12,7.263ZM65.325,9.706,88.94,33.32h-19.3A4.254,4.254,0,0,1,65.325,29ZM31.451,59.377v5.211H73.143V59.377Zm0,10.423v5.211H73.143V69.8Zm0,10.423v5.211H73.143V80.222Zm0,10.423v5.211H54.9V90.645Z" transform="translate(45.771 21.273)" />
        </svg>
     );
}

const Deployment = (props) => {
    return ( 
        <svg viewBox='0 0 195 166'>
            <Polygon/>
            <g className='icon' transform="translate(43 25)">
                <path d="M102.55,62.008H99.1v-.7a6.125,6.125,0,0,0-12.25,0v.7H22.969v-.7a6.1,6.1,0,0,0-.349-2.035l26.573-9.842a8.95,8.95,0,0,0,12.812-.971l13.031,5.666a2.187,2.187,0,1,0,1.744-4.012L63.912,44.521a8.975,8.975,0,0,0-6.6-10.5V25.433a2.187,2.187,0,0,0-4.375,0v10.5a2.187,2.187,0,0,0,2.187,2.187A4.6,4.6,0,0,1,59.719,42.7l-3.065-1.332a2.188,2.188,0,1,0-1.744,4.012l2.721,1.183a4.588,4.588,0,0,1-7.1-3.845,2.187,2.187,0,1,0-4.375,0,8.925,8.925,0,0,0,.513,2.986l-27.2,10.074a6.123,6.123,0,0,0-8.75,5.533v.7H7.264A7.315,7.315,0,0,0,0,69.357v46.467a7.273,7.273,0,0,0,7.264,7.264H102.55a7.273,7.273,0,0,0,7.264-7.264V69.357A7.316,7.316,0,0,0,102.55,62.008Zm-11.33-.7a1.75,1.75,0,1,1,3.5,0v.7h-3.5v-.7Zm-76.126,0a1.75,1.75,0,0,1,3.5,0v.7h-3.5Zm90.345,54.515a2.893,2.893,0,0,1-2.889,2.889H7.264a2.893,2.893,0,0,1-2.889-2.889V69.357a2.972,2.972,0,0,1,2.889-2.974H102.55a2.972,2.972,0,0,1,2.889,2.974v46.467Z" transform="translate(0 -23.246)" />
                <g transform="translate(17.829 49.329)">
                    <path d="M85.311,253.238a2.187,2.187,0,0,0-2.187,2.188v35.657a2.187,2.187,0,1,0,4.375,0V255.426A2.187,2.187,0,0,0,85.311,253.238Z" transform="translate(-83.124 -253.238)" />
                </g>
                <g transform="translate(35.11 49.329)">
                    <path d="M165.884,253.238a2.187,2.187,0,0,0-2.187,2.188v35.657a2.187,2.187,0,1,0,4.375,0V255.426A2.187,2.187,0,0,0,165.884,253.238Z" transform="translate(-163.697 -253.238)" />
                </g>
                <g transform="translate(52.61 49.329)">
                    <path d="M247.479,253.238a2.187,2.187,0,0,0-2.187,2.188v35.657a2.188,2.188,0,0,0,4.375,0V255.426A2.188,2.188,0,0,0,247.479,253.238Z" transform="translate(-245.291 -253.238)" />
                </g>
                <g transform="translate(70.111 49.329)">
                    <path d="M329.073,253.238a2.188,2.188,0,0,0-2.187,2.188v35.657a2.188,2.188,0,0,0,4.375,0V255.426A2.188,2.188,0,0,0,329.073,253.238Z" transform="translate(-326.885 -253.238)" />
                </g>
                <g transform="translate(87.611 49.329)">
                    <path d="M410.665,253.238a2.188,2.188,0,0,0-2.187,2.188v35.657a2.187,2.187,0,1,0,4.375,0V255.426A2.187,2.187,0,0,0,410.665,253.238Z" transform="translate(-408.478 -253.238)" />
                </g>
                <g transform="translate(80.063 29.312)">
                    <path d="M377.862,160.75l-1.516-.657a2.187,2.187,0,1,0-1.739,4.015l1.516.657a2.187,2.187,0,1,0,1.739-4.015Z" transform="translate(-373.288 -159.913)" />
                </g>
            </g>
        </svg>
     );
}

const Automation = (props) => {
    return ( 
        <svg viewBox='0 0 195 166'>
            <Polygon/>
            <g className='icon' transform="translate(35.609 22)">
                <path d="M31.126,71.764A35.737,35.737,0,0,1,30,66.524a1.1,1.1,0,1,0-2.179.3,37.887,37.887,0,0,0,1.19,5.565,1.1,1.1,0,0,0,2.111-.622Z" transform="translate(-4.128 -0.349)" />
                <path d="M67.157,27.539c-.553-.023-1.131-.034-1.7-.034A38,38,0,0,0,27.505,65.46a1.1,1.1,0,1,0,2.2,0A35.8,35.8,0,0,1,65.46,29.705c.535,0,1.08.011,1.6.032a35.759,35.759,0,0,1,0,71.445c-.524.022-1.069.032-1.6.032A35.9,35.9,0,0,1,33.008,80.486a1.1,1.1,0,1,0-2,.926,38.1,38.1,0,0,0,34.449,22c.565,0,1.143-.011,1.7-.034a37.959,37.959,0,0,0,0-75.841Z" transform="translate(-4.159 -4.162)" />
                <path d="M125.036,54.879h-9.3a1.621,1.621,0,0,1-1.552-1.138,48.558,48.558,0,0,0-3.86-9.311,1.613,1.613,0,0,1,.295-1.91l6.579-6.578a3.846,3.846,0,0,0,0-5.429L104.647,17.973a4.055,4.055,0,0,0-.386-.34,3.84,3.84,0,0,0-5.031.34L92.653,24.55a1.725,1.725,0,0,1-.133.118,1.009,1.009,0,0,0-.145.1l-.109.058a1.484,1.484,0,0,1-.613.187,1.4,1.4,0,0,1-.911-.169,48.49,48.49,0,0,0-9.313-3.863,1.6,1.6,0,0,1-1.136-1.552V10.125a3.844,3.844,0,0,0-3.84-3.838H58.708a3.838,3.838,0,0,0-3.829,3.838v9.307a1.621,1.621,0,0,1-1.139,1.552,47.988,47.988,0,0,0-8.934,3.659l-.155.084c-.086.044-.171.089-.22.118a1.624,1.624,0,0,1-1.911-.295l-6.579-6.578a2.951,2.951,0,0,0-.4-.34,3.84,3.84,0,0,0-5.031.34L17.971,30.514a3.845,3.845,0,0,0,0,5.429l6.579,6.578a1.626,1.626,0,0,1,.3,1.907,47.787,47.787,0,0,0-3.863,9.312,1.622,1.622,0,0,1-1.553,1.14H10.124a3.844,3.844,0,0,0-3.84,3.84V76.452a3.843,3.843,0,0,0,3.84,3.84h9.307a1.619,1.619,0,0,1,1.553,1.139,48.383,48.383,0,0,0,3.86,9.31,1.626,1.626,0,0,1-.295,1.91l-6.58,6.578a3.859,3.859,0,0,0,0,5.429L30.512,117.2a3.827,3.827,0,0,0,4.979.377,3.2,3.2,0,0,0,.449-.377l6.579-6.578a1.614,1.614,0,0,1,1.878-.312c.083.047.167.092.252.136l.2.107a48.509,48.509,0,0,0,8.893,3.636,1.622,1.622,0,0,1,1.139,1.552v9.3a3.838,3.838,0,0,0,3.829,3.84H76.45a3.844,3.844,0,0,0,3.84-3.84v-9.3a1.6,1.6,0,0,1,1.139-1.552,49.131,49.131,0,0,0,9.319-3.867,1.371,1.371,0,0,1,.9-.164.352.352,0,0,0,.112.012l.268.067a1.825,1.825,0,0,1,.318.149,1.1,1.1,0,0,0,.149.107,1.963,1.963,0,0,1,.151.132l6.578,6.578a3.847,3.847,0,0,0,5.041.333,3.753,3.753,0,0,0,.376-.333L117.2,104.654a3.856,3.856,0,0,0,0-5.425l-6.583-6.583a1.612,1.612,0,0,1-.289-1.905,49.147,49.147,0,0,0,3.86-9.311,1.6,1.6,0,0,1,1.552-1.136h9.3a3.844,3.844,0,0,0,3.84-3.84V58.718a3.837,3.837,0,0,0-3.835-3.84Zm1.639,21.573a1.641,1.641,0,0,1-1.639,1.639h-9.3a3.78,3.78,0,0,0-3.662,2.712,46.872,46.872,0,0,1-3.687,8.888,3.824,3.824,0,0,0,.673,4.515l6.578,6.578a1.648,1.648,0,0,1,0,2.317l-12.554,12.541a1.919,1.919,0,0,1-.164.146,1.637,1.637,0,0,1-2.141-.146l-6.58-6.579a3.424,3.424,0,0,0-.337-.293,1.083,1.083,0,0,0-.2-.149,2.152,2.152,0,0,0-.321-.2,2.926,2.926,0,0,0-.68-.3,2.128,2.128,0,0,0-.451-.116,2.168,2.168,0,0,0-.252-.035,3.575,3.575,0,0,0-2.272.413,47.04,47.04,0,0,1-8.887,3.688,3.778,3.778,0,0,0-2.714,3.661v9.3a1.641,1.641,0,0,1-1.639,1.639H58.708a1.636,1.636,0,0,1-1.628-1.639v-9.3a3.835,3.835,0,0,0-2.712-3.661,46.247,46.247,0,0,1-8.448-3.449c-.083-.047-.167-.092-.252-.136l-.187-.1a3.769,3.769,0,0,0-1.79-.449,3.857,3.857,0,0,0-2.724,1.123l-6.579,6.578a1.151,1.151,0,0,1-.176.146,1.637,1.637,0,0,1-2.141-.146L19.532,103.106a1.651,1.651,0,0,1,0-2.321l6.58-6.578a3.843,3.843,0,0,0,.672-4.515,46.19,46.19,0,0,1-3.686-8.885,3.83,3.83,0,0,0-3.662-2.714H10.125a1.642,1.642,0,0,1-1.639-1.639V58.718a1.641,1.641,0,0,1,1.639-1.639h9.307a3.837,3.837,0,0,0,3.662-2.713,45.545,45.545,0,0,1,3.687-8.887,3.843,3.843,0,0,0-.673-4.515l-6.579-6.578a1.639,1.639,0,0,1,0-2.317L32.072,19.528a1.657,1.657,0,0,1,2.193-.109.76.76,0,0,1,.123.109l6.578,6.578a3.848,3.848,0,0,0,4.547.657l.155-.084c.086-.044.171-.089.215-.116a45.623,45.623,0,0,1,8.487-3.47,3.834,3.834,0,0,0,2.712-3.661V10.125a1.635,1.635,0,0,1,1.628-1.638H76.454a1.64,1.64,0,0,1,1.639,1.638v9.307a3.777,3.777,0,0,0,2.712,3.661,46.291,46.291,0,0,1,8.879,3.683,3.727,3.727,0,0,0,1.8.457,2.628,2.628,0,0,0,.47-.039,3.474,3.474,0,0,0,1.342-.419,2.6,2.6,0,0,0,.374-.223,1.117,1.117,0,0,0,.13-.088,5.232,5.232,0,0,0,.41-.356l6.579-6.578a1.634,1.634,0,0,1,2.132-.153,1.919,1.919,0,0,1,.174.153l12.553,12.541a1.64,1.64,0,0,1,0,2.317l-6.575,6.573a3.823,3.823,0,0,0-.678,4.519,46.36,46.36,0,0,1,3.686,8.889,3.837,3.837,0,0,0,3.662,2.711h9.3a1.642,1.642,0,0,1,1.639,1.639V76.452Z" transform="translate(-6.284 -6.287)" />
                <path d="M32.937,63.939a1.1,1.1,0,0,0,.793.762l2.509.62a28.984,28.984,0,0,0,53.295,13.7,3.507,3.507,0,0,0-1.047-4.846h0a3.509,3.509,0,0,0-4.845,1.048,21.979,21.979,0,0,1-40.139-8.1l1.583.392a1.11,1.11,0,0,0,1.057-.3,1.1,1.1,0,0,0,.264-1.068L43.164,54.9a1.1,1.1,0,0,0-1.849-.458L33.2,62.87a1.1,1.1,0,0,0-.264,1.069Zm8.642-6.6,2.186,7.579L42.459,64.6A1.1,1.1,0,0,0,41.1,65.774,24.178,24.178,0,0,0,85.491,76.419a1.305,1.305,0,1,1,2.195,1.414A26.784,26.784,0,0,1,38.394,64.409a1.1,1.1,0,0,0-.835-1.025l-1.45-.359Z" transform="translate(-3.619 -1.498)" />
                <path d="M83.159,61.054a1.1,1.1,0,0,0-.285,1.063l3.028,11.3a1.1,1.1,0,0,0,1.841.493l8.273-8.273a1.1,1.1,0,0,0-.493-1.841l-2-.536a28.989,28.989,0,0,0-54.144-13.5,3.507,3.507,0,0,0,6.087,3.484,21.976,21.976,0,0,1,40.881,8.093l-2.121-.569a1.1,1.1,0,0,0-1.065.286ZM87.3,63.871a1.1,1.1,0,0,0,1.383-1.125A24.176,24.176,0,0,0,43.553,52.151a1.306,1.306,0,0,1-2.269-1.3A26.789,26.789,0,0,1,91.334,64.109a1.1,1.1,0,0,0,.815,1.062l.963.257-5.578,5.578-2.041-7.62Z" transform="translate(-3.016 -3.396)" />
            </g>
        </svg>
    );
}

const Skill = (props) => {
    return (
        <div className="skill-main">
            {<props.icon/>}
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
        </div>
    )
}

const Skills = (props) => {

    const skills = [
        {icon: QualityCode, title: 'Quality Code', description: 'Writing clean, readable, structured, maintainable, and abstract code is my highest priority.'},
        {icon: Docs, title: 'Documentation', description: 'Writing and maintaining API and CLI documentation for easy and smooth integration among team members.'},
        {icon: Deployment, title: 'Deployment', description: 'Deploying containerized applications for ultimate portability and isolation using Docker engine and orchestration tools like Kubernetes.'},
        {icon: Automation, title: 'Automation', description: 'Writing bash scripts for automating repetitive tasks that are especially handy when developing microservice-based solutions.'},
    ]

    return ( 
        <div className="skills-main">
            <div className="header dark">
                <h2>What Am I Good At?</h2>
            </div>
            <div className="skills">
                {skills.map(skill => <Skill key={skill.title} {...skill}/>)}
            </div>
        </div>
     );
}
 
export default Skills;