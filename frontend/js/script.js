
// Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("https://pollsphere-qpj3.onrender.com/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "login.html";
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Cannot connect to backend");
        }
    });
}


// Create Group
const createGroupForm = document.getElementById("createGroupForm");

if (createGroupForm) {
    createGroupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const groupName = document.getElementById("groupName").value;
        const groupDescription = document.getElementById("groupDescription").value;

        try {
            const response = await fetch("https://pollsphere-qpj3.onrender.com/api/groups", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: groupName,
                    description: groupDescription
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Group Created Successfully!");
            } else {
                alert(data.message);
            }

        } catch (error) {
            alert("Error creating group");
            console.error(error);
        }
    });
}