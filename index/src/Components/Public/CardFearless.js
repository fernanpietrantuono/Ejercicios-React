import React from 'react'
import { Link } from 'react-router-dom';

export const CardFearless = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src='Fearless(TaylorsVersion).webp' className='bd-placeholder-img card-img-top' alt='Fearless' />
                {/* <iframe height="100%" src="https://www.youtube.com/embed/xSWVPqnKcXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <div className="card-body">
                    <h3>Fearless (Taylor's Version)</h3>
                    <h5>Taylor Swift</h5>
                    <p className="card-text">Country pop album, a little more mature. As well as not being affraid, it's about being and overposing it. Iconic songs: "You Belong With Me", "Love Story", "Fearless", "Fifteen". The golden painted the whole album.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                {<Link to="/VistaFearless">
                                    View
                                </Link>}
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        {/* <div class="reproductor">
        <audio controls>
            <source src="ruta_del_audio.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
        </audio>
    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
