alert("The scripts from the unicorn-greetings loadable feature have been loaded!");

function MainService() {
    this.serviceName = 'unicorn-greetings:MainService';
}

MainService.prototype = {
    implements: ['start', 'ready', 'stop'],

    register: function () {
        SYMPHONY.services.make(this.serviceName, this, this.implements, true, true);
    },

    start: function () {
        alert('start!');
    },

    ready: function () {
        alert('ready!');
    },

    stop: function () {
        alert('stop!');
    }
}

var mainService = new MainService();
mainService.register();