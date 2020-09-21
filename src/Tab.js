import React, { useState } from 'react'
import './Tab.css'

const Tab = ({ data = [], initialActiveItem = 1 }) => {
    const [activeItem, setActiveItem] = useState(initialActiveItem - 1);
    const [animateClass, setAnimateClass] = useState('')
    const changeTab = (index) => {
        if (index > activeItem) {
            setAnimateClass('animate-right');
        } else {
            setAnimateClass('animate-left');
        }

        setActiveItem(index);
    }
    return (
        <div>
            <div className='tab-row'>
                {
                    data.map((item, index) => <div key={index} className={`tab-item`} onClick={() => changeTab(index)}>
                        <p className='title'>{item.title}</p>
                        {index === activeItem &&
                            <div>
                                <div className={`indicator ${animateClass}`} />
                                <div className={`item ${animateClass}`}>{
                                    data[activeItem].render()
                                }</div>
                            </div>

                        }
                    </div>
                    )
                }
            </div>

        </div>
    )
}

export default Tab;