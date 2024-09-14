class patientsCards extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['name', 'especie', 'fecha', 'sintomas', 'pendiente'];
	}

	attributeChangedCallback(propName, oldValue, newValue) {

	connectedCallback() 
    {
		this.render();
	}

	render() 
    {
		this.shadowRoot.innerHTML = ` 

        <h3>${this.name}</h3>
        <h3>${this.especie}</h3>
        <h3>${this.fecha}t</h3>
        <h3>${this.sintomas}</h3>
        <input type=checkbox></input>

        

    `;
	}
}
}

customElements.define('patients-cards', patientsCards);
export default patientsCards;
