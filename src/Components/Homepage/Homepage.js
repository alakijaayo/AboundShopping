import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import { LinearProgress } from '@material-ui/core';

function Homepage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json")
          .then(response => response.json())
          .then(items => setData(items.feed.entry))
        }, [],
    );

    if (data === null) {
        return (
            <LinearProgress />
        );
    }

    return (
        <div>
            <ListItem product={data} />
        </div>
    )
}

export default Homepage;