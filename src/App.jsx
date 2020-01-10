import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            {/*<div className='test'></div>*/}
            <div className={"company"}>
                О Компании
                <p>Добро пожаловать на наш сайт!Мы рады приветсвовать вас,
                    тут вы можете выбрать двери в гостинную,ванну комнату,на любой цвет и вкус!
                    Гарантия качества 5 лет!!!
                </p>
                
            </div>
            <div className={"callback"}>Обратная связь</div>
            <div className={"callmaster"}>Вызов замерщика</div>
            <div className={"call-boss"}>Связь с руководителем</div>
            <div className='feedback'>
                <div className='button'>Отзывы</div>
                <p className='description'>Здесь вы можете оставить отзыв</p>
            </div>
            <a className={"catalog"} href={'http://www.google.com'}>Каталог
                <div className='footer'>
                    выход
                </div>
            </a>
        </div>
    );
}

export default App;
