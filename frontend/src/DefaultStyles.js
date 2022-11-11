import React from 'react'

function DefaultStyles() {
    return (
        <div>
            <nav>
                <a href="/" className="link">Link One</a>
                <a href="/" className="link">Link One</a>
                <a href="/" className="link">Link One</a>
                <a href="/" className="link">Link One</a>
            </nav>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <br/>
            <p className="hero-text">Hero Text (default size 1rem/16px) - Lorem ipsum dolor sit amet, consectetur </p>
            <p>Regular Text (default size 1rem/16px) - Lorem ipsum dolor sit amet, consectetur </p>
            <button className="button-filled">Button</button>
            <button className="button-unfilled">Button</button>
            <br/><br/>
            <input 
                type="text"
                placeholder='Email'
            />
            <br/><br/>
            <ol>
                <li>Step One</li>
                <li>Step Two</li>
                <li>Step Three</li>
                <li>Step Four</li>
            </ol>
            <ul>
                <li style={{color: '#FAAD1F', listStyle: 'none'}}>#FAAD1F</li>
                <li style={{color: '#D5CEC3', listStyle: 'none'}}>#D5CEC3</li>
                <li style={{color: '#4F453B', listStyle: 'none'}}>#4F453B</li>
                <li style={{color: '#74501C', listStyle: 'none'}}>#74501C</li>
                <li style={{backgroundColor: '#4F453B', color: '#FDF2EC', listStyle: 'none'}}>#FDF2EC</li>
            </ul>
        </div>
    )
}

export default DefaultStyles