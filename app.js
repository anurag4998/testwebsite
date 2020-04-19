const database = firebase.database();
const rootRef = database.ref()


rootRef.orderByKey().on('value', snapshot => 
{
    let variable = snapshot.val();
  if(variable.rice_basket.Value == 1) 
    {

        displaycartrice()
    }
    if(variable.sugar_basket.Value == 1) 
    {

        displaycartsugar()
    }
})


function displaycartrice()
{
    let productcontainer = document.querySelector(".products")
    productcontainer.innerHTML = 
    `
    <ul>
        <li style="width:412px">Basmati Rice</li>
        <li> 100 </li>
        <li>
            <button class ="increment" > + </button>
            <text> 1 </text>
            <button class ="decrement" > - </button>
        <li>
    </ul>         
       `



}

function displaycartsugar()
{
    let productcontainer = document.querySelector(".cart")
    productcontainer.innerHTML = 
    `
    <ul>
        <li style="width:412px">Brown Sugar</li>
        <li> 100 </li>
        <li>
            <button class ="increment" > + </button>
            <text> 1 </text>
            <button class ="decrement" > - </button>
        <li>
    </ul>         
       `
}