import React, { useEffect, useState } from 'react'
import './Tab.css'

const Tab = ({ data = [], initialActiveItem = 1 }) => {
    const [activeItem, setActiveItem] = useState(initialActiveItem - 1);
    const [animateClass, setAnimateClass] = useState('');
    const [wrapperHeight, setWrapperHeight] = useState('65px');

    useEffect(() => {
        const height = document.getElementById('item').clientHeight;
        console.log(height, 'height')
        setWrapperHeight((65 + height) + 'px');
    }, [activeItem])

    const changeTab = (index) => {
        if (index > activeItem) {
            setAnimateClass('animate-right');
            setTimeout(() => {
                setAnimateClass('');
            }, 100);
        } else {
            setAnimateClass('animate-left');
            setTimeout(() => {
                setAnimateClass('');
            }, 100);
        }

        setActiveItem(index);
    }
    return (
        <div className='wrapper' style={{ height: wrapperHeight }}>
            <div className='tab-row'>
                {
                    data.map((item, index) => <div key={index} className={`tab-item`} onClick={() => changeTab(index)}>
                        <p className='title'>{item.title}</p>
                        {index === activeItem &&
                            <div>
                                <div className={`indicator ${animateClass}`} />
                            </div>

                        }
                    </div>
                    )
                }
                <div id='item' className={`item ${animateClass}`}>{
                    data[activeItem].render()
                }</div>
            </div>

        </div>
    )
}

export default Tab;