const logBtn = () => {
    const deleteBtns = document.getElementsByClassName('deleteBtn');

    // Loop through the HTMLCollection and add event listeners
    Array.from(deleteBtns).forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log("btn is working");
        });
    });
}

// Call the function to set up the event listeners
logBtn();
