alert('The scripts from the unicorn-greetings loadable feature have been loaded!');

function MainService() {
    this.serviceName = 'unicorn-greetings:MainService';
}

MainService.prototype = {
    implements: ['start', 'ready', 'stop', 'trigger'],

    register: function () {
        SYMPHONY.services.make(this.serviceName, this, this.implements, true, true);
    },

    start: function () {
        alert(this.serviceName + '=> start!');
    },

    ready: function () {
        alert(this.serviceName + '=> ready!');
        // subscribe to the UI service
        this.uiService = SYMPHONY.services.subscribe('ui');
        // register a greeting button
        this.uiService.registerExtension('room', 'unicorn-greeting-room', this.serviceName, {label: 'Unicorn Greeting Button'});
    },

    stop: function () {
        alert(this.serviceName + '=> stop!');
        // unregister our greeting button
        this.uiService.unregisterExtension('room', 'unicorn-greeting-room');
    },

    /**
     * @description Once the UI button is clicked, this method will be fired
     */
    trigger: function (uiClass, id) {
        if(id === 'unicorn-greeting-room') {
            alert('Heey! :)');
        }
    }
}

var mainService = new MainService();
mainService.register();