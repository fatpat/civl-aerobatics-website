---
---

function toc(input, output, limit, toc_limit) {
    var start = Date.now();
    if (!limit) limit = 6;
    if (!toc_limit) toc_limit = 2;
    if (toc_limit > limit) toc_limit = limit;

    var levels = [];
    for (var i=0; i<6; i++) {
        levels[i] = 0;
    }

    t = $(output);

    var previous = 0;

    $(input + " h1, " + input + " h2," + input + " h3," + input + " h4," + input + " h5," + input + " h6").each(function() {
        var h = parseInt($(this).prop('nodeName').charAt(1));
        if (h > limit) return;

        // increment current level
        levels[h-1]++;

        var level = [];
        for (var i=0; i<h; i++) {
            level.push(levels[i]);
        }
        level = level.join('.');
        $(this).attr('data-level', level);
        $(this).attr('data-name', $(this).text());

        $(this).html('<span id="' + level + '">' + level + '</span>' + '&nbsp;' + $(this).html() + '&nbsp;<span><a href="#top"><ion-icon name="arrow-up-circle-outline" size="small" class="noprint"></ion-icon></a></span>');

        if (h <= toc_limit) {
            if (h > previous) {
                t = $('<ul>').appendTo(t);
            } else if (h < previous ) {
                t = t.parent();
            }
            t.append('<li><a href="#' + $(this).prop('id') + '">' + $(this).attr('data-level') + ' ' + $(this).attr('data-name') + '</a></li>');

            previous = h;
        }

        // reset counter of lower headings
        for (var i = h; i<6; i++) {
            levels[i] = 0;
        }

    });

    // fix links
    $(input + ' a[href="##"]').each(function() {
        level = $('[data-name="' + $(this).text() + '"]').attr('data-level');
        $(this).attr('href', '#' + level);
        $(this).text(level + ' (' + $(this).text() + ')');
    });

    duration = Date.now() - start;
    console.log('Generating TOC took ' + duration + 'ms');
}
