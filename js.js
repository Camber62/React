import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 1
// root.render(
//     <HelloWorld/>
// )
//
// function HelloWorld (){
//     let [User_name,setUsername] = useState('Alexey')
//     console.log(User_name)
//     function clickMe(){
//         setUsername('Mo')
//
//     }
//    return(
//         <div>
//             <div>Hi {User_name}!</div>
//             <button onClick={clickMe}>More</button>
//         </div>
//     );
//
// }

root.render(
    <Cont/>
)

function Cont(){
    const [count,setCont] =useState(0)
    function clickOne(i){
        setCont(count+i)
    }
    function clickTwo(i){
        setCont(count-i)
    }

    return (
        <div>
            <div>Значение:{count}</div>
            <button onClick={()=>clickOne(1)}>+1</button>
            <button onClick={()=>clickTwo(2)}>-1</button>
        </div>
    )

}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
// let input = document.querySelector('.input')
// let button = document.querySelector('button')
//
// input.addEventListener('keyup',function (event){
//     localStorage.setItem('key',input.value)
//     // console.log(localStorage.getItem('key'))
// })
//
//
//
// const value = localStorage.getItem('key')
//
//
//
// button.addEventListener('click',function (){
//     localStorage.removeItem('key')
// })
//
// if(value){
//     input.setAttribute('value', value)
// }

lesson2

import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const initCount = 0


root.render(
    <div>
        <FavoritesList/>
    </div>
);

function FavoritesList(){
    const [foods,setFoods] = useState(['Пльмени','Паста','Пицца','Окрошка']);
function addFoot(){
    const food = "Чипсы"
    setFoods(foods.concat([food]))
}

    return(
        <div>
            <ul>
                {foods.map(function (food) {
                    return (<li>{food}</li>);
                })}
            </ul>
            <button onClick={addFoot}>addFoot</button>
        </div>
    )
}


// root.render(
//     <div class="red">
//         <HelloWorld name="Alexey" lang="en"/>
//         <HelloWorld name="Алексей" lang="ru"/>
//     </div>
// );
//
// function HelloWorld(Props) {
//     Props.name='Petr'
//     if (Props.lang==="ru"){
//         return (
//             <h1>Привет, {Props.name}</h1>
//         )
//     }
//     if (Props.lang==="en"){
//         return (
//             <h1>Hello,{Props.name}</h1>
//         )
//     }
// }


// }
// root.render(
//     <Cont count="100"/>
// )
//
// function Cont(Props){
//     const [count,setCont] =useState(Props.count)
//     function clickOne(i){
//         setCont(count+i)
//     }
//     function clickTwo(i){
//         setCont(count-i)
//     }
//
//     return (
//         <div>
//             <div>Значение:{count}</div>
//             <button onClick={()=>clickOne(1)}>+1</button>
//             <button onClick={()=>clickTwo(2)}>-1</button>
//         </div>
//     )
//
// }




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


