angular.module("x-com")
    .factory('Users', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('users');
    })
    .factory('Campaigns', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('campaigns');
    })
    .factory('Researches', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('researches');
    })
    .factory('Items', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('items');
    })
    .factory('Classes', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('classes');
    })
    .factory('Research', function () {
        function Research() {
            this.name = "";
            this.description = "";
            this.cost = [];
            this.prerequisite = [];
            this.unlockResearch = [];
            this.unlockItems = [];
            this.unlockFacilities = [];
        }
        return ( Research );
    })
    .factory('DefaultObjects', function () {
        return {
            "resourceObj": [
                {name: "Alloy", total: 0, type: "Comum"},
                {name: "Intel", total: 0, type: "Comum"},
                {name: "Engineers", total: 0, type: "Comum"},
                {name: "Scientists", total: 0, type: "Comum"},
                {name: "Supplies", total: 0, type: "Comum"},
                {name: "Elerium", total: 0, type: "Comum"},
                {name: "Sectoid", total: 0, type: "Alien"},
                {name: "Sectoid Commander", total: 0, type: "Alien"},
                {name: "Thin Man", total: 0, type: "Alien"},
                {name: "Viper", total: 0, type: "Alien"},
                {name: "Outsider", total: 0, type: "Alien"},
                {name: "Faceless", total: 0, type: "Alien"},
                {name: "Floater", total: 0, type: "Alien"},
                {name: "Archon", total: 0, type: "Alien"},
                {name: "Drone", total: 0, type: "Alien"},
                {name: "Muton", total: 0, type: "Alien"},
                {name: "Muton Elite", total: 0, type: "Alien"},
                {name: "Berseker", total: 0, type: "Alien"},
                {name: "Andromedon", total: 0, type: "Alien"},
                {name: "Chryssalid", total: 0, type: "Alien"},
                {name: "Codex", total: 0, type: "Alien"},
                {name: "Gatekeeper", total: 0, type: "Alien"},
                {name: "Avatar", total: 0, type: "Alien"},
                {name: "Ethereal", total: 0, type: "Alien"},
                {name: "Ethereal King", total: 0, type: "Alien"},
                {name: "Viper King", total: 0, type: "Alien"},
                {name: "Berseker Queen", total: 0, type: "Alien"},
                {name: "Archon King", total: 0, type: "Alien"},
                {name: "Sectopod", total: 0, type: "Alien"},
                {name: "Mechtoid", total: 0, type: "Alien"},
                {name: "Seeker", total: 0, type: "Alien"},
                {name: "EXALT Operative", total: 0, type: "Alien"},
                {name: "EXALT Medic", total: 0, type: "Alien"},
                {name: "EXALT Heavy", total: 0, type: "Alien"},
                {name: "EXALT Sniper", total: 0, type: "Alien"},
                {name: "EXALT Elite Operative", total: 0, type: "Alien"},
                {name: "EXALT Elite Medic", total: 0, type: "Alien"},
                {name: "EXALT Elite Heavy", total: 0, type: "Alien"},
                {name: "EXALT Elite Sniper", total: 0, type: "Alien"},
                {name: "ADVENT Trooper", total: 0, type: "Alien"},
                {name: "ADVENT Officer", total: 0, type: "Alien"},
                {name: "ADVENT Stun Lancer", total: 0, type: "Alien"},
                {name: "ADVENT Shieldbearer", total: 0, type: "Alien"}
            ]
        };
    });