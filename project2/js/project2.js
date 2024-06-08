(function () {

  // 住所検索のボタン
  const btn = document.querySelector('#search-btn')
  const form = document.querySelector('#contact-form')
  const requestUrl = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='
  const request = new XMLHttpRequest

  btn.addEventListener('click', () => {
    const url = requestUrl + form.zipcode.value

    request.open('GET', url)

    request.onload = () => {
      const address = JSON.parse(request.responseText)
      console.log(address)
      console.log(address.results[0].address1)

      setAddress(address)

    }

    request.send()

  }) //click

  function setAddress(address) {
    form.pref.value = address.results[0].address1
    form.city.value = address.results[0].address2 + address.results[0].address3
  }

})()