console.log('成功加载main')




getCSS.onclick = () =>{
const request = new XMLHttpRequest()//创建XMLHttpRequest
request.open('GET','/style.css');//调用open方法GET请求 style.css
request.onreadystatechange = () =>{//监听onload事件
    if(request.readyState === 4){
       if(request.status>=200 && request.status<300){
          //创建style标签
          const style = document.createElement('style')
          //填写style内容
         style.innerHTML = request.response
         //把style插到头里面去
         document.body.appendChild(style)
       
    }else{
        alert('加载CSS失败')
    }
  }
}
request.send()//发送请求 
}


getJS.onclick= () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/two.js');
    request.onload = () =>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () =>{}
    request.send()
}

getHTML.onclick= () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/three.html');
    request.onload = () => {
      const div = document.createElement('div')
      div.innerHTML =request.response
      document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}



getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/four.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status===200){
                const dom = request.responseXML
                 const text = dom.getElementsByTagName('warning')[0].textContent
                 console.log(text.trim())
            }
    }
    request.send()
}




getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/five.json')
    request.onreadystatechange= () =>{
        if(request.readyState === 4 && request.status===200){
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
        }
    }
    request.send()
}
