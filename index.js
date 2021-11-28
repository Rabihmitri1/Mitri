fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    
    var OriginalContent = `<div>
    <div class="member">
      <div class="member-img">
        <img src="https://scontent.fbey5-2.fna.fbcdn.net/v/t1.6435-9/87990765_2604292406363761_5131218795993497600_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XWiPID7M3CkAX93w7ic&_nc_ht=scontent.fbey5-2.fna&oh=f38db5decee826db15bfcca463f22bab&oe=61B90FD3" class="img-fluid" alt="">
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info">
        <h4>Rabih Mitri</h4>
        <span>Web Developer</span>
      </div>
    </div>
  </div>`;

    var MyRow = documentElement('MyRow');
    for (let i = 0; i < json.length; i++) {
      console.log(i);
      var mydiv = document.createElement('div');
      mydiv.className = "col-lg-3 col-md-6 d-flex align-items-stretch";
      currentContent = OriginalContent;
      currentContent = currentContent.replace('XXXX',json[i].name);
      currentContent = currentContent.replace('YYYY',json[i].position);
      currentContent = currentContent.replace('ZZZZ',json[i].url);
      mydiv.innerHTML = OriginalContent;
      MyRow.appendChild(mydiv);
    }
 })

  
