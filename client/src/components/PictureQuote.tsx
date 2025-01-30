import React from "react";

interface PictureQuoteProps{
    imagesrc: string;
    alttext?: string;
    quote:string;
    author?:string;

}

const PictureQuote: React.FC<PictureQuoteProps>=({
    imagesrc,
    alttext,
    quote,
    author,
}) => {
    return (
        <div style= {styles.container}>
            <img src= {imagesrc} alt={alttext} style={StyleSheet.image} />
            <blockquote style= {styles.quote}>
                "{quote}"
                {author && <cite style= {StyleSheet.author}>- {author}</cite>}
                </blockquote>
                </div>

            
            )

}

export default PictureQuote
