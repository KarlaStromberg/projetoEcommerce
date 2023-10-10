import {useState} from "react";
import {useEffect} from "react";

function ComponenteNome(){

const [nome, setNome] = useState("Karla");

useEffect(()=>{
    alert(`Alterado o nome para ${nome}`)
},[nome])

    return (

        
        <div>

        <div style={{fontSize:"30px", backgroundColor:"lightcoral", color:"white", textShadow:'1px 1px 2px darkred'}}>
            <p>Nome: {nome}</p>
        </div>

        <button onClick={() => setNome("Saberly")} style={{ backgroundColor:"darkred", color:"white", padding:'10px', border:'0px', borderRadius:'20px', margin:'10px'}}><b>Alterar para apelido</b></button>
        <button onClick={() => setNome("Karla")} style={{ backgroundColor:"darkred", color:"white", padding:'10px', border:'0px', borderRadius:'20px', margin:'10px'}}><b>Alterar para nome</b></button>
        </div>
    );
}

    

export { ComponenteNome };