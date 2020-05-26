import React, { Component } from 'react';

class Global extends Component {
    render() {
        return (
            <div>
                <div className="section-global center-text">
                    <div className="card text-white bg-dark mb-3 " style={{width: '22%', margin:'1.5%'}}>
                        <div className="card-header"><h2>Total Cases</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">100</h3>
                            <p className="card-text">Last updated at:</p>
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3" style={{width: '22%', margin:'1.5%'}}>
                        <div className="card-header"><h2>Deaths</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">100</h3>
                            <p className="card-text">Last updated at:</p>
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3" style={{width: '22%', margin:'1.5%'}}>
                        <div className="card-header"><h2>Recovered</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">100</h3>
                            <p className="card-text">Last updated at:</p>
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3" style={{width: '22%', margin:'1.5%'}}>
                        <div className="card-header"><h2>Suspected</h2></div>
                        <div className="card-body">
                            <h3 className="card-title">100</h3>
                            <p className="card-text">Last updated at:</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Global;