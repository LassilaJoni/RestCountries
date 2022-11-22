import React from 'react';

const Filter = ({filter, handleFilterChange})=>(
    <>
    <form>
        <div>
            Find countries<br/> <input value = {filter}
            onChange = {handleFilterChange}/>
        </div>
    </form>
    </>
);

export default Filter;