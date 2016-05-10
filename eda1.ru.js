// ==UserScript==
// @name        pizza
// @namespace   pizza
// @description pizza sorter
// @include     https://*.eda1.ru/*
// @version     1
// @grant       none
pizzas = document.getElementsByClassName('product-info')
bad = new Array()
for (i = 0; i < pizzas.length; i++)
    if ((pizzas[i].textContent.search("шампиньон") >= 0) || (pizzas[i].textContent.search("гриб") >= 0) || (pizzas[i].textContent.search("говядин") >= 0))
        bad.push(i)

for (i = bad.length; i > 0; i--)
    pizzas[bad[i-1]].parentElement.parentElement.remove()
// ==/UserScript==
