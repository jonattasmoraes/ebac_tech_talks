AOS.init(); 

const dataDoEvento = new Date("Sep 28, 2023 19:00:00");
const timeStamDoEvento = dataDoEvento.getTime();

const contarAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStamAtual = agora.getTime();

    const distanciaAteEvento = timeStamDoEvento - timeStamAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteEvento < 0) {
        clearInterval(contarAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);