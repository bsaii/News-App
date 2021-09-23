import React from 'react';

const Articles = ({ articles }) => {

    return (
      <div className="w-3/4 bg-gray-200 p-20">
        <h1 className="text-4xl font-medium">Articles</h1>
        <p className="text-sm">
          All articles mentioning Apple from yesterday, sorted by popular
          publishers first.
        </p>
        {/* the articles */}
            {articles.map((artilce, index) => {
                const { title, description, author, url, publishedAt } = artilce
                return (
                    <div
                        key={index}
                        className="flex mt-3 max-w-2xl h-auto border-2 border-gray-600 rounded p-4"
                    >
                        <div className="flex-col ml-4">
                            <a href={url}>
                                <h2 className="mt-1 text-xl text-green-500">{title}</h2>
                            </a>
                            <p className="text-xs">{ publishedAt }</p>
                            <p className="p-2 my-1 text-base overflow-hidden">
                                {description}
                            </p>
                            <p className='text-xs'>by { author }</p>
                        </div>
                    </div>
                );
        }  
        )}
      </div>
    );
}

export default Articles
