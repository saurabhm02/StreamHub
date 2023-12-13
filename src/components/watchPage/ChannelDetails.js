import React, { useEffect, useState } from 'react'
import { channelImage_api } from '../../utils/constant';
import { abbreviateNumber } from 'js-abbreviation-number';

// Channel Details of the Main Video in the Watch Page 
const ChannelDetails = ({channelId, channelTitle}) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        getChannelImage();
    }, [channelId]); // Include channelId in the dependency array to fetch data when it changes

    const getChannelImage = async () => {
        try {
            const data = await fetch(channelImage_api + "&id=" + channelId);
            const json = await data.json();
            setDetails(json);
        } catch (error) {
            console.error("Error fetching channel image:", error);
        }
    }

    if (!details || !details.items || details.items.length === 0) return null;

    const snippet = details.items[0].snippet;
    const statistics = details.items[0].statistics;

    if (!snippet || !statistics) return null;

    const imgUrl = snippet.thumbnails?.high?.url || '';
    const subscriberCount = statistics.subscriberCount;

    return (
        <div className='flex items-center'>
            <img className="w-14 h-14 mr-1 rounded-full" alt="channelImage" src={imgUrl} />
            <div>
                <p className='font-semibold text-lg'>{channelTitle}</p>
                <p className='text-xs'>{abbreviateNumber(subscriberCount)} subscribers</p>
            </div>
        </div>
    );
}

export default ChannelDetails;
