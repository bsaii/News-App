import React from 'react'
import { NewsContext } from '../lib/news-context'

export default function Sources({ sources }) {
    const { toggleSource, sources: activeSources } = React.useContext(NewsContext)

    return (
        <div className="bg-light p-3">
            <h5 className="h5">Sources</h5>

            <div className="list-unstyled list-group">
                {
                    sources.map((source) => {
                        return (
                            <button className="list-group-item list-group-item-action d-inline-flex" key={source.id}
                                onClick={() => toggleSource(source.id)}>
                                <div className="me-3 form-check">
                                    <input type="checkbox" className="form-check-input" checked={activeSources.includes(source.id)}
                                    readOnly />
                                </div>
                                <div>
                                    <h6>{source.name}</h6>
                                    <small className="text-muted">{source.description}</small>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}
