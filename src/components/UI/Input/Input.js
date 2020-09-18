import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
    let inputElement;
    switch(props.type) {
        case 'input':
            return inputElement = (
                <div className={styles.InputContainer}>
                    {props.label ? <label>{props.label}</label> : null}
                    <input
                        className={styles.Input}
                        {...props.config}
                        value={props.value}
                        onChange={props.change}>
                    </input>
                </div>);
        case 'select':
            let options = props.options.map(cur => {
                return <option key={cur.label} value={cur.value}>{cur.label}</option>
            });
            
            return inputElement = (
                <div className={styles.InputContainer}>
                    <label>{props.label}</label>
                    <select
                        value={props.value}
                        onChange={props.valueChange}
                        className={styles.Input}
                        {...props.config}>
                        <option value='-'>-</option>
                        {options}
                    </select>
                </div>
            );
        case 'textarea':
            return inputElement = (
                <div className={styles.InputContainer}>
                    <textarea
                        className={styles.TextArea}
                        {...props.config}
                        style={props.style}
                        value={props.value}
                        onChange={props.change}>
                    </textarea>
                </div>);
        default: return inputElement;
    }

};

export default input;