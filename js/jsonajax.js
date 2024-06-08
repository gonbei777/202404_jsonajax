const btn = document.querySelector('#btn')
const info = document.querySelector('#car-info')
let counter = 1

// インスタンスの作成
const request = new XMLHttpRequest()

btn.addEventListener('click', () => {
  // 接続の準備
  request.open('GET', `https://norixx.github.io/jquery_elearing/cars${counter}.json`)

  // データが返ってきた時の処理
  request.onload = () => {
    console.log(request)
    if (request.status === 200) {
      const data = JSON.parse(request.responseText)
      console.log(data)
      outputHtml(data)
    } else {
      alert('データが見つかりませんでした')
    }

  }

  request.onerror = () => {
    alert('接続エラーが起こりました')
  }


  // リクエストの送信
  request.send()

  // カウンター+1増加
  counter++

  if (counter > 3) {
    btn.setAttribute('disabled', 'disabled')
  }

})


// HTMLへの反映
function outputHtml(data) {
  let html = ''
  data.forEach(car => {
    html += `
    <p>${car.name}は${car.brand}の${car.type}タイプの車です。<br>
    色の展開: ${car.colors.join()}
    </p>`
  })
  info.insertAdjacentHTML('afterbegin', html)
}


// Fetch API
async function fetchJsonData() {
  try {
    const fetchedData = await fetch('https://norixx.github.io/jquery_elearing/abccars1.json')
    console.log(fetchedData)
    const data = await fetchedData.json()
    console.log(data)
  } catch (error) {
    console.dir(error.message)
  }

}

fetchJsonData()