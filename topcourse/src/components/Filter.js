import React from 'react';
import './Filter.css';

const Filter = ({ filterData }) => { // receiving props
    // is tarah bnane pr Filter wala error shayad nhi aata , as i got struck on Project 1
    return (
        <div className='filterBtnContainer'>
            {filterData.map( (data) => {
                return (
                    <div key={data.id} className='filterBtn'>
                        {/* // return statement laga rhe hi map ke ssaath , jab button lagaya aur ab jab cards laga rhe hi.  */}
                        {/* console.log(data); */}
                        <button >
                            {data.title};
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Filter;