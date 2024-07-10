const userNameInput = document.querySelector('#userName');
    const passwordInput = document.querySelector("#password");
    const submitBtn = document.querySelector('#submitBtn');

    submitBtn.addEventListener('click', function (event) {
      event.preventDefault();

      const user = {
        userName: userNameInput.value.trim(),
        password: passwordInput.value.trim(),
      };
      console.log("meow")

      localStorage.setItem('user', JSON.stringify(user));
    });

    function updateUIWithUsername() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.userName) {
        const signInBox = document.querySelector('.signInBox');
        signInBox.innerHTML = `<p>Welcome, ${user.userName}!</p>`;
      }
    }

    updateUIWithUsername();