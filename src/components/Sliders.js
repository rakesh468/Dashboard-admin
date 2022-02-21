import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export function Sliders() {
    return (
        <div className="slider">
            <div>
                <h4>Projects</h4><hr />
                <div>
                    <h5>Server Migration <span className="align">20%</span></h5>
                    <ProgressBar variant="danger" now={20} />
                </div>
                <div>
                    <h5>Sales Tracking<span className="align">40%</span></h5>
                    <ProgressBar variant="warning" now={40} />
                </div>
                <div>
                    <h5>Customer Database<span className="align">60%</span></h5>
                    <ProgressBar className="customer" now={60} />
                </div>
                <div>
                    <h5>Payout Details<span className="align">80%</span></h5>
                    <ProgressBar variant="info" now={80} />
                </div>
                <div>
                    <h5>Account Setup<span className="align">completed</span></h5>
                    <ProgressBar variant="success" now={100} />
                </div>
            </div>
        </div>

    );
}