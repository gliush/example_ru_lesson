/* global define $ _ i18n */

define(["terminal/setup"], function() {
  "use strict";
  return function(success) {
      var bashInterpreter = {
        handler: function(command, term) {
          var expected = "man";
          var prog = $.terminal.parseCommand(command);
          if (prog.name === "") { return; }
          if (prog.name === expected) {
            term.echo($.t("bash_man.success"));
            success();
          }
        },
        object: {
          greetings: "",
          name: "bash",
          prompt: "$ "
        }
      };

      return bashInterpreter;
    };
});


