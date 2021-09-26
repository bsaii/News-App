import React from 'react';
import { NewsContext } from '../lib/news-context';
import useArticles from '../lib/use-articles';

const Articles = () => {
    const { sources } = React.useContext(NewsContext)
    const articles = useArticles(sources)

    return (
        <div className="p-3">
            <h3 className="h3">Articles</h3>
            <p className="text-sm">
                All articles about corona
            </p>
            {/* the articles */}
            {articles.map((article, index) => {
                const { title, description, author, url, publishedAt, urlToImage } = article

                return (
                    <div key={index} className="d-flex my-3 border-bottom">
                        {
                            urlToImage && (
                                <div>
                                    <div style={{ width: 80, height: 80, backgroundImage: `url(${urlToImage})`, backgroundSize: 'cover' }} className="rounded me-3">
                                    </div>
                                </div>
                            )
                        }
                        <div>
                            <h5 className="h5"><a href={url}>{title}</a></h5>
                            <p>{description}</p>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Articles
