// (function(data){ ... })(data)

(function () {

  const request = new XMLHttpRequest()
  const list = document.querySelector('#list')

  request.open('GET', 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')

  request.onload = () => {

    const data = JSON.parse(request.responseText)

    outputHtml(data)
  }

  request.send()

  function outputHtml(data) {
    let html = ''
    data.forEach(photo => {
      html += `<div class="list-item">
        <p>${photo.id}</p>
        <p><img src="${photo.thumbnailUrl}" alt=""></p>
        <p style="font-weight:bold">${photo.title}</p>
      </div>`
    })

    list.insertAdjacentHTML('afterbegin', html)

  }

})()

