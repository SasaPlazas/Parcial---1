class patientsBoard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['name', 'especie', 'fecha', 'sintomas', 'button'];
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
            this[propName] = propName === 'atendido' ? newValue === 'true' : newValue 
			
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `

      
		<form class= "task-form">
        <li class=${this.name ? "completed" : "task"}>
        <li class=${this.especie ? "completed" : "task"}>
        <li class=${this.sintomas? "completed" : "task"}>
        <input type= ${this.fecha} />

		

        <h3>${this.name}</h3>
        <h3> ${this.especie}</h3>
        <h3> ${this.sintomas}</h3>
        <h3> ${this.raza}</h3>
        <h3> ${this.fecha}</h3>
        <p>${this.especie}</p> 

		<input type="nombre" ${this.name ? "checked" : ""} class="task-checkbox">
		
		<input type="checkbox" ${this.especie ? "checked" : ""} class="task-checkbox">
		
		<input type="checkbox" ${this.fecha ? "checked" : ""} class="task-checkbox">
		
        <input type="checkbox" ${this.sintomas ? "checked" : ""} class="task-checkbox">

        </form>
		
		<button>${this.button}</button>

    `;
	}
}

customElements.define('patients-board', patientsBoard);
export default patientsBoard;
