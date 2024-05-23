import { LitElement, css, html } from 'lit'
import { getBusqueda } from './get';

export class cardpelis extends LitElement {
    static properties = { //Se cargan las variables
        pelis: { type: Array },
        buscar:{ type: String },
    }
    constructor() {
        super();
        this.buscar="Niram"
        this.pelis = []
        this.loadPelis();
    }
    async loadPelis() {
        try {
            this.pelis = await getBusqueda(this.buscar);
            this.requestUpdate();
        } catch (error) {
            console.error('Error loading pelis:', error);
        }
    }
    static styles = css`^`;
    render() {
        const peli = this.pelis.description
        return html`
            ${peli.map(film=> html`
                <div class="card">
                    <div class="head">
                        <div>
                            <h2>${film.YEAR}</h2>
                            <p>${film.TITLE}</p>
                        </div>
                        <i class='bx bx-trending-up icon' ></i>
                    </div>
                    <span class="progress" data-value="40%"></span>
                    <span class="label">${film.RANK}</span>
                </div>
            `)}
        `
    }
}