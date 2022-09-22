export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do dom  ${seletor} para injear ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
