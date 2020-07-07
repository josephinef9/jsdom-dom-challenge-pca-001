document.addEventListener("DOMContentLoaded", () => {

  /// counter variable
  let counter = document.querySelector("#counter")

  ///// runs counter every second
  let count = setInterval(function () {
      counter.innerText++;
  }, 1000);


  /// DOM Element variables
  let minus = document.getElementById("minus")
  let plus = document.getElementById("plus")
  let love = document.getElementById("hear")
  let pause = document.getElementById("pause")
  let likes = document.querySelector(".likes")

  let submitBtn = document.querySelector("#submit")
  let commentList = document.querySelector("#list")


  // minus button, the inner text starts at 0(can see this on index.html), then we are using -- to decrease that innertext by 1
  minus.addEventListener("click", function(e){
      counter.innerText--;
  });

  // plus button, same as above except incrementing by 1
  plus.addEventListener("click", function(e){
      counter.innerText++;
  });


  // pause button
  pause.addEventListener("click", function(e){
      if (pause.innerText === "pause"){
          pause.innerText = "resume"
          clearInterval(count)
          // if when they click the pasue button and it says pause we switch it to say resume.
          // also when we click the button, clearInterval will stop the counter

          plus.disabled = true;
          minus.disabled = true;
          love.disabled = true;
          submitBtn.disabled = true;
          // disabled is a method you can call
          // The disabled property sets or returns whether a button is disabled, or not.
          // A disabled element is unusable and un-clickable
      }
      else {
          count = setInterval(function () {
              counter.innerText++;
          }, 1000);
          pause.innerText = "pause"

          plus.disabled = false;
          minus.disabled = false;
          love.disabled = false;
          submitBtn.disabled = false;
      }
  });

  // love button
  heart.addEventListener("click", function(e){
      let obj = document.getElementById(`${counter.innerText}`);
      // getting the obj here
      if (obj) {
        obj.children[0].innerText++
      } //if object is found we are doing this
      else {
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
      } // if obj is not found we are doing this
  });

  // submit comments // button
  submitBtn.addEventListener("click", function(e){
      e.preventDefault(); // doesnt let submit to a new page
      let comment = document.querySelector("#comment-form > input[type=text]").value // setting the variable comment equal to the value of what the user types in
      commentList.innerHTML += `<li>${comment}</li>` // we are adding the comment to our comment list
      // document.querySelector("#comment-form").reset();
  });

});