let contador = 0;
let imagemAtual = 0;

const imagens = [
    "https://i.pinimg.com/474x/91/f4/29/91f42991cc7460e9898c01e7cc78ff41.jpg",
    "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjr2dhw2qm0x7d@resize_w900_nl.webp",
  "https://i.pinimg.com/736x/13/f4/e2/13f4e23822063f0a74b4784b7a6ff930.jpg",
    "https://i.imgflip.com/30b1gx.jpg",
    "https://i.imgflip.com/1bij.jpg",
    "https://i.imgflip.com/1ur9b0.jpg",
    "https://i.imgflip.com/22bdq6.jpg",
    "https://i.imgflip.com/9ehk.jpg",
    "https://i.imgflip.com/1o00in.jpg",
    "https://i.imgflip.com/1wz1x.jpg",
    "https://i.imgflip.com/26jxvz.jpg",
    "https://i.imgflip.com/1tl71a.jpg",
    "https://i.imgflip.com/1bhk.jpg",
    "https://i.imgflip.com/1o00in.jpg",
    "https://i.imgflip.com/46e43q.jpg",
    "https://i.imgflip.com/2fm6x.jpg",
    "https://i.imgflip.com/5c7lwq.jpg",
    "https://i.imgflip.com/39t1o.jpg",
    "https://i.imgflip.com/1yxkcp.jpg",
    "https://i.imgflip.com/21uy0f.jpg",
    "https://i.imgflip.com/1h7in3.jpg",
    "https://i.imgflip.com/1w7ygt.jpg",
    "https://i.imgflip.com/23ls.jpg",
    "https://i.imgflip.com/2hgfw.jpg",
    "https://i.imgflip.com/3lmzyx.jpg",
    "https://i.imgflip.com/1op9wy.jpg",
    "https://i.imgflip.com/434i5j.jpg",
    "https://i.imgflip.com/2za3u1.jpg"
];
alert("Notificaçao misteriosa do dia! 👀👀👀")

function incrementar() {
  



    contador = contador + 1;

    document.getElementById("contador").innerText = contador;

    if (contador === 3) {
        

        document.getElementById("meme").src = imagens[imagemAtual];

        imagemAtual = imagemAtual + 1;

        contador = 0;

        document.getElementById("contador").innerText = contador;
        
        if (imagemAtual === imagens.length) {
            imagemAtual = 0;
        }
      

      
    }
}
