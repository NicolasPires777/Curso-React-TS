import FilhoFunc from "./FilhoFunc";

const PaiFunc = () => {
    const handleChildClick = () => {
        console.log("Clicou no botão do elemento filho!")
    };

    return <div><FilhoFunc onChildClick={()=>handleChildClick()}/></div>
}

export default PaiFunc