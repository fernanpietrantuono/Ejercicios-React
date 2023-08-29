import React from 'react'

export const CardSpeakNow = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src='SpeakNow(TaylorsVersion).webp' className='bd-placeholder-img card-img-top' alt='Speak Now' />
                <div className="card-body">
                    <h3>Speak Now (Taylor's Version)</h3>
                    <h5>Taylor Swift</h5>
                    <p className="card-text">This is one of her solo songwriting album. Speak Now reflects a brutal honestity, unfiltered chronological confessions and a wild melancholy. Iconic songs: "Mine", "Dear John", "The Story of Us", "Back to December", "Enchanted".</p>
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
