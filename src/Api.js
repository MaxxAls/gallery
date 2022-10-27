import { createApi } from 'unsplash-js';

const APP_ACCESS_KEY = 'dTUBUnPASfrsKOWYzVpAwvkr9Ks2MuY3i5YCvSqAxWQ';

const unsplash = createApi({
    accessKey: APP_ACCESS_KEY
});

export default unsplash;