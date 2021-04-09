// try {
//   console.log('Abri um arquivo');
//   console.log('Manipulei o arquivo e gerou um erro');
//   console.log('Fechei o arquivo');

// } catch(e) {
//     console.log('Tratando o erro');
// } finally {
//   console.log('Finally: Sempre é executado');

// }

function retornaHora(data)  {
  if (data && !(data instanceof Date))  {
    throw new TypeError('Aguardando instância Date.')
  }

  if (!data)  {
    data = new Date();
  }
  
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}
try {
  const data = new Date('01-01-2020 12:58:12');
  const hora = retornaHora(11);
  console.log(hora);
} catch(e) {
  console.log(e);
} finally {
  console.log('tenha um bom dia.');
}


