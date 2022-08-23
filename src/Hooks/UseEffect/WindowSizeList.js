import React, { useState, useEffect } from 'react';


function WindowSizeList({ url }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [items, setItems] = useState([])

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    // TODO: Update list when url changes or on mount
    // TODO: Setup resize event listener on mount
    // TODO: Cleanup resize event listener on un-mount

    // componentDidUpdate
    useEffect(() => {
        console.log('This is a side effect')
    })

    // componentDidMount
    useEffect(() => {
        console.log('Only run on mount')
    }, [])


    useEffect(() => {
        console.log('Only run on url change')
    }, [url])

    // componentWillUnmount
    useEffect(() => {
        console.log('This is my side effect')

        return () => {
            console.log('This is my clean up')
        }
    })


   // componentWillUnmount
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth)
        console.log('This is my side effect')
        return () => {
            window.removeEventListener('resize', updateWindowWidth)
            console.log('This is my clean up')
        }
    }, [])



    return (
        <div>
            <span>Window Width: {windowWidth}</span>
            {items.map(item => {
                return <div key={item}>{item}</div>
            })}
        </div>
    )
}

export default WindowSizeList;