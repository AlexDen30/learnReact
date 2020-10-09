import React from 'react';
import s from './loader.module.css';

let Loader = (props) => {
    return (
        <div className={s.ldsRing}><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader;