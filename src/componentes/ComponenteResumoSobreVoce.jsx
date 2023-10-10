function ComponenteResumoSobreVoce(props){
    return(
        <div  style={{fontSize: '20px', backgroundColor: 'lightpink', color:'darkred', maxWidth:'500px', textAlign:'initial', margin:'0 auto', padding:'30px', borderRadius:'25px'}}>
        <div>Informações</div>
        <hr/>
        <div><b>Nome completo: </b>{props.nome}</div>
        <div><b>Idade: </b>{props.idade}</div>
        <div><b>Children: </b>{props.children}</div>
        </div>
    );
}

export { ComponenteResumoSobreVoce };
