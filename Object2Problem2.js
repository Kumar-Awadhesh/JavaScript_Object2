//Function to Calculate the Total Value of Object in the Array.
function data(Food){
    let Total=0, rice=0, dal=0, salt=0;
    
    //For loop to iterate Over Array to Calculate Total Value.
    for(let i=0;i<Food.length;i++){
        if(i===0){
            rice+=(Food[i].Quantity*Food[i].Value)
        }
        else if(i===1){
            dal+=(Food[i].Quantity*Food[i].Value)
        }
        else{
            salt+=(Food[i].Quantity*Food[i].Value)
        }

    }
    //Storing the Total Value of rice, dal and salt.
    Total=(rice+dal+salt)

    //returning the Total Value of rice, dal and salt.
    return(Total)
}

//Taking input of Object as an Array.
const Food=[
    {name:"Rice", Quantity:5, Value:150},
    {name:"Dal", Quantity:2, Value:60},
    {name:"Salt", Quantity:3, Value:30}
]

//Calling the Function to Print the Value of Food.
let food=data(Food)
console.log(food)