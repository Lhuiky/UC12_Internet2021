//Calcular a ára do Círculo
function calcularAreaCirculo(raio) {
    area = 3.14 * (raio * raio)
    return area
}

//Calcular IMC
function calcularImc(massa, altura) {
    //Cálculo
    let pesoIdeal = massa / (altura * altura)
    return pesoIdeal
}

//Calcular Raiz Quadrada
function calcularRaiz(radical) {
    //poderia verificar a ocorrência de raiz negativa
	//Cálculo da raiz quadrada
	let raizQuadrada = radical ** (1 / 2)
    return raizQuadrada
}

//Clacular Potência
function calcularPotencia(base, expoente) {
    //Cáclulo da potência
    let potencia = base ** expoente
    return potencia
}

//Calcular Média Ponderada
function calcularMediaPonderada(n1, n2, n3, n4, n5, p1, p2, p3, p4, p5) {
    //Cálculo da Média ponderada
    let mediaPonderada = ((n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4) + (n5 * p5)) /
    (p1 + p2 + p3 + p4 + p5)
return mediaPonderada
}

//Cáculo da conversão de temperatura
function calcularConversao(grau) {
    let conversaoFC = Math.round((grau - 32) * (5 / 9))
    return conversaoFC
}

//Calcular Salário Bruto
function calcularSalarioLiquido(salarioBruto, descInss, descSindicato, descValeTransporte) {
    let salarioLiquido = salarioBruto - descInss - descSindicato - descValeTransporte
    return salarioLiquido
}

//Calcular Área do Triângulo Equilátero
function calcularAreaTriangulo(baseT, alturaT) {
    areaTriangulo = (baseT * alturaT) / 2
    return areaTriangulo
}

//Calcular Hipotenusa
function calcularHipotenusa(ca, co) {
    //Cálculo
    somaCatetos = (co ** 2) + (ca ** 2) //Soma do quadrado dos catetos
    hipotenusa = somaCatetos ** (1/2) //Raiz da soma dos catetos

    return hipotenusa
}

