// Function demonstrating DOM availability
console.log("Script loaded and executing!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully parsed and loaded.");
});

// Example function to demonstrate script execution behavior
function checkExecutionMode() {
  const contentElement = document.getElementById("content");
  if (contentElement) {
    console.log("DOM element accessible directly:", contentElement.textContent);
  } else {
    console.log(
      "DOM element not accessible yet! (Common with normal or early async scripts)",
    );
  }
}

checkExecutionMode();
