import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import RatingIcon from '../assets/images/ic_BdgRating.svg';

const StarRating = ({ maxStars = 5, starSize = 20, activeColor = "#FF8B00", inactiveColor = "#D3D3D3", onRatingChange }) => {
   
    const [rating, setRating] = useState(3.5);

    const handleRating = (newRating) => {
        setRating(newRating);
        if (onRatingChange) onRatingChange(newRating);
    };

    return (
        <View style={{ flexDirection: "row" }}>
            {Array.from({ length: maxStars }, (_, index) => {
                const starValue = index + 1;
                return (
                    <TouchableOpacity key={starValue} onPress={() => handleRating(starValue)}>
                        <RatingIcon
                            width={starSize}
                            height={starSize}
                            color={starValue <= rating ? activeColor : inactiveColor}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default StarRating;
