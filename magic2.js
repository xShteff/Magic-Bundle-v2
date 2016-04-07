var MagicFeatures = {
    'notifications' : {
        'iconURL' : 'https://westzzs.innogamescdn.com/images/interface/chat/chat.gif',
        'releaseDate' : '16th September 2014',
        'fullName' : 'Better Notifications',
        'description' : 'A simple userscript that displays a notification every time you get a new private message. In order for the script to work, you must press the chat bubble that will appear under the settings button, and allow your browser to display notifications for this page.'
    },
    'veteran' : {
        'iconURL' : 'https://puu.sh/gdsek/93e29796d4.png',
        'releaseDate' : '16th September 2014',
        'fullName' : 'Veteran Point Counter',
        'description' : 'A simple display of your amount of veteran points, placed conveniently under the top bar.'
    },
    'taskkiller' : {
        'iconURL' : 'https://puu.sh/gdsnY/ecb27d9300.png',
        'releaseDate' : '21th September 2014',
        'fullName' : 'Task Killer',
        'description' : 'A perfect script for lazy people (Like the guy that made this userscript). Tired of clicking 9 times to cancel your jobs? No problem! Just press the button placed on the left of the queued jobs, and all your jobs will be gone! It\'s MAGIC!'
    },
    'jobdesign' : {
        'iconURL' : 'https://westzzs.innogamescdn.com/images/icons/hammer.png',
        'releaseDate' : '31st October 2014',
        'fullName' : 'Job Window Re-Design',
        'description' : 'An another script for lazy people! This userscript will replace the counter inside the job window, with a custom dropdown! How amazing is that?'
    },
    'multipurchase' : {
        'iconURL' : 'https://puu.sh/lfvxl/187895d35c.png',
        'releaseDate' : '10th November 2015',
        'fullName' : 'Multi-Purchase',
        'description' : 'A simple userscript that will allow you to purchase multiple items from the store! Amounts bigger than 27 will suffer a delay, in order to avoid flood protection.</i> <br> Kudos to <a href="https://forum.the-west.net/member.php?u=11236" target="_blank">Slygoxx</a> for helping.'
    }
};

window.MagicWindow = {
    window: null,
    currentTab: "notifications",
};

var styling = '<style>.on { background-position: -49px !important;  } </style>';
$('head').append(styling);

var buildToggleTableRow = function(id) {
    var tColOne = $('<td>').text('Toggle: ').css('font-weight', 'bold');

    var toggleButton = $('<div>').attr({
        'id' : 'xsht-toggle-' + id,
        'class' : 'xsht-button'
    }).css({
        'width': '50px',
        'height': '17px',
        'border-radius' : '20px',
        'background-image': 'url("http://puu.sh/o9HHe/afc2d04137.png")',
        'background-size': '114px 18px',
        'background-position' : '-17px',
        'transition' : 'background-position 0.5s'
    }).click(function() {
        $(this).toggleClass('on');
    });
    /*var toggleButton = $('<div>').attr('id', 'xsht-toggle-' + id).css({
        'height': '20px',
        'width': '50px',
        'background-image': 'url("https://puu.sh/fSUoh/543de27864.png")',
        'background-size': '100%'
    });*/
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
        console.log(key);
    });
    var p1Table = $('<table>').css('padding-top', '10px');
    p1Table.append(buildToggleTableRow('notifications'));
    p1Table.append(buildReleaseDateRow("16th September 2014"));
    p1Table.append(buildDescriptionRow('A simple userscript that displays a notification every time you get a new private message. In order for the script to work, you must press the chat bubble that will appear under the settings button, and allow your browser to display notifications for this page.'));
    p1Table.append(buildWarningRow());
    var p1 = $('<div>').attr({
        'class': 'magic-content',
        'id': 'magic-notifications',
        'display': 'none'
    }).html(p1Table);
    //var icon = $('<img>').attr('src', 'https://westzzs.innogamescdn.com/images/interface/chat/chat.gif');
    MagicWindow.window.addTab("<img src='https://westzzs.innogamescdn.com/images/interface/chat/chat.gif'", "notifications", tabclick).appendToContentPane(p1);

    var p2Table = $('<table>').css('padding-top', '10px');
    p2Table.append(buildToggleTableRow('veteran'));
    p2Table.append(buildReleaseDateRow("16th September 2014"));
    p2Table.append(buildDescriptionRow('A simple display of your amount of veteran points, placed conveniently under the top bar.'));
    p2Table.append(buildWarningRow());
    var p2 = $('<div>').attr({
        'class': 'magic-content',
        'id': 'magic-veteran',
        'display': 'none'
    }).html(p2Table);
    //var icon = $('<img>').attr('src', 'https://puu.sh/gdsek/93e29796d4.png');
    MagicWindow.window.addTab("<img src='https://puu.sh/gdsek/93e29796d4.png'", "veteran", tabclick).appendToContentPane(p2);

    var p3Table = $('<table>').css('padding-top', '10px');
    p3Table.append(buildToggleTableRow('taskkiller'));
    p3Table.append(buildReleaseDateRow("21th September 2014"));
    p3Table.append(buildDescriptionRow('A perfect script for lazy people (Like the guy that made this userscript). Tired of clicking 9 times to cancel your jobs? No problem! Just press the button placed on the left of the queued jobs, and all your jobs will be gone! It\'s MAGIC!'));
    p3Table.append(buildWarningRow());
    var p3 = $('<div>').html(p3Table).attr({
        'class': 'magic-content',
        'id': 'magic-taskkiller',
        'display': 'none'
    });
    //var icon = $('<img>').attr('src', 'https://puu.sh/gdsnY/ecb27d9300.png');
    MagicWindow.window.addTab("<img src='https://puu.sh/gdsnY/ecb27d9300.png'", "taskkiller", tabclick).appendToContentPane(p3);

    var p4Table = $('<table>').css('padding-top', '10px');
    p4Table.append(buildToggleTableRow('jobdesign'));
    p4Table.append(buildReleaseDateRow('31st October 2014'));
    p4Table.append(buildDescriptionRow('An another script for lazy people! This userscript will replace the counter inside the job window, with a custom dropdown! How amazing is that?'));
    p4Table.append(buildWarningRow());
    var p4 = $('<div>').html(p4Table).attr({
        'class': 'magic-content',
        'id': 'magic-jobdesign',
        'display': 'none'
    });
    //var icon = $('<img>').attr('src', 'https://westzzs.innogamescdn.com/images/icons/hammer.png');
    MagicWindow.window.addTab("<img src='https://westzzs.innogamescdn.com/images/icons/hammer.png'", "jobdesign", tabclick).appendToContentPane(p4);

    var p5Table = $('<table>').css('padding-top', '10px');
    p5Table.append(buildToggleTableRow('multipurchase'));
    p5Table.append(buildReleaseDateRow("10th November 2015"));
    p5Table.append(buildDescriptionRow('A simple userscript that will allow you to purchase multiple items from the store! Amounts bigger than 27 will suffer a delay, in order to avoid flood protection.</i> <br> Kudos to <a href="https://forum.the-west.net/member.php?u=11236" target="_blank">Slygoxx</a> for helping.'));
    p5Table.append(buildWarningRow());
    var p5 = $('<div>').html(p5Table).attr({
        'class': 'magic-content',
        'id': 'magic-multipurchase',
        'display': 'none'
    });
    //var icon = $('<img>').attr('src', 'https://puu.sh/lfvxl/187895d35c.png');
    MagicWindow.window.addTab("<img src='https://puu.sh/lfvxl/187895d35c.png'", "multipurchase", tabclick).appendToContentPane(p5);

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
MagicWindow.open();