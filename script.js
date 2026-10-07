function improvePrompt() {

    const userPrompt = document.getElementById("userPrompt").value.trim();

    if (userPrompt === "") {
        alert("Please enter a prompt first!");
        return;
    }

    const improvedPrompt =
`ROLE:
You are an expert AI assistant.

CONTEXT:
The user is a college student.

TASK:
${userPrompt}

REQUIREMENTS:
1. Use simple language.
2. Explain step by step.
3. Give examples.
4. Keep the answer clear and useful.

OUTPUT FORMAT:
Use headings, bullet points, and examples.`;

    document.getElementById("result").innerText = improvedPrompt;
}

function copyPrompt() {
    const result = document.getElementById("result").innerText;
    navigator.clipboard.writeText(result);
    alert("Prompt copied!");
}

function clearPrompt() {
    document.getElementById("userPrompt").value = "";
    document.getElementById("result").innerText =
        "Your improved prompt will appear here...";
}