// const s = document.getElementById("text-input")
// let result = document.getElementById("result")

// function checkAlphabets(input) {
//     for (const char of input) {
//         if ((!(char >= "a" && char <= "z") &&
//             !(char >= "A" && char <= "Z")
//         && !(char>=0 && char<=9)) || (char===" ")) {
//             return false;
//         }
//     }
//     return true;
// }

// function inputResult() {
//     if (s.value === "") {
//         alert("Please input a value")
//     }
//     else if (s.value.length == 1) {
//         result.textContent = `${s.value} is a palindrome`
//     }
//     else {
//         const l2 = s.value.split("")
//         let l = []
//         for (let index = 0; index < l2.length; index++) {
//             if (checkAlphabets(l2[index])) {
//                 l.push(l2[index].toLowerCase());
//             }
//         }
//         console.log(l)
//         for (let i = 0; i < l.length / 2; i++) {
//             if (l[i] !== l[l.length - i - 1]) {
//                 result.textContent = `${s.value} is not a palindrome`
//                 return;
//             }
//         }
//         result.textContent = `${s.value} is a palindrome`
//         return;
//     }
// }


const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");



const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click",()=>{confirmCloseDialog.showModal()})