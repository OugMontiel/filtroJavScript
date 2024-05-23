import { LitElement, css, html } from 'lit'
import { getBusqueda } from './get';

export class cardpelis extends LitElement {
    static properties = { //Se cargan las variables
        basePelis: { type: Array },
        buscar:{ type: String },
    }
    constructor() {
        super();
        this.buscar="Niram"
        this.basePelis = []
        this.loadPelis();
    }
    async loadPelis() {
        try {
            this.basePelis = await getBusqueda("Niram");
            this.requestUpdate();
        } catch (error) {
            console.error('Error loading pelis:', error);
        }
    }
    static styles = css`^`;
    render() {
        const pelis = this.basePelis
        console.log(pelis[1]["#ACTORS"]); 
        const YEAR = pelis[1]["#YEAR"]; 
        const TITLE = pelis[1]["#TITLE"]; 
        const RANK = pelis[1]["#RANK"]; 
        
        return html`
            ${pelis.map(peli=> html`
                <div class="card">
                    <div class="head">
                        <div>
                            <h2>${YEAR}</h2>
                            <p>${TITLE}</p>
                        </div>
                        <i class='bx bx-trending-up icon' ></i>
                    </div>
                    <span class="progress" data-value="40%"></span>
                    <span class="label">${RANK}</span>
                </div>
            `)}
        `
    }
}