    const input = document.getElementById("user-input");
    const output = document.getElementById("results-div");
    const checkbtn = document.getElementById("check-btn")

    function checker() {
        if (input.value === "") {
            alert("Please provide a phone number")
        }
        if (/^\d{3}-\d{3}-\d{4}$/.test(input.value) || /^1 \d{3}-\d{3}-\d{4}$/.test(input.value) || /^1 (\d{3}) \d{3}-\d{4}$/.test(input.value) || /^1(\d{3})\d{3}-\d{4}$/.test(input.value) || /^1 \d{3} \d{3} \d{4}$/.test(input.value) || /^\d{10}$/.test(input.value) || /^(\d{3})\d{3}-\d{4}$/.test(input.value)) {
            output.innerText = `Valid US number: ${input.value}`;
        }
        else{
            output.innerText = `Invalid US number: ${input.value}`;
        }

    }

    function clear1() {
        input.value = "";
        output.innerText = "";
    }

    checkbtn.addEventListener("click", checker);