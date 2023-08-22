import React from 'react'
import { VistaFearless } from './VistaFearless';
import { Link } from 'react-router-dom';

export const Main = () => {
    return (
        <div>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Music library</h1>
                            <p className="lead text-body-secondary">There are the hot top 4 album chart and the hot top 5 single chart of the world</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                            </p>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
                                                    {<Link to={`/VistaFearless`}>
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
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src='1989(TaylorsVersion).webp' className='bd-placeholder-img card-img-top' alt='1989' />
                                    <div className="card-body">
                                        <h3>1989 (Taylor's Version)</h3>
                                        <h5>Taylor Swift</h5>
                                        <p className="card-text">This album was baptized as an artistic renaissance because it defined as a pop artist. Independence, freedom, strength and happiness are her emotions that we see in her life. Iconic songs: "Style", "Blank Space", "Wildest Dreams", "Shake It Off", "Bad Blood".</p>
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
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src='Alesso Forever Cover.jpg' className='bd-placeholder-img card-img-top' alt='Sweet Escape' />
                                    <div className="card-body">
                                        <h3>Sweet Escape</h3>
                                        <h5>Alesso, Sirena</h5>
                                        <p className="card-text">"'The Sweet Escape' is probably the easiest track. It's not a track that makes you say, 'Oh, what's this?'' It's very easy for people to like that song, because there is nothing really crazy going on. It’s just a great riff and good chorus. My fans heard me play the rough idea of it a year ago and the reaction was insane, so I was really happy to finally give it to them now" said Alesso. This was premiered at his Ultra 2014 performance and was played on Radio 1 by none other than Danny Howard.</p>
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
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src='Sentio Cover.jpg' className='bd-placeholder-img card-img-top' alt='Quantum' />
                                    <div className="card-body">
                                        <h3>Quantum</h3>
                                        <h5>Martin Garrix, Brooks</h5>
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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
