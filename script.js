

let div = document.querySelector('div')

fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>{
    console.log(res);
    return res.json()
}).then((data)=>{
    render(data);
})

function render(photos) {
    console.log(photos);
    photos.map((item)=>{
        let img = document.createElement('img')
        img.src.innerHTML = `${item.thumbnailUrl}`
        div.append(img)

        let p = document.createElement('p')
        p.innerHTML = `${item.id}`
        div.append(p)
    })
}