(function (global, $) {
  'use strict'

  var Greetr = function(firstName,lastName,language) {
    return new Greetr.init(firstName,lastName,language)
  }

  Greetr.prototype = {
    fullname: function() {
      return this.firstName + " " + this.lastName;
    },

    validate: function() {
      if(supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid Language"
      }
    },

    greeting: function() {
      return greetings[this.language] + " " + this.firstName
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ", " + this.fullname();
    },

    greet: function(formal) {
      var msg;

      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg)
      }
      return this
    },

    log: function() {
      if (console) {
        console.log(loggedMessages[this.language] + ": " + this.fullname());
      }
      return this
    },

    setLanguage: function(lang) {
      this.language = lang;
      this.validate();

      return this
    },

    HTMLGreeting: function(selector,formal) {
      if(!$) {
        throw 'jQuery not loaded';
      }
      if(!selector) {
        throw "Missing selector";
      }
      var msg;

      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg)
      }

      $(selector).text(msg);
      return this;
    }
  };

  var supportedLanguages = ['en','es']

  var greetings = {
    en: 'Hello',
    es: "Hola"
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  var loggedMessages = {
    en: 'Logged in',
    es: 'Inicio Sesion'
  };

  Greetr.init = function(firstName,lastName,language) {
    this.firstName = firstName || "Nathan";
    this.lastName = lastName || "Hall";
    this.language = language || "en";
  }

Greetr.init.prototype = Greetr.prototype;
global.Greetr = global.G$ = Greetr;

})(window,jQuery);
