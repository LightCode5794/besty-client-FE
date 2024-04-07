import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Space } from 'antd';
import React, { useState } from 'react';

const RateStar = () => {

    const [hoverIndex, setHoverIndex] = useState(-1);
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarHover = (index: number) => {
        setHoverIndex(index);
    };

    const handleStarClick = (index: number) => {
        if (selectedStars === index + 1) {
            setSelectedStars(0);
        } else {
            setSelectedStars(index + 1);
        }
    };

    const handleMouseLeave = () => {
        if (selectedStars === 0) {
            setHoverIndex(-1);
        }
    };

    return (
        <>
            <Space direction="horizontal" onMouseLeave={handleMouseLeave}>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={index < selectedStars || index <= hoverIndex ? faStarSolid : faStarRegular}
                            style={{ fontSize: 20, cursor: 'pointer', color: (index < selectedStars || index <= hoverIndex) ? '#ffc107' : '#aaa' }}
                            onMouseEnter={() => handleStarHover(index)}
                            onClick={() => handleStarClick(index)}
                        />
                    ))
                }
            </Space>
        </>
    )
}

export default RateStar;
