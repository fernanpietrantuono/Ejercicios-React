import React from 'react'

export const Card1 = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src='Portada Lexus LS.jpg' alt='Portada LS' />
                <div className="card-body">
                    <h2>Lexus LS</h2>
                    <p className="card-text">LS Large Flagship Sedan.</p>
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
