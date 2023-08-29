import React from 'react'

export const CardNevada = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src='Nevada Cover.jpg' className='bd-placeholder-img card-img-top' alt='Nevada' />
                <div className="card-body">
                    <h3>Nevada</h3>
                    <h5>Vicetone feat. Cozi Zuehlsdorff</h5>
                    <p className="card-text">"While the initial melody and chords were created in about 20 minutes, Nevada took about 2 years to fully finish. We came up with the idea when we were stranded in Toronto. We had some travel difficulties and had to stay in Canada for a day. While in the hotel, we started the initial idea of using guitar chords in a dance song. When we finally returned back home, we spent a lot of time getting the rock sound to sound good."</p>
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
