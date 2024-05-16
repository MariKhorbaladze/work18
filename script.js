/////work 1

const removeButton = document.getElementById ("delete-button");
    button.remove();

////work 2

const image = document.getElementById("img");
image.setAttribute("src","https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");
image.setAttribute("alt","Front_End_Developer");
document.body.appendChild(image);

///work 3 

const input = document.createElement("input");
input.textContent = "The Input Text"
const btn = document.createElement("button");
btn.textContent = "Click To Write"
p.textContent = "paragraph text"
const text = document.createElement("p")
document.createElement("p").textContent = input;


btn.addEventListener("click", () => {
    const inputValue = input.value;
    text.textContent = inputValue;
});

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(text);


////work 4

const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }];

function calculate(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].amount;
    }
    return sum;
};

const total = calculate(productData);

const sum = document.createElement("p");
sum.textContent = `Total: ${total}`;
document.body.appendChild(sum);

function calculate(array) { 
    let sum = 0;
    
}


