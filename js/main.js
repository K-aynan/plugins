$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#CEP").mask("00000-000");
  $("#CPF").mask("000-000-000.00");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      CEP: {
        required: true,
      },
      endereco: {
        required: true,
      },
      CPF: {
        required: true,
      }
    },
    messages: {
      nome: "Por Favor,insira o seu nome",
    },
    messages: {
      email: "Por Favor,insira o seu email",
    },
    messages: {
      telefone: "Por Favor,insira o seu telefone",
    },
    messages: {
      mensagem: "Por Favor,insira a sua mensagem",
    },
    messages: {
      CEP: "Por Favor,insira o seu CEP",
    },
    messages: {
      endereco: "Por Favor,insira o seu endereço completo",
    },
    messages: {
      CPF: "Por Favor,insira o seu CPF",
    },
  });
});