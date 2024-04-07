import { faArrowRightLong, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
    isNext: boolean;
    disabled: boolean;
    id: string;
}

const ButtonNavigate = ({ isNext, id, disabled }: ButtonProps) => {
    return (
        <button
            id={id}
            className={`flex items-center justify-center h-10 w-10 rounded-lg  ${disabled ? 'bg-neutral-200' : 'bg-zinc-950 hover:bg-zinc-800'}`}
            title="scroll left"
            disabled={disabled}>
            <FontAwesomeIcon
                icon={isNext ? faArrowRightLong : faArrowLeftLong}
                style={{ fontSize: 15, color: disabled ? "black" : "white" }} />
        </button>
    )
}

export default ButtonNavigate