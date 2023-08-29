import React, { Component } from 'react'
import { CardsRM } from './CardsRM'

export default class MainRM extends Component {

    constructor(props) {
        super(props);
        this.state = { mascotas: [] }
    }

    render() {
        return (
            <div>
                <main>
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Characters</h1>
                                <p className="lead text-body-secondary">There are 20 characters of the famous animated TV series Rick & Morty</p>
                                <p>
                                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <CardsRM />
                </main>
            </div>
        )
    }
}
