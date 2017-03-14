//  * **Saved** - displays the Saved Articles that were searched and stored in the database

import { Component } from 'react'

const dateFormatted = (datestr) => {
    arr= datestr.split();
    year = arr[0]+ arr[1] + arr[2]+ arr[3];
    month = arr[4]+ arr[5];
    day = arr[6]+arr[7];
    return year + "-" + month + "-" + day
  }
export const Saved = ({articlesSaved} ) =>
<div>
    <thead>
        <tr>
            <th>Date</th>
            <th>Title</th>
        </tr>
    </thead>
    <tbody>
        {articlesSaved.map((article, i) =>
        <ArticleRow key={i}
                    date = {dateFormatted(article.date)}
                    title = {article.title}
                    />
        )}
    </tbody>
</div>