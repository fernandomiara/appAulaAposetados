// Fun��o para carregar v�deos do YouTube por t�pico
function loadVideos(topic) {
    const apiKey = '******';  // Substitua pela sua chave de API do YouTube
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${topic}&type=video&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videos = data.items;
            const videoContainer = document.getElementById('video-list');
            videoContainer.innerHTML = ''; // Limpa a lista existente

            // Exibe os v�deos
            videos.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('video');
                videoElement.innerHTML = `
                    <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}" />
                    <h3>${video.snippet.title}</h3>
                    <button onclick="playVideo('${video.id.videoId}')">Assistir</button>
                `;
                videoContainer.appendChild(videoElement);
            });
        })
        .catch(error => console.log(error));
}

// Fun��o para reproduzir v�deo
function playVideo(videoId) {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, '_blank');
}

// Inicializa com v�deos de um t�pico padr�o (exemplo: Tecnologia)
loadVideos('tecnologia');
