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
        this.scucha()
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
    static styles = css`
        :host {
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .card{
            min-height:3em;
            min-width: 12em;
            margin:.5em;
            padding:.5em;
            background: var(--light);
            border-radius: 10px;
            box-shadow: 4px 4px 16px rgba(0, 0, 0, .05);
        }
        .card .head {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        .card .head h2 {
            font-size: 24px;
            font-weight: 600;
        }
        .card .head p {
            font-size: 14px;
        }
        .card .head .icon {
            font-size: 20px;
            color: var(--green);
        }
        .card .head .icon.down {
            color: var(--red);
        }
        .card .progress {
            display: block;
            margin-top: 24px;
            height: 10px;
            width: 100%;
            border-radius: 10px;
            background: var(--grey);
            overflow-y: hidden;
            position: relative;
            margin-bottom: 4px;
        }
        .card .progress::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: var(--blue);
            width: var(--value);
        }
        .card .label {
            font-size: 14px;
            font-weight: 700;
        }
    `;
    scucha(){
        const inpo = document.querySelector("#name")
        console.log(inpo);
        
    }
    render() {
        const pelis = this.basePelis
        console.log(pelis);
        
        return html`
        ${pelis.map(peli=> html`
                <div class="card">
                    <div class="head">
                        <div>
                            <h2>${peli["#YEAR"]}</h2>
                            <p>${peli["#TITLE"]}</p>
                        </div>
                        <i class='bx bx-trending-up icon' ></i>
                    </div>
                    <span class="progress" data-value="40%"></span>
                    <span class="label">${peli["#RANK"]}</span>
                </div>
            `)}
        `
    }
}