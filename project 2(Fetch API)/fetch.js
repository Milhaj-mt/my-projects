//------------------DOM SELECTION----------------------\\
const button = document.getElementById("btn")           
const card = document.getElementById("card")
const userImage = document.getElementById("user-img")
const userName = document.getElementById("user-name")
const userEmail = document.getElementById("user-email")
const userCity = document.getElementById("user-city")
//------------------------------------------------------\\

//------------------ADD EVENTLISTNER------------------------\\
button.addEventListener("click",getUser);
         function getUser() {
            button.textContent = "Loading..."
            button.disabled = true

            userName.textContent = "Loading Name..."
            userEmail.textContent = "Loading Email..."
            userCity.textContent = "Loading city..."

            userImage.src = "https://dummyimage.com/120x120/d1d5db/374151&text=User"
            fetch("https://randomuser.me/api/")
                .then((response) => {

                    if(!response.ok){
                        throw new Error("User not found")
                    }
                    return response.json();
                })
                .then((data) => {
                    const user = data.results[0]
                    userName.textContent = user.name.first
                    userEmail.textContent = user.email
                    userCity.textContent = user.location.city
                    userImage.src = user.picture.large
                    console.log(user)
                    button.textContent = "Get Random User";
                    button.disabled = false;
                }) 
                .catch((error) => {
                    console.log(error.message)
                    userName.textContent = "Failed to load user"
                    button.textContent = "Try Again..."
                    button.disabled = false
                })
}
