 import * as components from './Componentes/indexPadre.js';

class AppContainer extends HTMLElement {

constructor() {
    super()
    this.attachShadow({mode: 'open'})
}


connectedCallback(){
    this.render()
}

	render() 
    {
		this.shadowRoot.innerHTML = `
        
        <div class=forms>
         <div class= patients-board>   
            <h3>Nombre</h3>  
            <li class= Name>
                <input
                id="pet_name"
                type="text"
                name="name"
                value="" />
            </li>
            <h3>Especie</h3>
            <li class= especie>
                <input
                id="especie"
                type="text"
                name="especie"
                value="" />
            
            <h3>Fecha de ingreso</h3>
            <li class= especie>
                <input type= date>
            <h3>Sintomas</h3>
            <li class= sintomas>
                <input
                id="sintomas"
                type="text"
                name="sintomas"
                value="" />

            </div>
             <button>Añadir</button>
        </div>

        <div class= patients-card>

        <h1>Pendiente</h1>
            <pendiente>
                <h3>Nombre: XXX</h3>
                <h3>Especie: XXX</h3>
                <h3>Fecha: XXX</h3>
                <h3>Sintomas:XXX</h3>
                <h3></h3>
                <input type= "checkbox"></input>
            
            </pendiente>


            <pendiente>
            <h3>Nombre: XXX</h3>
            <h3>Especie: XXX</h3>
            <h3>Fecha: XXX</h3>
            <h3>Sintomas:XXX</h3>
            <h3></h3>
            <input type= "checkbox"></input>
        
        </pendiente>


        <pendiente>
        <h3>Nombre: XXX</h3>
        <h3>Especie: XXX</h3>
        <h3>Fecha: XXX</h3>
        <h3>Sintomas:XXX</h3>
        <h3></h3>
        <input type= "checkbox"></input>
    
    </pendiente>
        
    <atendidos>

<h1>Atendidos</h1>
    <pendiente>


</pendiente>
    
    </atendidos>

    <h3>Nombre: XXX</h3>
    <h3>Especie: XXX</h3>
    <h3>Fecha: XXX</h3>
    <h3>Sintomas:XXX</h3>
    <h3></h3>
    <input type= "checkbox"></input>
        </div>

        </atendidos>

    <h3>Nombre: XXX</h3>
    <h3>Especie: XXX</h3>
    <h3>Fecha: XXX</h3>
    <h3>Sintomas:XXX</h3>
    <h3></h3>
    <input type= "checkbox"></input>
        </div>

        </atendidos>

    <h3>Nombre: XXX</h3>
    <h3>Especie: XXX</h3>
    <h3>Fecha: XXX</h3>
    <h3>Sintomas:XXX</h3>
    <h3></h3>
    <input type= "checkbox"></input>
        </div>
        
        
        `;

		this.cards.forEach((characterCard) => {
			this.shadowRoot.appendChild(characterCard);
		});
	}
}


customElements.define('app-container', AppContainer);




