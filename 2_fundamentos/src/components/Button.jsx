const Button = () => {
    const handleClick=()=>{
        console.log("Clique");
    };

    return <button onClick={handleClick}>Clique Aqui</button>
};

export default Button;