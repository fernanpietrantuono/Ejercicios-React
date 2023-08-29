import React from 'react'

export const CardWhereWeAre = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src='Where We Are Cover.jpg' className='bd-placeholder-img card-img-top' alt='Where We Are Cover' />
                <div className="card-body">
                    <h3>Where We Are (Extended Mix)</h3>
                    <h5>Ryos feat. Karra</h5>
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
