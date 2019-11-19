import React from 'react';
import Alayout from './layout/Alayout/Alayout'
import './App.css';

function App() {
  return (
    <div className="App">
      <Alayout />
    </div>
  );
}
 //nav导航的高亮样式
    // active = (e) => {
    //     let alis = document.querySelectorAll('.footer li')
    //     let asvgs = document.querySelectorAll('.footer svg')
        
    //     alis.forEach(item => {//高亮排他
    //         item.style.color = ''
    //     })
    //     asvgs.forEach(item => { //高亮排他
    //         item.style.color = ''
    //     })
    //     if (e.target.tagName === 'LI') {
    //        e.target.style.color ='#58bc58'
    //     }
    //     if (e.target.tagName === 'P' ) {
    //         e.target.parentNode.style.color = '#58bc58'
    //     }
    //     if (e.target.tagName === 'svg') {
    //          e.target.parentNode.parentNode.style.color = '#58bc58'
    //     }
    //      if ( e.target.tagName === 'path') {
    //          e.target.parentNode.parentNode.parentNode.style.color = '#58bc58'
    //      }
    // }
export default App;
