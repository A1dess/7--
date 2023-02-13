// //замыкание
// function getUserProfesson(prof){
//     const Professon = prof.toUpperCase();
//         return function(name){
//             return `${Professon} ${name}`
//         }
// }

// const profMale = getUserProfesson('фронтенд-разработка')
// const profFemala =  getUserProfesson('фронтенд-разработица')
// console.log(profMale('Дастан'));
// console.log(profFemala('Алина'));

document.querySelector('.addBtn').onclick = function(){
    if(document.querySelector('input').value.length === 0){
        alert('заполните поле!');
    }else{
        document.querySelector('.tasks').innerHTML += `
          <div class = 'task'>
            <span class ='taskName'>
             ${document.querySelector('input').value}
            </span>
             <button class = 'delate'>x</button>
          </div>

        `

        //delate
        let delateButton = document.querySelectorAll('.delate')
        for(let i = 0; i < delateButton.length; i++){
            delateButton[i].onclick = function(){
                this.parentNode.remove(); 
            }
        }

        let tasks = document.querySelectorAll('.taskName');
        for(let i = 0; i < delateButton.length; i++){
            tasks [i].onclick = function(){
                this.classList.toggle('completed')
            }
        }
    }
}


class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    speak(){
        console.log(`${this.name} лает`);
    }
}

let dog = new Dog ('Алекс')
dog.speak();

document.querySelector(".addBtn").onclick = function () {
    if (document.querySelector("input").value === "") {
      alert("Pleasr enter a task");
    } else {
      document.querySelector(".tasks").innerHTML += `
      <div class= "task" >
         <span class= "taskName">
         ${document.querySelector("input").value}
      </span>
      <button class="delete">x</button>
      </div>`;
  
      //delete task
      let deleteTask = document.querySelectorAll(".delete");
      for (let i = 0; i < deleteTask.length; i++) {
        deleteTask[i].onclick = function () {
          this.parentNode.remove();
        };
      }
      //done task//
      let tasks = document.querySelectorAll(".taskName");
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
          this.classList.toggle("completed");
        };
      }
      document.querySelector("input").value = "";
      // document.querySelector(".newTask input").value = ""; Второй вариант
    }
  };