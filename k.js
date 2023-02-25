const togg = document.querySelector('.togg')
    const toggicon = document.querySelector('.togg i')
    const droopmenu = document.querySelector('.menu')
    togg.onclick = function () {
      droopmenu.classList.toggle('open')
      const isOpen = droopmenu.classList.contains('open')

      toggicon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
      
    }