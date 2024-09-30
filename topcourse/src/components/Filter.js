import React from 'react';

const Filter = ({ filterData }) => {
    // is tarah bnane pr Filter wala error shayad nhi aata , as i got struck on Project 1
    return (
        <div>
            {filterData.map( (data) => {
                return (
                    // return statement laga rhe hi map ke ssaath , jab button lagaya aur ab jab cards laga rhe hi. 
                    <button>
                        {data.title};
                    </button>
                )
            })}
        </div>
    )
}

export default Filter;