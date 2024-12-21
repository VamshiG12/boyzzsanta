// Secret Santa Pairing Data
const secretSantaPairs = {
    1: "🎁 Your Secret Santa is Sowmya Akkunamatatta! 🎉",
    2: "🎁 Your Secret Santa is Pavan! 🎉",
    3: "🎁 Your Secret Santa is Santhooossshhhh! 🎉",
    4: "🎁 Your Secret Santa is Vamshi Reddy! 🎉"
};

// Function to Reveal the Secret Santa
function revealSanta() {
    const nameInput = document.getElementById("nameInput").value.trim();
    const numberSelect = document.getElementById("numberSelect").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    // Clear Previous Results
    resultDiv.innerHTML = "";
    errorDiv.innerHTML = "";

    // Validation
    if (!nameInput || !numberSelect) {
        errorDiv.innerHTML = "❌ Please enter your name and select a number!";
        return;
    }

    // Reveal Santa
    const santaMessage = secretSantaPairs[numberSelect];
    if (santaMessage) {
        resultDiv.innerHTML = `🎄 Hello, ${nameInput}! <br> ${santaMessage}`;
    } else {
        errorDiv.innerHTML = "❌ Something went wrong. Please try again!";
    }
}
