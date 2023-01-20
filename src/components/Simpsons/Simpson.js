const Simpson = (props) => {
        const {name, description, image}=props;
    return (
        <div>
            <div>name: {name}</div>
            <div>description: {description}</div>
            <img className='pic' src ={image} alt={name}/>





        </div>
    );
};
export {Simpson}
