
import '../css/ticTacToe.css'
import circle from '../assets/o.png'
import cross from '../assets/x.png'
import { useRef, useState } from 'react'

let data = ["", "", "", "", "", "", "", "", ""]

export default function TicTacToe() {

    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)

    // getting the reference of the title
    let titleRef = useRef(null)
    let box1= useRef(null)
    let box2= useRef(null)
    let box3= useRef(null)
    let box4= useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src ='${cross}' alt='cross' />`
            data[num] = "X"
            setCount(++count)
        }
        else {
            e.target.innerHTML = `<img src ='${circle}' alt='circle' />`
            data[num] = "O"
            setCount(++count)
        }
        checkWin()
    }

    function checkWin() {
        // first row
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2])
        }
        // second row
        if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5])
        }
        // third row
        if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8])
        }
        // first column
        if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6])
        }
        // second column
        if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7])
        }
        // third column
        if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8])
        }
        // first diagonal
        if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8])
        }
        // second diagonal
        if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6])
        }
    }

    function won(winner) {
        setLock(true)
        if (winner === "X") {
            titleRef.current.innerHTML = `The Winner is The player with <img src='${cross}' /> plays`
        } else if (winner === "O") {
            titleRef.current.innerHTML = `The Winner is The player with <img src='${circle} />' plays`
        }
        else {
            titleRef.current.innerHTML = 'The Game is a "DRAW"'
        }
    }
    function reset(){
        setLock(false)
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `Dtanar's<span> Tic Tac Toe</span>`;

        box_array.map((e) =>{
            e.current.innerHTML = "";
        })
    }
    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Dtanar's<span> Tic Tac Toe</span></h1>
            <div className="board">
                <div className="row row1">
                    <div ref={box1} className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                    <div ref={box2} className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                    <div ref={box3} className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div ref={box4} className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                    <div ref={box5} className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                    <div ref={box6} className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div ref={box7} className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                    <div ref={box8} className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                    <div ref={box9} className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>

            <button className="reset" onClick={() => reset()}>Reset</button>
        </div>
    )
}
