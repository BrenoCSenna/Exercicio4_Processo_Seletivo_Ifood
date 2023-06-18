function solucao(pesos) {
    if (pesos[0] >= pesos[1]) {
        if ((pesos[0] - pesos[1]) <= 5) {
            return ("PODEM LUTAR");
        }
        else {
            return ("NAO PODEM LUTAR");
        }
    }
    else {
        var x = pesos[0];
        pesos[0] = pesos[1];
        pesos[1] = x;
        return solucao(pesos);
    }

}
