import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }


  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');

    let error = false;

    if (nomeInput.value === '') {
      alert('Você precisa digitar um nome!');
      error = true;
    };

    if (!validator.isEmail(emailInput.value) && telefoneInput.value === '') {
      alert('Você precisa digitar pelo menos um: e-mail ou telefone!');
      error = true;
    }

    if (!error) el.submit();
  }

}