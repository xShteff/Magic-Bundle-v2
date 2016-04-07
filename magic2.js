var MagicFeatures = {
    'notifications' : {
        'status' : '',
        'iconURL' : 'https://westzzs.innogamescdn.com/images/interface/chat/chat.gif',
        'releaseDate' : '16th September 2014',
        'fullName' : 'Better Notifications',
        'description' : 'A simple userscript that displays a notification every time you get a new private message. In order for the script to work, you must press the chat bubble that will appear under the settings button, and allow your browser to display notifications for this page.'
    },
    'veteran' : {
        'status' : '',
        'iconURL' : 'https://puu.sh/gdsek/93e29796d4.png',
        'releaseDate' : '16th September 2014',
        'fullName' : 'Veteran Point Counter',
        'description' : 'A simple display of your amount of veteran points, placed conveniently under the top bar.'
    },
    'taskkiller' : {
        'status' : '',
        'iconURL' : 'https://puu.sh/gdsnY/ecb27d9300.png',
        'releaseDate' : '21th September 2014',
        'fullName' : 'Task Killer',
        'description' : 'A perfect script for lazy people (Like the guy that made this userscript). Tired of clicking 9 times to cancel your jobs? No problem! Just press the button placed on the left of the queued jobs, and all your jobs will be gone! It\'s MAGIC!'
    },
    'jobdesign' : {
        'status' : '',
        'iconURL' : 'https://westzzs.innogamescdn.com/images/icons/hammer.png',
        'releaseDate' : '31st October 2014',
        'fullName' : 'Job Window Re-Design',
        'description' : 'An another script for lazy people! This userscript will replace the counter inside the job window, with a custom dropdown! How amazing is that?'
    },
    'multipurchase' : {
        'status' : '',
        'iconURL' : 'https://puu.sh/lfvxl/187895d35c.png',
        'releaseDate' : '10th November 2015',
        'fullName' : 'Multi-Purchase',
        'description' : 'A simple userscript that will allow you to purchase multiple items from the store! Amounts bigger than 27 will suffer a delay, in order to avoid flood protection.</i> <br> Kudos to <a href="https://forum.the-west.net/member.php?u=11236" target="_blank">Slygoxx</a> for helping.'
    }
};

var initialiseStorage = function() {
    $.each(MagicFeatures, function(key) {
        if(localStorage.getItem("magicbundle_feature_" + key) === null){
            localStorage.setItem("magicbundle_feature_" + key, "deactivated");
            MagicFeatures[key]["status"] = "deactivated";
        } else if(localStorage.getItem("magicbundle_feature_" + key) === "activated") {
            MagicFeatures[key]["status"] = "activated";
        } else if(localStorage.getItem("magicbundle_feature_" + key) === "deactivated") {
            MagicFeatures[key]["status"] = "deactivated";
        }
    })
}

var changeFeatureStatus = function(key) {
    var s1 = MagicFeatures[key]['status'];
    var s2 = localStorage.getItem('magicbundle_feature_' + key);
    if(s1 != s2){
        return "Error"; //Should never happen, hopefully.
    } else {
        if(s1 == "activated"){
            MagicFeatures[key]['status'] = "deactivated";
            localStorage.setItem('magicbundle_feature_' + key, "deactivated");
        } else {
            MagicFeatures[key]['status'] = "activated";
            localStorage.setItem('magicbundle_feature_' + key, "activated");
        }
    }
}

window.MagicWindow = {
    window: null,
    currentTab: "notifications",
};

var styling = '<style>.activated { background-position: -49px !important;  } </style>';
$('head').append(styling);

var buildToggleTableRow = function(key, status) {
    console.log(status);
    var tColOne = $('<td>').text('Toggle: ').css('font-weight', 'bold');
    var toggleButton = $('<div>').attr({
        'id' : 'xsht-toggle-' + key,
        'class' : 'xsht-button ' + status
    }).css({
        'width': '50px',
        'height': '17px',
        'border-radius' : '20px',
        'background-image': 'url("http://puu.sh/o9HHe/afc2d04137.png")',
        'background-size': '114px 18px',
        'background-position' : '-17px',
        'transition' : 'background-position 0.5s'
    }).click(function() {
        $(this).toggleClass('activated');
        changeFeatureStatus(key);
    });

    var tColTwo = $('<td>').append(toggleButton);
    var tRow = $('<tr>').append(tColOne).append(tColTwo);
    return tRow;
}

var buildReleaseDateRow = function(date) {
    var tColOne = $('<td>').text('Release Date: ').css('font-weight', 'bold');
    var tColTwo = $('<td>').text(date);
    var tRow = $('<tr>').append(tColOne).append(tColTwo);
    return tRow;
}

var buildDescriptionRow = function(data) {
    var tColOne = $('<td>').attr('colspan', 2).html(data).css({
        'font-style': 'italic',
        'padding-top' : '10px'
    });
    var tRow = $('<tr>').append(tColOne);
    return tRow;
}

var buildWarningRow = function() {
    var tColOne = $('<td>').attr('colspan', 2).css({
        'font-weight' : 'bold',
        'color' : 'red'
    }).text("Please reload the game in order to apply the changes!");
    var tRow = $('<tr>').append(tColOne);
    return tRow;
}

MagicWindow.open = function(tab) {
    if (undefined === tab) tab = this.currentTab;
    var tabclick = function(win, id) {
        MagicWindow.showTab(id);
    }

    MagicWindow.window = wman.open("magicwindow", "Magic Window").setMiniTitle("Magic Window").setSize(400, 350);

    $.each(MagicFeatures, function(key) {
        var contentTable = $('<table>').css('padding-top', '10px');
        contentTable.append(buildToggleTableRow(key, MagicFeatures[key]["status"]));
        contentTable.append(buildReleaseDateRow(MagicFeatures[key]["releaseDate"]));
        contentTable.append(buildDescriptionRow(MagicFeatures[key]["description"]));
        contentTable.append(buildWarningRow());
        var par = $('<div>').attr({
            'class' : 'magic-content',
            'id' : 'magic-' + key,
            'display' : 'none'
        }).html(contentTable);
        MagicWindow.window.addTab('<img src="' + MagicFeatures[key]["iconURL"] + '">', key, tabclick).appendToContentPane(par);
    });

    this.showTab(tab);
};

MagicWindow.showTab = function(id) {
    if (!this.window) return;
    this.currentTab = id;
    this.window.activateTab(id);
    $.each($('#magic-' + id).parent().children(), function() {
        var elID = $(this).attr('id');
        if (elID != "magic-" + id)
            $(this).hide();
        else
            $(this).slideDown('1000');
    });
    switch (id) {
        case "notifications":
            this.window.setTitle('Better Notifications');
            this.window.setMiniTitle('Better Notifications');
            break;
        case "veteran":
            this.window.setTitle('Veteran Point Counter');
            this.window.setMiniTitle('Veteran Point Counter');
            break;
        case "taskkiller":
            this.window.setTitle('Task Killer');
            this.window.setMiniTitle('Task Killer');
            break;
        case "jobdesign":
            this.window.setTitle('Job Window Re-Design');
            this.window.setMiniTitle('Job Window Re-Design');
            break;
        case "multipurchase":
            this.window.setTitle('Multi-Purchase');
            this.window.setMiniTitle('Multi-Purchase');
            break;
    }
};
initialiseStorage();
MagicWindow.open();