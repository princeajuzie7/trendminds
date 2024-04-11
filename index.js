/**
 * Submits form data to the specified API endpoint and updates the UI accordingly.
 *
 * @param {Event} e - The event object triggering the function.
 * @return {Promise} A Promise that resolves when the form data is successfully submitted.
 */
async function Submit(e) {
    e.preventDefault();
    let fullname = document.getElementById('fullname').value
let phone = document.getElementById('phone').value
let email = document.getElementById('email').value
let countrycode = document.getElementById('countrycode').value
let submitText = document.getElementById('signupbutton')
let payload = {fullname, phone, email, countrycode}
    console.log(payload)

    submitText.textContent = "loading..."

  try {
    const apiResponse = await  axios.post("https://back-office.trademindshub.com/pub/v1/user/register", payload)
    const data = apiResponse.data;
    if(data.code === 200){
        submitText.textContent = "thanks for signing up" 
        setTimeout(() => {
            window.location.href = "https://tmh.ediaudiotech.com/"
        }, 3000);
    } 
    console.log(data);
    console.log(apiResponse)
  } catch (error) {
    console.log(error);
     const errormsg = error.response;
    submitText.textContent = errormsg.data.error;
   
   
  

  }
}


/**
 * Handle the cancel action by hiding the modal.
 *
 */

function handleCancel() {
  let modal  = document.getElementById('modal')

  modal.style.display = 'none'
 
}

/**
 * Function to handle opening a modal when a button is clicked.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function handleOpen() {
  let modal  = document.getElementById('modal')
  let openBtn = document.querySelectorAll('#openbtn').forEach((item)=>{

    item.addEventListener('click', function () {
     modal.style.display = 'block'
    })
    console.log(item, "clicked")
  })
}