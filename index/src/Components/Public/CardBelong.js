import React from 'react'

export const CardBelong = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src='Belong Cover.jpg' className='bd-placeholder-img card-img-top' alt='Belong' />
                <div className="card-body">
                    <h3>Belong (Axwell & Years Remode)</h3>
                    <h5>Axwell, Shapov, Years</h5>
                    <p className="card-text"></p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
