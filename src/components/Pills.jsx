import React from 'react';
import Global from './Global';
import Local from './Local';

const Pills = ({latest}) => {
    return (
        <div>
            <div className="tabs" style={{margin:'1.5%'}}>
                <div className="tab-2">
                    <label htmlFor="tab2-1">Global Status</label>
                    <input id="tab2-1" name="tabs-two" type="radio" defaultChecked="checked" />
                    <div>
                        <Global latest={latest}/>
                    </div>
                </div>
                <div className="tab-2">
                    <label htmlFor="tab2-2">Local Status</label>
                    <input id="tab2-2" name="tabs-two" type="radio" />
                    <div>
                        <Local latest={latest}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pills;