import React from 'react'
import memeData from './memeData'

export default function MemeArea(){
    function getMeme(){
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
        return (
         <main>
           <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    onClick={getMeme}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
         </main>
        )
        }
