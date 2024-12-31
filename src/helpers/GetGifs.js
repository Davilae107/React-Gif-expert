export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KC9V6q0ejAKwE8wU98VrZsH0N6fL8EaT&q=${ category }&limit=9`;
    const resp = await fetch ( url )
    const {data}= await resp.json();

    const gifs = data.map( img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    
    return gifs;
}
