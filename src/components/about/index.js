import './index.scss';
const some_button_text = ['Frontend Skills', 'Backend Skills', 'About Me'];
const frontend_skills = ['Comprehensive List', 'This Site'];


function BTNMaker(props) {
    return <button>{props.text}</button>;
  }

function MakeButtons(props) {
    let buttons = [];
    for (let i = 0; i < props.array.length; i++) {
        let newest_button = <BTNMaker text= {props.array[i]}/>;
        buttons.push(newest_button);

  }
  console.log(buttons);
  return buttons;
}
  
function Option() {
    return (
        <div className='about-page'>
            <MakeButtons array={some_button_text} />
        </div>
    );
  }

// const About = () => {
//     return (
        
//         <div className='about-page'>   
//             <div className='text-zone'>
//                 <h1 className='about-heading'>What would you like to know about?</h1> <br />
//                 <div className='options'>
//                     <button className='option'>Frontend Skills</button>
//                     <button className='option'>Backend Skills</button>
//                     <button className='option'>Dr. Hudson Lanier</button>
//                     <Option text="Testing" />
//                 </div>
//             </div>
        
//         </div>
//     )
// }
export default Option