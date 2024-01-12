AOS.init();

const dataDoEvento = new Date("Jan 24, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contagemDeDias = setInterval(function(){
    const horaAtual = new Date();
    const timeStampHoraAtual = horaAtual.getTime();

    const diasEmMilisseguindos = 1000 * 60 * 60 * 24
    const horaEmMilissegundos = 1000 * 60 * 60;
    const minutosEmMilissegundos = 1000 * 60

    const tempoAteOEvento = timeStampDoEvento - timeStampHoraAtual;

    const diasAteOEvento = Math.floor(tempoAteOEvento/ diasEmMilisseguindos);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diasEmMilisseguindos) / horaEmMilissegundos);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horaEmMilissegundos) / minutosEmMilissegundos);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutosEmMilissegundos) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (diasAteOEvento < 0 ){
        clearInterval(contagemDeDias);
        document.getElementById('contador').innerHTML = 'Evento expirado.'
    }
}, 1000);