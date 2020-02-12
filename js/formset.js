// Script to create dynamic forms from a template and add them to a container

const html = document.implementation.createHTMLDocument();

function get_html(template){
    html.body.innerHTML = template;
    return html.body.children[0];
}

function template(id) {
    return (
    `<p class="formset">
        <input type="number" min="0" placeholder="cantidad" name="${id}-quantity" class="quantity"/>
        <input type="number" step="any" min="0" placeholder="largo" name="${id}-length" class="length"/>
        <input type="number" step="any" min="0" placeholder="Ancho" name="${id}-width" class="width"/>
        <input type="number" step="any" min="0" placeholder="Alto" name="${id}-heigth" class="heigth"/>
        <input type="number" step="any" min="0" placeholder="Peso Físico" name="${id}-weigth" class="weigth"/>
        <button type="button" class="delete" >Borrar</button>
    </p>
    `
    )
}

// Create a button element with the id ='add'
const $addButton = document.getElementById('add');

// Create a button element with the id = 'form-container'
const $formContainer = document.getElementById('form-container');
let id = 0;

$addButton.addEventListener('click', function () {
    let $formset = get_html(template(id));
    $formContainer.append($formset);
    id++;
    let $deleteButton = $formset.getElementsByClassName('delete')[0];
    $deleteButton.addEventListener('click', function () {
        this.parentElement.remove();
    })
})