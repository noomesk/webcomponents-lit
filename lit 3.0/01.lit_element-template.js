@customElements("Elemento de Lit")
class SimpleGreeter extends LitElement {

    static styles = css '
    h1 { color: blue; }
    '; 
    
    @property() name: string; 

//
    render(){
        return html '
        <h1>Helllo ${this.name}</h1>
        <button @click=${this.onClick}>Say more... }<button/>
        ';
    }
    
    _onclick(e: Event){
    consoloe.log("Hi again", this.name); 
    }  
}