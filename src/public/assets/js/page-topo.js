(function headerTransition() {
  const pageTopo = document.getElementById('page-topo')
  const pageTopoClassList = pageTopo.classList
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 20) {
      if (!pageTopoClassList.contains('hide-page-topo')) {
        pageTopoClassList.add('hide-page-topo')
      }
    } else {
      if (pageTopoClassList.contains('hide-page-topo')) {
        pageTopoClassList.remove('hide-page-topo')
      }
    }
  })
})()