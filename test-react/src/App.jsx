function Productcards({productName,discription,rating}){
  return(
    <div>
      <h1>{productName}</h1>
      <p>{discription}</p>
      <p>{rating}</p>
    </div>
  )
}

function Products(){
  return(
    <>
    <Productcards
    productName = "Brush"
    discription = "This Brush Will Brighten Your Tooth"
    rating = {8.9}
    />

    <Productcards 
    productName = "Knife"
    discription = "You Can Even Cut Air Using This Knife"
    rating = {9.5}
    />

    <Productcards
    productName = "Trimmer"
    discription = "You Can Shave Even Your Friends Beard"
    rating = {10}/>
    </>
  )
}

export default Products