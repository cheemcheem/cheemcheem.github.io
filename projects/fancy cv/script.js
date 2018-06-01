//const test = "Lorem ipsum dolor sit amet, te nec altera quaestio. Te tale quaestio vis, duo\n                    verterem periculis ad. Facer eripuit ut pri, ex hinc posse quaerendum cum. Eam in sonet dicant\n                    salutandi, simul intellegam vim in. Audire scriptorem ex his, sit veniam semper eripuit at, ne pri\n                    cetero docendi aliquando. No aliquip fuisset duo, no modo affert scripserit est.\n\n                    Esse dolor adipiscing vix et, harum tamquam nec eu, an qui sint atomorum. Id vis nonumy causae\n                    graecis, evertitur consetetur consequuntur an usu. Inermis ceteros sadipscing vix ad, ad assum\n                    expetenda ius. Veniam postea eos at, cibo saepe ceteros per no. Ut erant vivendo eum, cu has autem\n                    diceret postulant. Ferri dicta ludus pri ex, ceteros prodesset quo ne, sea tractatos adipiscing te.\n\n                    Suas legimus adolescens has at, ne soluta inciderint sit, usu ne odio latine vulputate. His stet\n                    nostrud lobortis ad. Ne pro veri oporteat deseruisse, his aliquam perfecto honestatis cu, vix ne\n                    nostrum lobortis consetetur. An noster scripta senserit mei, est ullum sensibus dissentiunt an,\n                    definiebas definitiones no pri. Ut virtute expetendis has, est ea soluta perpetua rationibus.\n\n                    Augue dolores definitiones ut quo. Vix eripuit delectus appetere te, pri at aeterno nostrud\n                    intellegebat. Vix prima timeam interpretaris an, nec dolorum accusata ea, et vix quas partiendo\n                    contentiones. Admodum forensibus quaerendum vis in.\n\n                    Pri facilis insolens reprimique ex, cu his graeco latine. In eam utinam invidunt inimicus, te\n                    oblique corpora eos, vis ad viris partem percipitur. Decore utinam eos id. Vidit malis suscipiantur\n                    te mea, et cum pericula principes.\n\n                    Vis ut veri novum errem, ex inani aeterno omnesque his. Nam semper dolorum maluisset ne, an aeterno\n                    feugiat omittam eam. Et sit doctus minimum, duo eu congue iriure dissentiunt, nam diam dicta\n                    menandri ei. Cu nec soleat ullamcorper, mei nostro deseruisse no. Pri legere vocibus in, ad mea odio\n                    primis maiestatis.\n\n                    No aperiam officiis iudicabit vel, id qui recusabo convenire signiferumque. Eum movet aperiri ea,\n                    pro no quis choro suavitate. Mel intellegat mnesarchum definitionem in, sed nostrud nominavi\n                    expetendis in, ne errem omnesque nec. An has eros eruditi salutandi, melius dolorum et vim.\n\n                    Eum id porro definitionem, malis ubique tritani est ei. Vix modo animal dolorem ut, duo tota feugiat\n                    no. Prompta recusabo sit ei, quo partiendo mediocritatem ea, ei autem erant qualisque mei. Oblique\n                    bonorum gubergren his ne. Est ad dicta persecuti, ea eum graecis fuisset.\n\n                    Ne per odio ponderum. Possit quodsi contentiones mei ad, et ius diceret bonorum. Vix ne cibo\n                    hendrerit, cum at alia facer. Vide decore ne sit, sumo dolorem principes mea ne. Et vidit vivendum\n                    pro, audire signiferumque sea ut.\n\n                    Ex vel fuisset volutpat eloquentiam, pri ceteros suscipit suavitate ea. At esse debitis efficiantur\n                    sed, ei offendit assentior mea, his cu viderer ceteros. Ut nisl partiendo pertinacia cum, ut sit\n                    veniam sadipscing. Ei summo temporibus est, est in doctus offendit convenire. Ei labore molestie\n                    pri.";
$(document).ready(function () {
    checkDataOffset();
    resetNavOnSizeChange();
    window.addEventListener('resize', checkDataOffset, true);
    $('[data-toggle="popover"]').popover();
    $.get("https://platform.linkedin.com/badges/js/profile.js", function (data) {
        data($("<body>"));
    });

    if (window.innerWidth < 768) {
        // addProjects(function () {
        addEducation(function () {
            addLanguages(function () {
                console.log("Finished.")
            })
        })
        // })
    } else {
        addLanguages(function () {
            addEducation(function () {
                // addProjects(function () {
                console.log("Finished.")
                // })
            })
        })
    }

});

$(window).on('resize', resetNavOnSizeChange);

let $el = $("div.scaleable div.LI-profile-badge");
let elHeight = $el.outerHeight();
let elWidth = $el.outerWidth();

let $wrapper = $("div.scaleable");

$wrapper.resizable({
    resize: doResize
});

function doResize(event, ui) {
    let scale = Math.min(
        ui.size.width / elWidth,
        ui.size.height / elHeight
    );

    $el.css({
        transform: "scale(" + scale + ")"
    });
}

let starterData = {
    size: {
        width: $wrapper.width(),
        height: $wrapper.height()
    }
};
doResize(null, starterData);

function resetNavOnSizeChange() {
    let topNavDivClasses = "d-md-none";
    let topNavClasses = "navbar navbar-toggleable-md bg-light navbar-light fixed-top";
    let topNavExpandNameClasses = "navbar-brand";
    let topNavExpandButtonClasses = "navbar-toggler navbar-toggler-right";
    let topNavItemsDivClasses = "collapse navbar-collapse";
    let topNavItemsUl = "navbar navbar-nav mr-auto mt-2 mt-md-0";

    let sideNavDivClasses = "col-md-3 col-xl-2 d-none d-md-block offset-xl-1 sideNav";
    let sideNavClasses = "navbar sidebar navbar-light border rounded";
    let sideNavItemsDivClasses = "sidebar";
    let sideNavItemsUlClasses = "nav nav-pills flex-column";
    let sideNavItemsImageClasses = "card-img-top";

    let visible = "visible";
    let hidden = "hidden";

    let navDiv = $('#nav-div');
    let nav = $('#nav');
    let navExpandName = $('#nav-expand-name');
    let navExpandButton = $('#nav-expand-button');
    let navItemsDiv = $('#nav-items-div');
    let navItemsImage = $('#nav-items-image');
    let navItemsUl = $('#nav-items-ul');

    navDiv.removeClass();
    nav.removeClass();
    navExpandName.removeClass();
    navExpandButton.removeClass();
    navItemsDiv.removeClass();
    navItemsImage.removeClass();
    navItemsUl.removeClass();

    if ($(window).width() < 768) {
        navDiv.addClass(topNavDivClasses);
        nav.addClass(topNavClasses);
        navDiv.css('position', 'relative');
        navExpandName.addClass(topNavExpandNameClasses);
        navExpandButton.addClass(topNavExpandButtonClasses);
        navItemsDiv.addClass(topNavItemsDivClasses);
        navItemsImage.addClass(hidden);
        navItemsUl.addClass(topNavItemsUl);
    } else {
        navDiv.addClass(sideNavDivClasses);
        nav.addClass(sideNavClasses);
        navDiv.css('position', 'fixed');
        navExpandName.addClass(hidden);
        navExpandButton.addClass(hidden);
        navItemsDiv.addClass(sideNavItemsDivClasses);
        navItemsImage.addClass(sideNavItemsImageClasses);
        navItemsUl.addClass(sideNavItemsUlClasses);
        navItemsUl.css('width:100%');
    }
}

function checkDataOffset() {
    if (window.innerWidth < 768) {
        $('<body>').attr('data-offset', "62");
    } else {
        $('<body>').attr('data-offset', "135");

    }
}


function addEducationP() {
    return new Promise((resolve, reject) => {
        let p1 = new Promise(((resolve1, reject1) => {
            $(".education").addClass("visible")
                .done(() => resolve1())
                .fail(() => reject1());
        }));
        let p2 = new Promise(((resolve2, reject2) => {
            $("#Education")
                .css("display", "block")
                .css("visibility", "visible")
                .hide()
                .fadeIn(
                    500,
                    "swing",
                    function () {
                        if (window.innerWidth < 768) {
                            displayUni(
                                function () {
                                    return displayIT(
                                        function () {
                                            return displaySchool(callback)
                                        }
                                    )
                                }
                            )
                        } else {
                            displaySchool(
                                function () {
                                    return displayIT(
                                        function () {
                                            return displayUni(callback)
                                        }
                                    )
                                }
                            )
                        }

                    }
                )
                .after("<br>")
                .done(() => resolve2())
                .fail(() => reject2());
        }));

        p1.then(() => p2).then(() => resolve()).catch((err) => reject(err))

    });
}


function addEducation(callback) {
    // $(".education").addClass("visible");
    // $("#Education")
    //     .css("display", "block")
    //     .css("visibility", "visible")
    //     .hide()
    //     .fadeIn(
    //         500,
    //         "swing",
    //         function () {
    //             if (window.innerWidth < 768) {
    //                 displayUni(
    //                     function () {
    //                         return displayIT(
    //                             function () {
    //                                 return displaySchool(callback)
    //                             }
    //                         )
    //                     }
    //                 )
    //             } else {
    //                 displaySchool(
    //                     function () {
    //                         return displayIT(
    //                             function () {
    //                                 return displayUni(callback)
    //                             }
    //                         )
    //                     }
    //                 )
    //             }
    //
    //         }
    //     ).after("<br>")
    // ;

    addEducationP().then(() => callback())
}

function displayUni(callback) {
    displayEducationComponent(
        "uni",
        "2015 - Present",
        "University of St Andrews",
        "BSci (Honours) Computer Science",
        ["Honours", "Sub-Honours"],
        [
            ["Databases", "Human Computer Interfaces", "Data Encoding", "Computational Complexity", "Artificial Intelligence", "Data Communications and Networks", "Software Engineering Team Project"],
            ["Programming", "Programming with Data", "Foundations of Computation", "The Internet and the Web", "Advanced Programming Projects", "Computer Systems"
            ]],
        true,
        callback
    );
}

function displayIT(callback) {
    displayEducationComponent(
        "openIT",
        "2014",
        "Open IT Training",
        "Completed online Red Hat Linux course.",
        null,
        null,
        true,
        callback);
}

function displaySchool(callback) {
    displayEducationComponent(
        "school",
        "2007 - 2015",
        "The High School of Glasgow",
        "304 UCAS Points",
        ["Advanced Highers", "Highers"],
        [
            ["Mathematics", "Physics"],
            ["English", "Mathematics", "Chemistry", "Physics", "Information Systems", "Computing"]
        ],
        false,
        callback
    );
}

function displayEducationComponent(id, h4, h5, em, cards, lines, breakAfter, callback) {
    const preSelect = "#Education div.card-body div#" + id;
    if (breakAfter) {
        $(preSelect).append("<br>");
    }
    display($(preSelect + " h4"), h4, 10, 1,
        function () {
            display($(preSelect + " h5"), h5, 10, 1,
                function () {
                    display($(preSelect + " em"), em, 10, 1,
                        function () {
                            if (cards !== null && lines !== null) {
                                $(preSelect + " div.row").after("<br>");

                                function displayCard(listIndex, cb) {
                                    const first = $("<div>", {class: "col-sm padded-top"});
                                    const second = $("<div>", {class: "card visible"}).css("display", "block").css("visibility", "visible");
                                    const third = $("<div>", {class: "card-header bg-success text-white"}).css("display", "block").css("visibility", "visible");
                                    const fourth = $("<div>", {class: "card-body"}).css("display", "block");
                                    const fifth = $("<ul>", {class: "myList"});

                                    first.append(second
                                        .append(third.append(cards[listIndex]))
                                        .append(fourth.append(fifth))
                                    );


                                    $("div#Education.card div.card-body div#" + id + " div.row").append(first);
                                    first.css("visibility", "visible").hide().fadeIn(500, "swing");

                                    const li = listIndex;

                                    function addLine(index) {
                                        console.log(index);
                                        if (index < lines[li].length) {
                                            const listItem = $("<li>");
                                            fifth.append(listItem);
                                            listItem.css("visibility", "visible");
                                            display(listItem, lines[li][index], 10, 1, function () {
                                                index += 1;
                                                setTimeout(function () {
                                                    addLine(index);
                                                }, 100)
                                            });
                                        } else {
                                            setTimeout(cb, 250);
                                        }
                                    }

                                    addLine(0)
                                }

                                displayCard(0, function () {
                                    displayCard(1, function () {
                                        setTimeout(callback, 100);
                                    })
                                });


                            } else {
                                setTimeout(callback, 100);
                            }
                        }
                    )
                }
            )
        }
    )
}

function addLanguages(callback) {
    $(".languages").addClass("visible");
    const languagesP = "Through these projects I have learnt the following languages:";
    $("#Languages")
        .css("display", "block")
        .css("visibility", "visible")
        .hide()
        .fadeIn(
            500,
            "swing",
            display(
                $("#Languages div p"),
                languagesP,
                10,
                1,
                function () {
                    function addLogo(index, files, names) {
                        if (index < files.length) {
                            const div = $("<div>", {class: "col-2 col-lg", style: "visibility: hidden;"});
                            const image = $("<img>", {src: "images/logos/" + files[index], class: "media-object logo"});
                            const title = $("<div>", {class: "col-4 d-lg-none align-middle"}).append(names[index]);
                            div.append(image).css("opacity", "0").css('visibility', 'visible');
                            image.addClass("padded-bottom");
                            title.addClass("padded-bottom").css("font-size", "medium").css("opacity", "0");

                            $("div#Languages.card div.card-body div.row").append(div).append(title);
                            div.animate({opacity: 1}, 200);
                            title.animate({opacity: 1}, 200);

                            setTimeout(function () {
                                addLogo(index + 1, files, names);
                            }, 200);
                        } else {
                            setTimeout(callback, 500);

                        }
                    }

                    const names = ["Java", "C", "JavaScript", "Swift", "Python", "Haskell", "AppleScript", "MySQL"];
                    const files = ["java.png", "c.png", "js.jpg", "swift.png", "python.png", "haskell.png", "applescript.png", "mysql.svg"];
                    addLogo(0, files, names);
                }
            )
        ).after("<br>")
    ;
}

function addProjects(callback) {
    $(".projects").addClass("visible");
    $("#Projects")
        .css("display", "block")
        .css("visibility", "visible")
        .hide()
        .fadeIn(500, "swing",
            display($("#Projects div p"), test, 1, 10, callback)
        ).after("<br>")
    ;

}

function newCard(header, body, id, headerType) {
    const $card = $("<div>", {class: "card"});

    let $headerClass;
    if (headerType === "main") {
        $headerClass = "card-header bg-primary text-white";
    } else {
        $headerClass = "card-header bg-success text-white";
    }
    const $header = $("<div>", {class: $headerClass});
    $header.append(header);

    const $body = $("<div>", {class: "card-body"});
    $body.append(body);

    $card.append($header);
    $card.append($body);


    return $card;
}

function display($parent, child, time, count, callback) {

    function update(index) {
        $parent.append(child.substring(index, index + count));
        if (index >= child.length + count) {
            callback();
        } else {
            setTimeout(function () {
                update(index + count);
            }, time);
        }
    }

    update(0);
}
