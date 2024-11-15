const apiKey = 'AIzaSyBnnZWhNKgeqzNJbK_gFPGnWU7u5NDxSRc'; // Substitua pela sua chave da API

// Função para abrir o vídeo no iframe
function openVideo(url) {
    document.getElementById('videoFrame').src = url;
}

// Função para carregar as informações do vídeo
function carregarInfoVideo(videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoBox = document.getElementById('videoBox');

            if (data.items.length > 0) {
                const video = data.items[0];
                const title = video.snippet.title;
                const description = video.snippet.description;
                const views = video.statistics.viewCount;

                // Atualiza o conteúdo do box e exibe-o
                videoBox.innerHTML = `
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <p>Views: ${views}</p>
                `;
                videoBox.style.display = 'block'; // Exibe o box quando houver conteúdo
            } else {
                console.log("Vídeo não encontrado.");
                limparInfoVideo(); // Se não encontrar o vídeo, limpa o box e esconde
            }
        })
        .catch(error => {
            console.error('Erro ao buscar informações do vídeo:', error);
            limparInfoVideo(); // Em caso de erro, limpa o box e esconde
        });
}

// Função para limpar o conteúdo do box quando o mouse sai do botão
function limparInfoVideo() {
    const videoBox = document.getElementById('videoBox');
    videoBox.innerHTML = ""; // Limpa o conteúdo
    videoBox.style.display = 'none'; // Esconde o box completamente
}

function openVideo(url) {
    document.getElementById('videoFrame').src = url;
}

document.getElementById("openPdfBtn").addEventListener("click", function() {
    var pdfContainer = document.getElementById("pdfContainer");
    var pdfFrame = document.getElementById("pdfFrame");
  
    // Define o caminho para o PDF
    pdfFrame.src = "../manual/manual.pdf";
  
    // Mostra o container
    pdfContainer.style.display = "block";
  });

// Solicitação de senha  

function abrirCampoSenha() {
    // Exibe o campo de senha
    document.getElementById("campoSenha").style.display = "block";
    
    // Foca automaticamente no campo de senha
    document.getElementById("senha").focus();
    
    // Adiciona o evento de "Enter" ao campo de senha
    document.getElementById("senha").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita o comportamento padrão
            verificarSenha(); // Chama a função de verificação da senha
        }
    });
}

function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaCorreta = "flatplana"; // Defina a senha correta aqui

    if (senha === senhaCorreta) {
        // alert("Acesso permitido!");
        location.href = './acessoRestrito/acessoRestrito.html';
    } else {
        alert("Senha incorreta!");
        location.href = './index.html';
    }
}

function openVideo(href) {
    document.getElementById("videoFrame").src = href;
}


// Fim
// function abrirCampoSenha() {
//     // Exibe o campo de senha
//     document.getElementById("campoSenha").style.display = "block";
    
//     // Foca automaticamente no campo de senha
//     document.getElementById("senha").focus();
// }

// function verificarSenha() {
//     const senha = document.getElementById("senha").value;
//     const senhaCorreta = "flatplana"; // Defina a senha correta aqui

//     if (senha === senhaCorreta) {
//         // alert("Acesso permitido!");
//         location.href = './acessoRestrito/acessoRestrito.html';
//     } else {
//         alert("Senha incorreta!");
//         location.href = './index.html';
//     }
// }

// // Adiciona o evento para permitir a confirmação da senha com a tecla Enter
// document.getElementById("senha").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();  //Evita o comportamento padrão do Enter
//         verificarSenha(); // Chama a função de verificação da senha
//     }
// });

function openVideo(href) {
    document.getElementById("videoFrame").src = href;
}
