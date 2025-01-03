<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secret Santa Reveal</title>
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            text-align: center;
            padding: 50px;
            margin: 0;
        }

        h1 {
            color: #333;
        }

        .container {
            background-color: #ffffff;
            padding: 20px;
            max-width: 400px;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        input, select, button {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            background-color: #28a745;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #218838;
        }

        .result, .error {
            margin-top: 20px;
            font-size: 18px;
        }

        .result {
            color: #555;
        }

        .error {
            color: #d9534f;
        }
    </style>
</head>
<body>

    <h1>🎅 Secret Santa Game 🎁</h1>
    <p>Enter your name and pick a number to reveal your Secret Santa!</p>

    <div class="container">
        <!-- Input Fields -->
        <input type="text" id="nameInput" placeholder="Enter your name">
        <select id="numberSelect">
            <option value="" disabled selected>Select a Number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button onclick="revealSanta()">Reveal Your Santa</button>

        <!-- Display Results -->
        <div class="result" id="result"></div>
        <div class="error" id="error"></div>
    </div>

    <script>
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
    </script>

</body>
</html>
