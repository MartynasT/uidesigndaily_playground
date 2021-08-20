const emotions = document.querySelectorAll('.emotion');

emotions.forEach(emotion =>{
  emotion.addEventListener('click', ()=>{
    emotions.forEach(emotion=>{
      emotion.classList.remove('active')
    })
    emotion.classList.add('active');
  })
})