import React from 'react';
import '../../../StyleSheet/VehicleList.scss'

const VehicleList = (props) => {
    const { title, amount} = props.bus
    return (
        <div className="col bordered vehicle-list">
            <div className="card rounded-0">
                <div className="card-body p-2">
                    <p>{title}</p>
                    <p>{amount}</p>
                </div>
            </div>
        </div>
    );
};

export default VehicleList;