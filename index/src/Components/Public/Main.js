import React, { Component } from 'react'
import { Cards } from './Cards'

export default class Main extends Component {
    render() {
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
                    <Cards />
                </main>
            </div>
        )
    }
}
