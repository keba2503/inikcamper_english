import React, {Component} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import FaqForm from './FaqFormSection';
import Guie from './Guie'

class GuieMain extends Component {

    render() {

        return (
            <main>
                <Breadcrumb pageTitle="User guide"/>
                <Guie/>
                <FaqForm/>
            </main>
        );
    }
}

export default GuieMain;