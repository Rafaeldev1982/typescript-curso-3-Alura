export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertykey, descripto) {
        const metodoOriginal = descripto.value;
        descripto.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            retorno;
        };
        return descripto;
    };
}
