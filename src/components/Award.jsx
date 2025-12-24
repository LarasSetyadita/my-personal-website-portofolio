function Award({ image, title }) {
    return (
        <div className="bg-lightaccent rounded-3xl w-full h-full flex items-center justify-center">
            <div className="text-center px-10 py-10">
            <div className="flex justify-center mb-5">
                <img src={image} alt="" />
            </div>
            <p className="font-semibold text-secondary">
                {title}
            </p>
            </div>
        </div>
    );
}

export default Award