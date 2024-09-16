const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");

noButton.addEventListener("click", function () {
    // Check the current positions and swap
    const noButtonPosition = noButton.style.right;
    const yesButtonPosition = yesButton.style.left;

    // Swap the positions of Yes and No buttons
    noButton.style.right = (noButtonPosition === '0px') ? '' : '0px';
    yesButton.style.left = (yesButtonPosition === '0px') ? '' : '0px';

    // Display the message for the No button
    message.textContent = "Shutup, say yes!";
    message.style.display = "block";
});

yesButton.addEventListener("click", function () {
    // Display the message for the Yes button
    message.textContent = "Thank you, it means a lot to me!";
    message.style.display = "block";
});
