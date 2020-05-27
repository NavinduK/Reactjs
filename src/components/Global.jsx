import React, { Component } from 'react';

const Global = ({latest}) => {

        return (
            <div>
                <div className="section-top center-text">
                    <div className="card bg-gray mb-3 tx-orange" style={{width: '23%', margin:'1.5% 1.5% 1.5% 0'}}>
                        <div className="card-header"><h2>Total Cases</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">{latest.data?.global_total_cases}</h3>
                            <p className="card-text sub-paragraph">Last updated at: {latest.data?.update_date_time}</p>
                        </div>
                    </div>

                    <div className="card bg-gray mb-3 tx-violet" style={{width: '23%', margin:'1.5%'}}>
                        <div className="card-header"><h2>New Cases</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">{latest.data?.global_new_cases}</h3>
                            <p className="card-text sub-paragraph">Last updated at: {latest.data?.update_date_time}</p>
                        </div>
                    </div>

                    <div className="card bg-gray mb-3 tx-red" style={{width: '23%', margin:'1.5%'}}>
                        <div className="card-header"><h2>Deaths</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">{latest.data?.global_deaths}</h3>
                            <p className="card-text sub-paragraph">Last updated at: {latest.data?.update_date_time}</p>
                        </div>
                    </div>

                    <div className="card bg-gray mb-3 tx-green" style={{width: '23%', margin:'1.5% 0 1.5% 1.5%'}}>
                        <div className="card-header"><h2>Recovered</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">{latest.data?.global_recovered}</h3>
                            <p className="card-text sub-paragraph">Last updated at: {latest.data?.update_date_time}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Global;