

const ButtonPage = ({next, prev}) => {
    return (
        <div className="w-56 h-fit flex flex-row gap-2 ml-5">
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    )
};

export {ButtonPage}