import React from 'react'

export const CardRed = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src='Red(TaylorsVersion).webp' className='bd-placeholder-img card-img-top' alt='Red' />
                <div className="card-body">
                    <h3>Red (Taylor's Version)</h3>
                    <h5>Taylor Swift</h5>
                    <p className="card-text">Happiness, confusion, freedom, loneliness, devastation, euphoria and the past memories' torture are the words that reflect this album to a brokenhearted person. Iconic songs: "Red", "All Too Well", "We Are Never Ever Ever Getting Back Together", "22", "Begin Again".</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">5 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
