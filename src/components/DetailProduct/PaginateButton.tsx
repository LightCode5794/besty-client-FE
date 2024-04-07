import { faArrowRightLong, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';

interface PaginateProps {
    onChange?: (index: number) => void
}

const PaginateButton = ({ onChange }: PaginateProps) => {
    const [pageIndex, setPageIndex] = useState(1);

    const onPrev = () => {
        if (pageIndex > 1) setPageIndex(pageIndex - 1)
    }

    const onChangePaginate = (index: number) => {
        setPageIndex(index + 1)
        if (onChange) onChange(index)
    }

    const onNext = () => {
        if (pageIndex < 10) setPageIndex(pageIndex + 1)
    }

    return (
        <>
            <div className='flex justify-end'>

                <div className='inline-flex justify-center items-center'>
                    <button onClick={onPrev} disabled={pageIndex == 1}>
                        <FontAwesomeIcon
                            icon={faArrowLeftLong}
                            style={{ color: pageIndex == 1 ? "grey" : "black", fontSize: 20 }} />
                    </button>

                    <div className='w-4' />
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <button
                                className={`px-4 py-2 rounded mr-2.5 text-base ${pageIndex == index + 1 ? "bg-black border-2 border-black text-white" : "bg-white border-2 border-black text-black"}`}
                                onClick={() => { onChangePaginate(index) }}>
                                {index + 1}
                            </button>
                        ))
                    }

                    <div className='w-1.5' />

                    <button onClick={onNext} disabled={pageIndex == 10}>
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            style={{ color: pageIndex == 10 ? "grey" : "black", fontSize: 20 }} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default PaginateButton