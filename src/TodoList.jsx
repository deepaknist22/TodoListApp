import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActivity] = useState("")
    const [listData, setListData] = useState([])
    function addActivity() {
        setListData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList);
            setActivity('');
            return updatedList
        })
    }
    function removeActivity(i) {
        const updatedListData = listData.filter((ele, id) => {
            return i !== id;
        })
        setListData(updatedListData);
    }
    return (
        <>
            <div className="container">
                <div className="header">My-List</div>
                <input type="text" placeholder='Add Activity' className='input-field' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button className='btn' onClick={addActivity}>Add</button>
                <br />
                <p className='List-heading'>Here is your list : {")"}</p>
                {listData !== [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}></p>
                            <div className='list'>{data}</div>
                            <div><button className='btn' onClick={() => removeActivity(i)}>Remove</button></div>
                        </>
                    )
                })}
                {listData.length>=1 && <button>Remove ALL</button>}
            </div>



        </>
    )
}

export default TodoList;