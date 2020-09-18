import React from 'react';

import Auxiliar from '../Auxiliar/Auxiliar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return(
        <Auxiliar>
            <Toolbar logo={props.logo} content={props.content}/>
            <main>
                {props.children}
            </main>
        </Auxiliar>
    )
}

export default layout;