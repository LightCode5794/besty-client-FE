import RateStar from "./RateStar"
import { Input } from 'antd';
const { TextArea } = Input;

const AddReview = () => {
    return (
        <>
            <p className='text-xl font-bold'>Add your review</p>
            <div className='h-4' />
            <RateStar />
            <div className='h-4' />
            <TextArea
                style={{
                    height: 140,
                    resize: 'none',
                }}
                placeholder='Enter your review'
                size='large'
                allowClear />
            <div className='h-4' />

            <button className="bg-black rounded-md px-6 py-2 text-white ">Submit</button>

            <div className='h-4' />

        </>
    )
}

export default AddReview;
