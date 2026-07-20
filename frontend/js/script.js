// Create Poll
const createPollForm = document.getElementById("createPollForm");

if (createPollForm) {
    createPollForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const question = document.getElementById("question").value;
        const option1 = document.getElementById("option1").value;
        const option2 = document.getElementById("option2").value;
        const option3 = document.getElementById("option3").value;
        const option4 = document.getElementById("option4").value;

        const options = [option1, option2];

        if (option3) options.push(option3);
        if (option4) options.push(option4);

        try {
            const response = await fetch("https://pollsphere-qpj3.onrender.com/api/polls", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question,
                    options
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Poll Created Successfully!");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Error creating poll");
        }
    });
}